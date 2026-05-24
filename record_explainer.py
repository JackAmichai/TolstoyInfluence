#!/usr/bin/env python3
"""
record_explainer.py
Automates headlessly recording the animated HTML presentation and converts it to a high-quality, high-definition MP4.
Requirements: playwright (Python package), chromium browser installed via playwright, and system ffmpeg.
"""

import os
import sys
import time
import subprocess
from playwright.sync_api import sync_playwright

def record():
    # Make paths absolute and clean
    base_dir = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(base_dir, "explainer.html")
    video_dir = os.path.join(base_dir, "assets", "videos")
    os.makedirs(video_dir, exist_ok=True)
    
    output_mp4 = os.path.join(video_dir, "explainer.mp4")
    
    if not os.path.exists(html_path):
        print(f"Error: Could not find {html_path}", file=sys.stderr)
        sys.exit(1)

    print("=" * 60)
    print("Tolstoy Influence Explainer Video Generator")
    print("=" * 60)
    
    print("1. Launching headless Playwright Chromium...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        
        # Configure the context for standard 1080p landscape recording
        context = browser.new_context(
            viewport={"width": 1920, "height": 1080},
            record_video_dir=video_dir,
            record_video_size={"width": 1920, "height": 1080}
        )
        
        page = context.new_page()
        
        # Load local HTML presentation
        print(f"2. Loading local HTML presentation: {html_path}")
        page.goto(f"file://{html_path}")
        
        # Wait for the full presentation sequence to finish playing
        # 11 scenes * 8 seconds per scene = 88 seconds.
        # We add a small buffer (1.5 seconds) to capture the final scene transition and CTA fully.
        total_duration_ms = (11 * 8000) + 1500
        total_duration_sec = total_duration_ms / 1000.0
        
        print(f"3. Recording animated presentation for {total_duration_sec:.1f} seconds...")
        print("   (Animations, typewriter transitions, and counter animations are active...)")
        
        # We can print progress updates every 10 seconds to keep the process transparent
        start_time = time.time()
        interval = 10.0
        elapsed = 0.0
        
        while elapsed < total_duration_sec:
            sleep_chunk = min(interval, total_duration_sec - elapsed)
            time.sleep(sleep_chunk)
            elapsed = time.time() - start_time
            percentage = min(100.0, (elapsed / total_duration_sec) * 100)
            print(f"   Progress: {percentage:.1f}% ({elapsed:.1f}s / {total_duration_sec:.1f}s recorded)")
            
        # Get path of temporary WebM video before closing the browser context
        temp_webm_path = page.video.path()
        print(f"4. Temporary recording completed. WebM file located at:\n   {temp_webm_path}")
        
        # Close the context and browser to flush and finalize the WebM file
        print("5. Finalizing video file container...")
        context.close()
        browser.close()
        
    # Convert WebM to MP4 using local ffmpeg
    print("6. Converting WebM file to high-quality MP4 using FFmpeg...")
    
    # FFmpeg command options:
    # -y: overwrite output
    # -i: input file
    # -c:v libx264: H.264 video codec
    # -pix_fmt yuv420p: Pixel format for universal compatibility (QuickTime, browser, mobile, etc.)
    # -profile:v high -level:v 4.0: Modern profiles
    # -crf 18: High quality / visually lossless compression (default is 23, lower is better quality)
    ffmpeg_cmd = [
        "ffmpeg", "-y",
        "-i", temp_webm_path,
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-profile:v", "high",
        "-level:v", "4.0",
        "-crf", "18",
        output_mp4
    ]
    
    try:
        # Run FFmpeg command in background to capture output logs
        result = subprocess.run(
            ffmpeg_cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=True
        )
        print("7. FFmpeg conversion completed successfully!")
        
        # Clean up temporary WebM file to avoid clutter
        if os.path.exists(temp_webm_path):
            os.remove(temp_webm_path)
            print("8. Cleaned up temporary WebM recording.")
            
        print("\n" + "=" * 60)
        print(f"🎉 Success! Beautiful presentation video is ready at:\n   {output_mp4}")
        print(f"File size: {os.path.getsize(output_mp4) / (1024 * 1024):.2f} MB")
        print("=" * 60)
        
    except subprocess.CalledProcessError as e:
        print("\n❌ Error running FFmpeg conversion:", file=sys.stderr)
        print(e.stderr.decode(), file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    record()
