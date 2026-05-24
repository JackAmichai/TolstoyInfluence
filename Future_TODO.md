# Future TODO — Match Provenance & Inventory Proof

A planned enhancement to **Business / Brand review mode** (the approve-or-decline view in `index.html` + `app.js`).

## The idea

Right now, when the AI matches a detected garment to the catalog, the reviewer sees a *verdict* — `Verified in stock` or `Soft match` — but not the **evidence behind it**. Before a brand approves an item, they should be able to see two things:

1. **Where the match came from** — the actual catalog item(s) the AI matched the on-video garment to, so a human can confirm "yes, that's the same product / a close-enough variant."
2. **Proof there's enough to sell** — live inventory depth for the matched SKU, so the reviewer approves knowing the look can actually be fulfilled, not just that *one* unit exists.

This makes the human-in-the-loop step a **data-backed decision** instead of a gut call, and it directly demos two PRD pillars: the three-tier SKU matching (§3) and inventory-safe commerce (§5).

---

## Feature 1 — "Why this match?" provenance drawer

When the reviewer clicks a matched item (or a new **"View match"** chip on the row), expand a drawer showing the catalog candidates the matcher considered.

**For each candidate, show:**
- Catalog product thumbnail (from the brand's own catalog — *not* the video frame)
- Product title + SKU
- Matched variant (colour / size)
- Confidence score (e.g. `92%`)
- Attribute breakdown with ✓ / ✗: **Brand · Category · Colour · Size**

**Behaviour by tier:**
- **STRICT** — show the one exact SKU it locked onto (all attributes ✓).
- **SOFT** — show the nearest available variant(s): *"We found these similar items in your catalog"* — typically same brand + colour, different size, so the reviewer can decide whether the soft match is good enough to sell.
- **FAIL** — (already excluded) — optionally show "closest catalog items" so the brand understands *why* it didn't qualify.

---

## Feature 2 — Inventory proof panel

Inside the same drawer (or below the match status), a compact stock table per matched SKU that proves there's depth to sell.

**Show:**
- **Total units in stock** for the matched product
- **Breakdown by size** (e.g. `XS 4 · S 12 · M 9 · L 6 · XL 2`)
- **Colour availability** for the matched colourway
- **Sell-readiness indicator:**
  - 🟢 `Ready to sell` — stock ≥ threshold across the size run
  - 🟠 `Low stock` — limited units / missing sizes (warn before approving)
  - 🔴 `Insufficient` — would sell out immediately (should not be published)
- Optional: a one-line forecast hook — *"At this look's view rate, ~N days of cover."*

The **Approve** action can stay enabled but surface a warning when status is 🟠/🔴, reinforcing "only publish what you can actually fulfil."

---

## Where it plugs in

- **UI:** extends the existing `.modal-item` rows and `.modal-match-status` block in Business mode. The drawer can sit between the item list and the selected-item detail, or expand inline under the clicked row.
- **Logic:** today `matchTier(item)`, `stockForItem(item)`, and `matchStatusHtml(item)` in `app.js` fake a single verdict + unit count. This feature replaces that with richer per-item match data.

## Data model sketch

Extend each item in the `videos[].items` array (demo-only sample data):

```js
{
  name: 'Camel Leather Blazer', type: 'Blazer', price: 129.99,
  desc: '...',
  match: {
    tier: 'soft',                 // 'strict' | 'soft' | 'fail'
    confidence: 0.88,
    candidates: [
      {
        sku: 'BLZ-CAMEL-892', title: 'Structured Camel Blazer',
        thumb: 'assets/catalog/blazer_camel.png',
        variant: { colour: 'Camel', size: 'M' },
        attrs: { brand: true, category: true, colour: true, size: false },
        stock: { total: 27, bySize: { XS: 4, S: 12, M: 0, L: 9, XL: 2 } }
      }
      // ...nearest variants for soft matches
    ]
  }
}
```

`stockForItem()` becomes a lookup into `candidates[].stock`; sell-readiness is derived from the size run vs. a threshold.

## Acceptance criteria (demo)
- [ ] Clicking a matched item reveals the catalog candidate(s) it matched to, with thumbnail, SKU, variant, confidence, and attribute ✓/✗.
- [ ] SOFT matches list the nearest available variants ("similar items we found in your catalog").
- [ ] Each candidate shows a size-level stock breakdown and a 🟢/🟠/🔴 sell-readiness badge.
- [ ] Approving a 🟠/🔴 item surfaces an inline warning.
- [ ] Works in the existing Business-mode modal on desktop **and** the mobile bottom-sheet.

## Stretch
- "Suggest a better variant" — if the matched size is out of stock but another colour/size is deep, recommend swapping the published variant.
- Bulk view: a catalog-match column in the Tolstoy Influence Dashboard (`dashboard.html`) showing match-rate and stock-cover across all live looks.

## PRD references
- §3 Main Product Capabilities — three-tier SKU matching (STRICT / SOFT / FAIL), real-time inventory check.
- §5 Value Proposition — *"Products that are out of stock never appear… only purchasable items are shown."*
