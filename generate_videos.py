"""
generate_videos.py
Converts thumbnail PNGs → short MP4s with a subtle Ken Burns (zoom + pan) effect.
Output: assets/videos/<name>.mp4  (576×896, 9:14, 24fps, 8 seconds)
"""

import os
import math
import numpy as np
import imageio.v3 as iio
from PIL import Image

SRC_DIR   = "assets/thumbnails"
DST_DIR   = "assets/videos"
FPS       = 24
DURATION  = 8          # seconds
OUT_W, OUT_H = 576, 896   # 9:14 portrait — matches video card aspect-ratio

os.makedirs(DST_DIR, exist_ok=True)

def ken_burns_frames(img: Image.Image, n_frames: int, zoom_start=1.0, zoom_end=1.12):
    """
    Yield PIL frames with a slow zoom-in + slight pan (Ken Burns effect).
    The image is first letterbox-cropped to OUT_W × OUT_H, then zoomed.
    """
    # 1. Resize + center-crop to output aspect ratio
    src_w, src_h = img.size
    target_ratio = OUT_W / OUT_H
    src_ratio    = src_w / src_h

    if src_ratio > target_ratio:          # wider → crop sides
        new_w = int(src_h * target_ratio)
        left  = (src_w - new_w) // 2
        img   = img.crop((left, 0, left + new_w, src_h))
    elif src_ratio < target_ratio:        # taller → crop top/bottom (favour top)
        new_h = int(src_w / target_ratio)
        img   = img.crop((0, 0, src_w, new_h))

    img = img.resize((OUT_W, OUT_H), Image.LANCZOS)
    arr = np.array(img, dtype=np.float32)

    for i in range(n_frames):
        t     = i / max(n_frames - 1, 1)           # 0 → 1
        ease  = t * t * (3 - 2 * t)                 # smoothstep
        zoom  = zoom_start + (zoom_end - zoom_start) * ease

        # Subtle diagonal pan: top-left → bottom-right
        pan_x = 0.02 * ease                         # max 2 % shift
        pan_y = 0.02 * ease

        # Crop box in normalised coords (0-1)
        cx0 = pan_x
        cy0 = pan_y
        cx1 = cx0 + 1.0 / zoom
        cy1 = cy0 + 1.0 / zoom

        # Convert to pixels
        px0 = int(cx0 * OUT_W)
        py0 = int(cy0 * OUT_H)
        px1 = int(cx1 * OUT_W)
        py1 = int(cy1 * OUT_H)

        # Clamp
        px0 = max(0, px0); py0 = max(0, py0)
        px1 = min(OUT_W, px1); py1 = min(OUT_H, py1)

        # Crop, resize back to output size
        crop = Image.fromarray(arr[py0:py1, px0:px1].astype(np.uint8))
        crop = crop.resize((OUT_W, OUT_H), Image.LANCZOS)
        yield np.array(crop, dtype=np.uint8)


def png_to_mp4(src_path: str, dst_path: str):
    img      = Image.open(src_path).convert("RGB")
    n_frames = FPS * DURATION
    frames   = list(ken_burns_frames(img, n_frames))

    # imageio writes via ffmpeg
    iio.imwrite(
        dst_path,
        np.stack(frames),          # (N, H, W, 3)
        fps=FPS,
        codec="libx264",
        quality=8,                 # 1-10 scale; 8 = good balance
        pixelformat="yuv420p",     # broad browser compatibility
    )
    size_kb = os.path.getsize(dst_path) // 1024
    print(f"  ✓ {os.path.basename(src_path)} → {os.path.basename(dst_path)}  ({size_kb} KB)")


def main():
    pngs = sorted(f for f in os.listdir(SRC_DIR) if f.endswith(".png"))
    if not pngs:
        print("No PNG files found in", SRC_DIR)
        return

    print(f"Generating {len(pngs)} videos ({OUT_W}×{OUT_H}, {FPS}fps, {DURATION}s) …\n")
    for fname in pngs:
        src = os.path.join(SRC_DIR, fname)
        dst = os.path.join(DST_DIR, fname.replace(".png", ".mp4"))
        png_to_mp4(src, dst)

    print(f"\nDone. Videos saved to {DST_DIR}/")


if __name__ == "__main__":
    main()
