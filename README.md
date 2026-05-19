# Tolstoy Influence

AI-powered influencer content matching for commerce — automatically turning creator videos into a shoppable, inventory-verified catalog.

## Overview

Tolstoy Influence is a product within the Tolstoy video commerce platform. It bridges the gap between organic influencer content and live inventory: every video from a creator is scanned by AI, every visible clothing item is detected and matched against the brand's catalog (down to SKU, color, and size), and only in-stock, purchasable products are shown to shoppers.

## How It Works

Three filtering layers transform raw influencer content into shoppable, verified product moments:

1. **Smart Curation** — AI identifies relevant influencers and filters only content featuring apparel and accessories.
2. **AI Product Detection & SKU Matching** — Computer vision (YOLO + CLIP) scans every frame, OCR extracts brand labels, and a three-tier matching engine (Strict/Soft/Fail) checks against live inventory.
3. **Human-in-the-Loop Approval** — Videos scoring above 70% confidence are reviewed by a brand's team before going live.

## Product Name

**Tolstoy Influence** follows the Tolstoy product suite naming convention — a single, descriptive word. *Influence* represents the influencer content layer: turning organic creator videos into a structured, shoppable, inventory-matched catalog.

## Key Capabilities

- **Shoppable Video Feed** — TikTok-style vertical feed with inline product tags, one-tap purchase, and outfit-level pricing
- **AI Style Match** — Upload a photo or describe your style to find matching influencers and their looks
- **SKU Matching Engine** — Three-tier logic: Strict (Brand + Category + Color + Size), Soft (Brand + Category + Color), Fail (product not in inventory)
- **Creator Dashboard** — Real-time earnings, video performance analytics, content controls
- **AI Shopper Chat** — Conversational style advisor that recommends influencers based on user preferences

## System Requirements

| Component | Requirement |
|-----------|-------------|
| Brand Integration | Real-time catalog API (Shopify, custom, or feed), inventory webhooks, brand guidelines |
| AI Stack | YOLO-based object detection, CLIP visual similarity, OCR, NVIDIA API or self-hosted inference |
| Content Ingestion | Creator upload portal, optional social API integration, quality pre-screening |
| Moderation | Queue management dashboard, approve/reject workflow, feedback loop for model retraining |

## Value Proposition

- **For brands** — New conversion channel (2-3x traditional social rates), zero-waste ROI from existing seeding campaigns, inventory-safe commerce
- **For shoppers** — Friction-free purchase from content they trust: watch, tap, own the look
- **For influencers** — Authentic monetization with commission on every sale through their content

## Project Structure

```
├── index.html          # Main product page (shoppable video experience)
├── prd.html            # Product Requirements Document (EN + HE)
├── styles.css          # All styles (1276 lines, design system)
├── app.js              # Frontend JavaScript (data, rendering, interactions)
├── api/chat.js         # Serverless function (proxies to NVIDIA API)
├── assets/
│   ├── avatars/        # Influencer profile images
│   └── thumbnails/     # Video thumbnail images
├── logo.png            # Tolstoy logo
└── vercel.json         # Vercel deployment config
```

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS (no framework)
- **Backend:** Vercel serverless functions (Node.js)
- **AI:** NVIDIA API (meta/llama-3.2-90b-vision-instruct) for AI Shopper chat
- **Computer Vision:** YOLO + CLIP pipeline (future phase)
- **Deployment:** Vercel

## PRD

The full Product Requirements Document is available at [`prd.html`](prd.html) in both English and Hebrew, covering:

1. Market Need
2. Product Name: Tolstoy Influence
3. Main Product Capabilities
4. System Requirements
5. Value Proposition
6. Interview Q&A
