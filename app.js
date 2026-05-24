/* ═══════════════════════════════════════════
   TOLSTOY – Application Logic
   ═══════════════════════════════════════════ */

// ── Data ──
const influencers = [
  { id: 'ayiah', name: 'Ayiah Soufi', avatar: 'assets/avatars/ayiah.png', followers: '1.2M', vibe: 'Clean Girl · Minimal Luxe' },
  { id: 'jack',  name: 'Jack Scalise', avatar: 'assets/avatars/jack.png', followers: '890K', vibe: 'Sharp · Smart Casual' },
  { id: 'michal', name: 'Michal Blank', avatar: 'assets/avatars/michal.png', followers: '2.1M', vibe: 'Power Dressing · Statement Pieces' },
  { id: 'jacob', name: 'Jacob Arabo', avatar: 'assets/avatars/jacob.png', followers: '650K', vibe: 'Street Luxe · Vacation Ready' },
];

const videos = [
  // Ayiah
  {
    id: 'a1', influencer: 'ayiah',
    thumb: 'assets/thumbnails/ayiah_1.png',
    video: 'assets/videos/ayiah_1.mp4',
    social: '3.2k customers dressed like Ayiah this week', tag: 'trending', live: true,
    items: [
      { name: 'Cream Cable-Knit Sweater', type: 'Sweater', price: 59.99, desc: 'Cozy oversized cable-knit in soft cream. Perfect for layering.' },
      { name: 'White Wide-Leg Pants', type: 'Pants', price: 44.99, desc: 'High-waisted wide-leg trousers in crisp white cotton.' },
      { name: 'White Leather Sneakers', type: 'Shoes', price: 89.99, desc: 'Clean minimal leather sneakers. Goes with everything.' },
    ]
  },
  {
    id: 'a2', influencer: 'ayiah',
    thumb: 'assets/thumbnails/ayiah_2.png',
    video: 'assets/videos/ayiah_2.mp4',
    social: '1.8k styled this look', tag: 'trending',
    items: [
      { name: 'Camel Leather Blazer', type: 'Blazer', price: 129.99, desc: 'Structured camel leather blazer. Elevate any outfit.' },
      { name: 'Cream Ribbed Top', type: 'Top', price: 34.99, desc: 'Fitted ribbed knit top in cream. A wardrobe essential.' },
      { name: 'Classic Blue Jeans', type: 'Jeans', price: 64.99, desc: 'High-waisted straight-leg jeans in medium wash.' },
      { name: 'Black Crossbody Bag', type: 'Bag', price: 79.99, desc: 'Compact crossbody in pebbled black leather.' },
    ]
  },
  {
    id: 'a3', influencer: 'ayiah',
    thumb: 'assets/thumbnails/ayiah_3.png',
    video: 'assets/videos/ayiah_3.mp4',
    social: '4.1k saved this item', tag: 'new',
    items: [
      { name: 'White Ribbed Crop Top', type: 'Top', price: 34.99, desc: 'Fitted ribbed crop top in crisp white.' },
      { name: 'Beige Linen Trousers', type: 'Pants', price: 54.99, desc: 'Relaxed linen trousers with pleated front detail.' },
      { name: 'Cream Leather Mules', type: 'Shoes', price: 74.99, desc: 'Minimal pointed-toe mules in cream leather.' },
    ]
  },
  // Jack
  {
    id: 'j1', influencer: 'jack',
    thumb: 'assets/thumbnails/jack_1.png',
    video: 'assets/videos/jack_1.mp4',
    social: '2.5k guys bought this look', tag: 'trending',
    items: [
      { name: 'Navy Fitted Blazer', type: 'Blazer', price: 149.99, desc: 'Sharp navy blazer with modern slim fit.' },
      { name: 'White Crew-Neck Tee', type: 'T-Shirt', price: 29.99, desc: 'Premium cotton crew-neck in crisp white.' },
      { name: 'Dark Indigo Jeans', type: 'Jeans', price: 79.99, desc: 'Slim-fit dark wash jeans with stretch.' },
      { name: 'White Leather Sneakers', type: 'Shoes', price: 99.99, desc: 'Minimalist white leather court sneakers.' },
    ]
  },
  {
    id: 'j2', influencer: 'jack',
    thumb: 'assets/thumbnails/jack_2.png',
    video: 'assets/videos/jack_2.mp4',
    social: '1.4k styled this week', tag: 'new',
    items: [
      { name: 'Olive Bomber Jacket', type: 'Jacket', price: 119.99, desc: 'Military-inspired olive bomber with premium hardware.' },
      { name: 'Black Turtleneck', type: 'Top', price: 49.99, desc: 'Slim merino wool turtleneck in jet black.' },
      { name: 'Charcoal Slim Jeans', type: 'Jeans', price: 69.99, desc: 'Faded charcoal jeans with a modern taper.' },
      { name: 'Black Chelsea Boots', type: 'Shoes', price: 139.99, desc: 'Sleek leather Chelsea boots with elastic gore.' },
    ]
  },
  {
    id: 'j3', influencer: 'jack',
    thumb: 'assets/thumbnails/jack_3.png',
    video: 'assets/videos/jack_3.mp4',
    social: '980 saved this look', tag: 'new',
    items: [
      { name: 'Cream Cable Knit Sweater', type: 'Sweater', price: 79.99, desc: 'Heritage cable knit in warm cream.' },
      { name: 'Olive Chinos', type: 'Pants', price: 59.99, desc: 'Slim-fit chinos in deep olive green.' },
      { name: 'White Canvas Sneakers', type: 'Shoes', price: 69.99, desc: 'Classic low-profile canvas sneakers.' },
    ]
  },
  // Michal
  {
    id: 'm1', influencer: 'michal',
    thumb: 'assets/thumbnails/michal_1.png',
    video: 'assets/videos/michal_1.mp4',
    social: '5.6k hearts this week', tag: 'trending',
    items: [
      { name: 'Lavender Chunky Cardigan', type: 'Cardigan', price: 69.99, desc: 'Statement lavender cardigan in ultra-soft yarn.' },
      { name: 'White Lace Camisole', type: 'Top', price: 24.99, desc: 'Delicate lace-trimmed cami in bright white.' },
      { name: 'Distressed Light Jeans', type: 'Jeans', price: 54.99, desc: 'Relaxed-fit jeans with knee distressing.' },
    ]
  },
  {
    id: 'm2', influencer: 'michal',
    thumb: 'assets/thumbnails/michal_2.png',
    video: 'assets/videos/michal_2.mp4',
    social: '2.3k power dressed this week', tag: 'trending', live: true,
    items: [
      { name: 'Black Power Blazer', type: 'Blazer', price: 159.99, desc: 'Double-breasted blazer with gold hardware.' },
      { name: 'White Satin Blouse', type: 'Blouse', price: 59.99, desc: 'Draped cowl-neck blouse in luxe satin.' },
      { name: 'Black Tailored Trousers', type: 'Pants', price: 74.99, desc: 'High-rise slim trousers with pressed crease.' },
      { name: 'Black Suede Ankle Boots', type: 'Shoes', price: 129.99, desc: 'Pointed-toe suede boots with stiletto heel.' },
      { name: 'Black Structured Bag', type: 'Bag', price: 189.99, desc: 'Flap-front structured bag with gold clasp.' },
    ]
  },
  {
    id: 'm3', influencer: 'michal',
    thumb: 'assets/thumbnails/michal_3.png',
    video: 'assets/videos/michal_3.mp4',
    social: '3.9k added to wishlists', tag: 'new',
    items: [
      { name: 'Sage Satin Slip Dress', type: 'Dress', price: 89.99, desc: 'Elegant sage green satin slip dress.' },
      { name: 'Gold Chain Necklace', type: 'Jewelry', price: 39.99, desc: 'Delicate layered chain necklace in gold.' },
      { name: 'Gold Clutch', type: 'Bag', price: 49.99, desc: 'Textured metallic clutch for evening occasions.' },
    ]
  },
  // Jacob
  {
    id: 'jb1', influencer: 'jacob',
    thumb: 'assets/thumbnails/jacob_1.png',
    video: 'assets/videos/jacob_1.mp4',
    social: '1.7k rocked this look', tag: 'new',
    items: [
      { name: 'Tan Suede Bomber', type: 'Jacket', price: 139.99, desc: 'Premium suede bomber jacket in warm tan.' },
      { name: 'Black Henley Shirt', type: 'Top', price: 39.99, desc: 'Slim-fit henley with 3-button placket.' },
      { name: 'Dark Wash Jeans', type: 'Jeans', price: 69.99, desc: 'Slim-tapered jeans in dark indigo wash.' },
      { name: 'Black Athletic Sneakers', type: 'Shoes', price: 119.99, desc: 'Lightweight knit sneakers in matte black.' },
    ]
  },
  {
    id: 'jb2', influencer: 'jacob',
    thumb: 'assets/thumbnails/jacob_2.png',
    video: 'assets/videos/jacob_2.mp4',
    social: '2.1k elevated their wardrobe', tag: 'trending',
    items: [
      { name: 'Charcoal Overcoat', type: 'Coat', price: 199.99, desc: 'Tailored charcoal wool overcoat.' },
      { name: 'White Oxford Shirt', type: 'Shirt', price: 54.99, desc: 'Classic button-down oxford in bright white.' },
      { name: 'Navy Chinos', type: 'Pants', price: 64.99, desc: 'Slim-fit chinos in dark navy.' },
      { name: 'Brown Chelsea Boots', type: 'Shoes', price: 149.99, desc: 'Full-grain leather Chelsea boots in rich brown.' },
    ]
  },
  {
    id: 'jb3', influencer: 'jacob',
    thumb: 'assets/thumbnails/jacob_3.png',
    video: 'assets/videos/jacob_3.mp4',
    social: '3.4k vacation-ready', tag: 'new',
    items: [
      { name: 'Rust Linen Shirt', type: 'Shirt', price: 54.99, desc: 'Relaxed rust-orange linen button-down.' },
      { name: 'White Cotton Tee', type: 'T-Shirt', price: 24.99, desc: 'Soft slub cotton tee in clean white.' },
      { name: 'Khaki Linen Shorts', type: 'Shorts', price: 44.99, desc: 'Relaxed-fit linen shorts in sand khaki.' },
      { name: 'Tan Leather Sandals', type: 'Shoes', price: 59.99, desc: 'Classic slide sandals in natural tan leather.' },
    ]
  },
];

// ── State ──
let selectedInfluencers = new Set();
let cart = [];
let currentVideo = null;
let selectedItemIdx = 0;
let selectedSize = 'S';
let activeFilter = 'all';
let mode = 'customer';                 // 'customer' | 'business'
const reviewState = {};                // videoId -> { itemIdx: 'approved' | 'declined' }

// ── DOM ──
const influencerGrid = document.getElementById('influencer-grid');
const videoGrid = document.getElementById('video-grid');
const emptyFeed = document.getElementById('empty-feed');
const feedTitle = document.getElementById('feed-title');
const searchInput = document.getElementById('search-input');
const modalBackdrop = document.getElementById('modal-backdrop');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartDrawer = document.getElementById('cart-drawer');
const cartBody = document.getElementById('cart-body');
const cartFooter = document.getElementById('cart-footer');
const cartEmpty = document.getElementById('cart-empty');
const cartCountEl = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const toast = document.getElementById('toast');

// ── Render Influencer Cards ──
function renderInfluencers(filter = '') {
  const filtered = influencers.filter(i =>
    i.name.toLowerCase().includes(filter.toLowerCase())
  );
  influencerGrid.innerHTML = filtered.map((inf, idx) => {
    const isSelected = selectedInfluencers.has(inf.id);
    const ctaHtml = isSelected
      ? `<span class="influencer-cta"><span class="dot"></span> Videos loaded</span>`
      : `<span class="influencer-vibe">${inf.vibe}</span>`;
    return `
    <div class="influencer-card ${isSelected ? 'selected' : ''} fade-in-up"
         data-id="${inf.id}" style="animation-delay: ${idx * 0.08}s">
      <img class="influencer-avatar" src="${inf.avatar}" alt="${inf.name}">
      <div class="influencer-info">
        <div class="influencer-name">${inf.name}</div>
        <div class="influencer-followers">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          ${inf.followers}
        </div>
        ${ctaHtml}
      </div>
      <div class="check-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
    </div>`;
  }).join('');
  document.querySelectorAll('.influencer-card').forEach(card => {
    card.addEventListener('click', () => toggleInfluencer(card.dataset.id));
  });
}

function toggleInfluencer(id) {
  if (selectedInfluencers.has(id)) selectedInfluencers.delete(id);
  else selectedInfluencers.add(id);
  renderInfluencers(searchInput.value);
  renderVideos();
  document.getElementById('feed-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Type Icon Helper ──
function getTypeIcon(type) {
  const icons = {
    Sweater:'🧶', Pants:'👖', Shoes:'👟', Blazer:'🧥', Top:'👚', Jeans:'👖',
    Bag:'👜', Jacket:'🧥', Shirt:'👔', Cardigan:'🧶', Blouse:'👚', Dress:'👗',
    Jewelry:'💎', Coat:'🧥', Shorts:'🩳', 'T-Shirt':'👕',
  };
  return icons[type] || '👕';
}

// ── SKU Match & Inventory (deterministic, demo) ──
function _hash(str) { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; }
function matchTier(item) { return _hash(item.name) % 5 === 0 ? 'soft' : 'strict'; }
function stockForItem(item) { return 9 + (_hash(item.name) % 55); }
function hiddenCount(v) { return _hash(v.id) % 3; } // 0–2 items auto-excluded (out of stock)
function matchLabel(item) { return matchTier(item) === 'soft' ? 'Soft match' : 'In stock'; }

function matchStatusHtml(item) {
  if (matchTier(item) === 'soft') {
    return `<div class="match-status match-status--soft">
      <span class="match-status-dot"></span>
      <div><span class="match-status-title">Soft match</span> — brand &amp; colour confirmed, exact size may vary
        <span class="match-status-meta">Checked against live catalog · 2m ago</span></div>
    </div>`;
  }
  return `<div class="match-status match-status--strict">
    <span class="match-status-dot"></span>
    <div><span class="match-status-title">Verified in stock</span> — exact SKU match · ${stockForItem(item)} units left
      <span class="match-status-meta">Synced from live inventory · 2m ago</span></div>
  </div>`;
}

function matchSummaryHtml(v) {
  const shown = v.items.length;
  const hidden = hiddenCount(v);
  const detected = shown + hidden;
  const hiddenTxt = hidden > 0
    ? ` · <span class="ms-hidden">${hidden} hidden (out of stock)</span>`
    : '';
  return `<span class="ms-icon">🛡️</span> AI detected ${detected} products ·
    <span class="ms-matched">${shown} matched to live inventory</span>${hiddenTxt}`;
}

function fmtTime(ts) {
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ── Human-in-the-loop review state (business mode) ──
function getReview(vId, idx) { return reviewState[vId] ? reviewState[vId][idx] : undefined; }
function setReview(vId, idx, val) {
  if (!reviewState[vId]) reviewState[vId] = {};
  if (val) reviewState[vId][idx] = val;
  else delete reviewState[vId][idx];
}
function reviewCounts(v) {
  let approved = 0, declined = 0;
  v.items.forEach((_, i) => {
    const s = getReview(v.id, i);
    if (s === 'approved') approved++;
    else if (s === 'declined') declined++;
  });
  return { approved, declined, pending: v.items.length - approved - declined, total: v.items.length };
}
function renderReviewBar(v) {
  const tallyEl = document.getElementById('modal-review-tally');
  if (!tallyEl) return;
  const c = reviewCounts(v);
  const shopperTxt = c.approved === 0
    ? 'shoppers see nothing yet'
    : `shoppers will see ${c.approved} item${c.approved > 1 ? 's' : ''}`;
  tallyEl.innerHTML = `
    <div class="rev-tally-bar"><span class="rev-tally-fill" style="width:${(c.approved / c.total * 100).toFixed(0)}%"></span></div>
    <div class="rev-tally-line">
      <span class="rev-tally-main"><strong>${c.approved} of ${c.total}</strong> approved — ${shopperTxt}</span>
      <span class="rev-tally-sub">${c.pending} pending · ${c.declined} declined</span>
    </div>`;
  const approveAll = document.getElementById('btn-approve-all');
  if (approveAll) approveAll.style.display = c.pending > 0 ? '' : 'none';
}

// ── Render Video Cards ──
function renderVideos() {
  let filtered = videos;
  if (selectedInfluencers.size > 0)
    filtered = filtered.filter(v => selectedInfluencers.has(v.influencer));
  if (activeFilter !== 'all')
    filtered = filtered.filter(v => v.tag === activeFilter);

  if (selectedInfluencers.size === 1) {
    const inf = influencers.find(i => i.id === [...selectedInfluencers][0]);
    feedTitle.textContent = `${inf.name}'s Looks`;
  } else if (selectedInfluencers.size > 1) {
    feedTitle.textContent = `${selectedInfluencers.size} Creators' Looks`;
  } else {
    feedTitle.textContent = 'Shoppable Videos';
  }

  if (filtered.length === 0) {
    videoGrid.style.display = 'none';
    emptyFeed.style.display = 'block';
    return;
  }
  videoGrid.style.display = 'grid';
  emptyFeed.style.display = 'none';

  const inf_map = {};
  influencers.forEach(i => inf_map[i.id] = i);

  videoGrid.innerHTML = filtered.map((v, idx) => {
    const inf = inf_map[v.influencer];
    const outfitTotal = v.items.reduce((s, it) => s + it.price, 0).toFixed(2);
    const liveBadge = v.live ? `<div class="live-badge"><span class="live-dot"></span>LIVE</div>` : '';
    return `
    <div class="video-card fade-in-up" data-video-id="${v.id}" style="animation-delay: ${idx * 0.07}s">
      <video src="${v.video}" poster="${v.thumb}" muted loop playsinline preload="metadata" class="video-card-vid"></video>
      ${liveBadge}
      <div class="video-card-creator">
        <img src="${inf.avatar}" alt="${inf.name}" class="video-card-creator-avatar">
        <span class="video-card-creator-name">${inf.name} · ${inf.followers}</span>
      </div>
      <div class="price-tags">
        ${v.items.map((item, i) => `<span class="price-tag" style="animation-delay:${i * 0.15}s"><span class="price-tag-emoji">${getTypeIcon(item.type)}</span> ${item.type} · $${item.price.toFixed(2)}</span>`).join('')}
      </div>
      <div class="video-card-outfit-badge">${v.items.length} items · $${outfitTotal}</div>
      <div class="play-btn">
        <svg viewBox="0 0 24 24"><polygon points="6,3 20,12 6,21"/></svg>
      </div>
      <div class="video-overlay">
        <div class="video-bottom">
          <span class="video-social">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            ${v.social}
          </span>
          <button class="btn-shop btn-shop--primary" data-shop-id="${v.id}">Shop the Look</button>
        </div>
      </div>
    </div>`;
  }).join('');

  // Click handlers
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', (e) => { e.stopPropagation(); openModal(card.dataset.videoId); });
  });
  document.querySelectorAll('.btn-shop').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); openModal(btn.dataset.shopId); });
  });

  // Hover-to-play on video cards
  document.querySelectorAll('.video-card').forEach(card => {
    const vid = card.querySelector('.video-card-vid');
    if (!vid) return;
    card.addEventListener('mouseenter', () => { vid.play().catch(() => {}); });
    card.addEventListener('mouseleave', () => { vid.pause(); });
  });

  // IntersectionObserver: auto-play when entering viewport, pause when leaving
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target.querySelector('.video-card-vid');
        if (!vid) return;
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.video-card').forEach(card => observer.observe(card));
  }
}

// ── Modal ──
function openModal(videoId) {
  const v = videos.find(x => x.id === videoId);
  if (!v) return;
  currentVideo = v;
  selectedItemIdx = 0;
  selectedSize = 'S';
  const inf = influencers.find(i => i.id === v.influencer);

  // Set video or image
  const mediaEl = document.getElementById('modal-media-container');
  mediaEl.innerHTML = `
    <button class="modal-close" id="modal-close-inner">✕</button>
    <video src="${v.video}" poster="${v.thumb}" autoplay loop muted playsinline id="modal-video"></video>
    <div class="modal-play-overlay" id="modal-play-overlay">
      <div class="play-btn"><svg viewBox="0 0 24 24"><polygon points="6,3 20,12 6,21"/></svg></div>
    </div>`;
  const vid = document.getElementById('modal-video');
  const playOverlay = document.getElementById('modal-play-overlay');
  vid.addEventListener('click', () => { if (vid.paused) { vid.play(); playOverlay.style.opacity='0'; } else { vid.pause(); playOverlay.style.opacity='1'; } });
  playOverlay.addEventListener('click', () => { vid.play(); playOverlay.style.opacity='0'; });
  vid.play().then(() => { playOverlay.style.opacity = '0'; }).catch(() => { playOverlay.style.opacity = '1'; });
  document.getElementById('modal-close-inner').addEventListener('click', closeModal);

  document.getElementById('modal-avatar').src = inf.avatar;
  document.getElementById('modal-inf-name').textContent = inf.name;

  renderModalItems(v);
  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderModalItems(v) {
  const item = v.items[selectedItemIdx];
  const isBiz = mode === 'business';

  // Item list
  const listEl = document.getElementById('modal-item-list');
  listEl.innerHTML = v.items.map((it, i) => {
    const matchCls = isBiz ? `match-${matchTier(it)}` : '';
    const matchTxt = isBiz ? ` · <span class="modal-item-match">${matchLabel(it)}</span>` : '';
    const st = isBiz ? getReview(v.id, i) : null;
    const stateCls = st ? `rev-${st}` : '';
    const reviewBtns = isBiz ? `
      <div class="modal-item-review">
        <button class="item-rev-btn item-rev-approve ${st === 'approved' ? 'active' : ''}" data-rev="approved" data-idx="${i}" aria-label="Approve item">✓</button>
        <button class="item-rev-btn item-rev-decline ${st === 'declined' ? 'active' : ''}" data-rev="declined" data-idx="${i}" aria-label="Decline item">✕</button>
      </div>` : '';
    return `
    <div class="modal-item ${matchCls} ${stateCls} ${i === selectedItemIdx ? 'active' : ''}" data-idx="${i}">
      <div class="modal-item-icon">${getTypeIcon(it.type)}</div>
      <div class="modal-item-info">
        <span class="modal-item-name">${it.name}</span>
        <span class="modal-item-type">${it.type}${matchTxt}</span>
      </div>
      <span class="modal-item-price">$${it.price.toFixed(2)}</span>
      ${reviewBtns}
    </div>`;
  }).join('');

  // Row click selects item (but not when tapping an approve/decline button)
  listEl.querySelectorAll('.modal-item').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.item-rev-btn')) return;
      selectedItemIdx = parseInt(el.dataset.idx);
      renderModalItems(v);
    });
  });
  // Approve / decline (business mode)
  listEl.querySelectorAll('.item-rev-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      const val = btn.dataset.rev;
      setReview(v.id, idx, getReview(v.id, idx) === val ? null : val);
      renderModalItems(v);
    });
  });

  // Look-level inventory match summary (business only)
  const summaryEl = document.getElementById('modal-match-summary');
  if (summaryEl) summaryEl.innerHTML = isBiz ? matchSummaryHtml(v) : '';

  // Details
  document.getElementById('modal-item-list-label').textContent =
    isBiz ? 'AI-detected items' : 'Items in this look';
  document.getElementById('modal-product-title').textContent = item.name;
  document.getElementById('modal-product-price').textContent = `$${item.price.toFixed(2)}`;
  document.getElementById('modal-product-desc').textContent = item.desc;

  // Per-item match confidence (business only)
  const statusEl = document.getElementById('modal-match-status');
  if (statusEl) statusEl.innerHTML = isBiz ? matchStatusHtml(item) : '';

  // Outfit total (customer)
  const total = v.items.reduce((s, it) => s + it.price, 0);
  document.getElementById('modal-outfit-total').textContent = `Full outfit: $${total.toFixed(2)}`;

  // Size buttons
  document.querySelectorAll('#modal-sizes .size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === selectedSize);
  });

  // Review tally (business)
  if (isBiz) renderReviewBar(v);
}

// (getTypeIcon moved above renderVideos)

function closeModal() {
  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
  const vid = document.getElementById('modal-video');
  if (vid) vid.pause();
  currentVideo = null;
}

modalBackdrop.addEventListener('click', (e) => { if (e.target === modalBackdrop) closeModal(); });

// Size selection (delegated)
document.getElementById('modal-sizes').addEventListener('click', (e) => {
  const btn = e.target.closest('.size-btn');
  if (!btn) return;
  selectedSize = btn.dataset.size;
  document.querySelectorAll('#modal-sizes .size-btn').forEach(b => b.classList.toggle('active', b.dataset.size === selectedSize));
});

// ── Add to Cart ──
document.getElementById('btn-add-cart').addEventListener('click', () => {
  if (!currentVideo) return;
  const item = currentVideo.items[selectedItemIdx];
  const inf = influencers.find(i => i.id === currentVideo.influencer);
  cart.push({
    id: currentVideo.id + '_' + selectedItemIdx + '_' + selectedSize + '_' + Date.now(),
    product: item.name, price: item.price, type: item.type,
    size: selectedSize, thumb: currentVideo.thumb, influencer: inf.name,
    creatorId: inf.id, videoId: currentVideo.id, ts: Date.now(),
  });
  updateCart();
  showToast(`${item.name} added to your bag!`);
});

document.getElementById('btn-add-all').addEventListener('click', () => {
  if (!currentVideo) return;
  const inf = influencers.find(i => i.id === currentVideo.influencer);
  currentVideo.items.forEach((item, i) => {
    cart.push({
      id: currentVideo.id + '_' + i + '_' + selectedSize + '_' + Date.now(),
      product: item.name, price: item.price, type: item.type,
      size: selectedSize, thumb: currentVideo.thumb, influencer: inf.name,
      creatorId: inf.id, videoId: currentVideo.id, ts: Date.now(),
    });
  });
  updateCart();
  closeModal();
  showToast(`Full outfit (${currentVideo.items.length} items) added to your bag!`);
});

document.getElementById('btn-wishlist').addEventListener('click', () => {
  const btn = document.getElementById('btn-wishlist');
  const isLiked = btn.textContent.trim() === '♥';
  btn.textContent = isLiked ? '♡' : '♥';
  btn.style.color = isLiked ? '' : '#ef4444';
  btn.style.borderColor = isLiked ? '' : '#ef4444';
  showToast(isLiked ? 'Removed from wishlist' : 'Added to wishlist ♥');
});

// ── Cart ──
function updateCart() {
  cartCountEl.textContent = cart.length;
  cartCountEl.classList.toggle('visible', cart.length > 0);
  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartFooter.style.display = 'none';
    cartBody.querySelectorAll('.cart-item').forEach(el => el.remove());
    return;
  }
  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'block';
  cartBody.querySelectorAll('.cart-item').forEach(el => el.remove());
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.thumb}" alt="${item.product}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.product}</div>
        <div class="cart-item-size">${item.type} · Size: ${item.size}</div>
        ${item.videoId ? `<div class="cart-item-attr">🎬 ${item.influencer} · clip ${item.videoId} · ${fmtTime(item.ts)}</div>` : ''}
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <button class="cart-item-remove" data-cart-id="${item.id}">Remove</button>
      </div>`;
    cartBody.appendChild(div);
  });
  cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => { cart = cart.filter(c => c.id !== btn.dataset.cartId); updateCart(); });
  });
  cartTotalPrice.textContent = `$${cart.reduce((s, c) => s + c.price, 0).toFixed(2)}`;
}

document.getElementById('cart-btn').addEventListener('click', () => {
  cartBackdrop.classList.add('active'); cartDrawer.classList.add('open'); document.body.style.overflow = 'hidden';
});
function closeCart() {
  cartBackdrop.classList.remove('active'); cartDrawer.classList.remove('open'); document.body.style.overflow = '';
}
document.getElementById('cart-close').addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', (e) => { if (e.target === cartBackdrop) closeCart(); });
// ── Attribution Receipt (checkout) ──
const receiptBackdrop = document.getElementById('receipt-backdrop');
function openReceipt() {
  if (cart.length === 0) return;
  const total = cart.reduce((s, c) => s + c.price, 0);
  document.getElementById('receipt-body').innerHTML =
    cart.map(it => `
      <div class="receipt-row">
        <img src="${it.thumb}" alt="">
        <div class="receipt-row-info">
          <div class="receipt-row-name">${it.product}</div>
          <div class="receipt-row-attr">🎬 ${it.influencer} · clip ${it.videoId || '—'} · ${it.ts ? fmtTime(it.ts) : ''}</div>
        </div>
        <div class="receipt-row-price">$${it.price.toFixed(2)}</div>
      </div>`).join('') +
    `<div class="receipt-total"><span>Attributed order total</span><span>$${total.toFixed(2)}</span></div>`;
  closeCart();
  receiptBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeReceipt() {
  receiptBackdrop.classList.remove('active');
  document.body.style.overflow = '';
  cart = [];
  updateCart();
}
document.getElementById('btn-checkout').addEventListener('click', openReceipt);
document.getElementById('receipt-close').addEventListener('click', closeReceipt);
receiptBackdrop.addEventListener('click', (e) => { if (e.target === receiptBackdrop) closeReceipt(); });

// ── Search ──
searchInput.addEventListener('input', () => renderInfluencers(searchInput.value));

// ── Feed Tabs ──
document.querySelectorAll('.feed-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.feed-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeFilter = tab.dataset.filter;
    renderVideos();
  });
});

// ── Toast ──
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ── Keyboard ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (receiptBackdrop.classList.contains('active')) closeReceipt();
    if (modalBackdrop.classList.contains('active')) closeModal();
    if (cartBackdrop.classList.contains('active')) closeCart();
  }
});

// ── AI Shopper Chat ──
const aiToggle = document.getElementById('ai-toggle');
const aiChat = document.getElementById('ai-chat');
const aiChatOverlay = document.getElementById('ai-chat-overlay');
const aiChatBody = document.getElementById('ai-chat-body');
const aiChatInput = document.getElementById('ai-chat-input');
const aiSendBtn = document.getElementById('ai-send-btn');
const aiChatClear = document.getElementById('ai-chat-clear');
const aiChatClose = document.getElementById('ai-chat-close');
const aiFileInput = document.getElementById('ai-file-input');

const AI_QUICK_REPLIES = [
  'Show me casual looks 👕',
  'Under $100 total outfit 💸',
  'Style like Ayiah ✨',
  'Best trending looks 🔥',
];

function openAiChat() {
  aiChat.classList.add('open');
  aiChatOverlay.classList.add('active');
  aiToggle.classList.add('hidden');
  aiChatInput.focus();
  // Inject quick-reply chips if not already present
  if (!aiChatBody.querySelector('.ai-quick-replies')) {
    injectQuickReplies();
  }
}

function closeAiChat() {
  aiChat.classList.remove('open');
  aiChatOverlay.classList.remove('active');
  aiToggle.classList.remove('hidden');
}

function injectQuickReplies() {
  const repliesEl = document.createElement('div');
  repliesEl.className = 'ai-quick-replies';
  AI_QUICK_REPLIES.forEach(text => {
    const chip = document.createElement('button');
    chip.className = 'ai-quick-reply';
    chip.textContent = text;
    chip.addEventListener('click', () => {
      repliesEl.remove();
      sendMessage(text);
    });
    repliesEl.appendChild(chip);
  });
  aiChatBody.appendChild(repliesEl);
  aiChatBody.scrollTop = aiChatBody.scrollHeight;
}

function addMessage(role, html) {
  const wrap = document.createElement('div');
  wrap.className = `ai-message ai-message--${role}`;
  const avatar = document.createElement('div');
  avatar.className = 'ai-message-avatar';
  avatar.textContent = role === 'bot' ? '✦' : 'U';
  const content = document.createElement('div');
  content.className = 'ai-message-content';
  content.innerHTML = html;
  wrap.appendChild(avatar);
  wrap.appendChild(content);
  aiChatBody.appendChild(wrap);
  aiChatBody.scrollTop = aiChatBody.scrollHeight;
}

function addTypingIndicator() {
  const wrap = document.createElement('div');
  wrap.className = 'ai-message ai-message--bot';
  wrap.id = 'ai-typing-wrap';
  const avatar = document.createElement('div');
  avatar.className = 'ai-message-avatar';
  avatar.textContent = '✦';
  const typing = document.createElement('div');
  typing.className = 'ai-typing';
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.className = 'ai-typing-dot';
    typing.appendChild(dot);
  }
  wrap.appendChild(avatar);
  wrap.appendChild(typing);
  aiChatBody.appendChild(wrap);
  aiChatBody.scrollTop = aiChatBody.scrollHeight;
  return wrap;
}

async function sendMessage(text, imageBase64 = null) {
  if (!text.trim() && !imageBase64) return;
  // Remove quick replies if still visible
  const qr = aiChatBody.querySelector('.ai-quick-replies');
  if (qr) qr.remove();

  const userHtml = imageBase64
    ? `<p>${text}</p><img src="${imageBase64}" class="ai-uploaded-img" alt="uploaded">`
    : `<p>${text}</p>`;
  addMessage('user', userHtml);
  aiChatInput.value = '';

  const typingEl = addTypingIndicator();

  // Build messages for API
  const systemPrompt = `You are an AI fashion stylist for Tolstoy Influence, a shoppable influencer video platform. Our creators are: Ayiah Soufi (Clean Girl · Minimal Luxe, 1.2M followers), Jack Scalise (Sharp · Smart Casual, 890K followers), Michal Blank (Power Dressing · Statement Pieces, 2.1M followers), Jacob Arabo (Street Luxe · Vacation Ready, 650K followers). Help users find their perfect look, recommend creators that match their style, and suggest shoppable outfits from our platform. Keep responses concise, engaging, and fashion-forward. Use emojis occasionally.`;

  const userContent = imageBase64
    ? [{ type: 'text', text }, { type: 'image_url', image_url: { url: imageBase64 } }]
    : text;

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'meta/llama-3.2-90b-vision-instruct',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userContent },
        ],
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    typingEl.remove();

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${res.status}`);
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I couldn\'t get a response. Try again!';

    // Format reply — convert **bold** and newlines
    const formatted = reply
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .split('\n').filter(l => l.trim()).map(l => `<p>${l}</p>`).join('');

    addMessage('bot', formatted);

    // If reply mentions a creator, show match cards
    const mentioned = influencers.filter(inf =>
      reply.toLowerCase().includes(inf.name.toLowerCase().split(' ')[0].toLowerCase())
    );
    if (mentioned.length > 0) {
      const lastMsg = aiChatBody.querySelector('.ai-message--bot:last-child .ai-message-content');
      if (lastMsg) {
        mentioned.slice(0, 2).forEach(inf => {
          const card = document.createElement('div');
          card.className = 'ai-match-card';
          card.innerHTML = `
            <img src="${inf.avatar}" alt="${inf.name}">
            <div class="ai-match-card-info">
              <div class="ai-match-card-name">${inf.name}</div>
              <div class="ai-match-card-vibe">${inf.vibe} · ${inf.followers}</div>
            </div>
            <span class="ai-match-card-cta">View Looks →</span>`;
          card.addEventListener('click', () => {
            closeAiChat();
            if (!selectedInfluencers.has(inf.id)) toggleInfluencer(inf.id);
          });
          lastMsg.appendChild(card);
        });
      }
    }
  } catch (err) {
    typingEl.remove();
    addMessage('bot', `<p>Hmm, I ran into an issue: <em>${err.message}</em>. Please try again!</p>`);
    aiChatBody.querySelector('.ai-message--bot:last-child').classList.add('ai-message--error');
  }
}

aiToggle.addEventListener('click', openAiChat);
aiChatClose.addEventListener('click', closeAiChat);
aiChatOverlay.addEventListener('click', closeAiChat);
aiChatClear.addEventListener('click', () => {
  aiChatBody.innerHTML = `
    <div class="ai-message ai-message--bot">
      <div class="ai-message-avatar">✦</div>
      <div class="ai-message-content">
        <p>Hi! I'm your <strong>AI Shopper</strong>. Upload a photo of someone whose style you love — I'll find similar influencers and their shoppable looks for you.</p>
        <p>Or just tell me what you're looking for.</p>
      </div>
    </div>`;
  injectQuickReplies();
});
aiSendBtn.addEventListener('click', () => sendMessage(aiChatInput.value));
aiChatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(aiChatInput.value); }
});
aiFileInput.addEventListener('change', () => {
  const file = aiFileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    sendMessage('Here\'s a photo of a style I love. Who should I follow on Tolstoy?', e.target.result);
  };
  reader.readAsDataURL(file);
  aiFileInput.value = '';
});

// ── Hero CTA Button ──
const heroScrollBtn = document.getElementById('hero-scroll-btn');
if (heroScrollBtn) {
  heroScrollBtn.addEventListener('click', () => {
    document.getElementById('influencers-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ── Stats Counter Animation ──
function animateCounter(el, target, suffix = '') {
  const duration = 1800;
  const start = performance.now();
  const isDecimal = String(target).includes('.');
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = isDecimal
      ? (eased * target).toFixed(1)
      : Math.floor(eased * target);
    el.textContent = Number(current).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = Number(target).toLocaleString() + suffix;
  }
  requestAnimationFrame(step);
}

function initStatsObserver() {
  const statsBar = document.querySelector('.stats-bar');
  if (!statsBar) return;
  const statVals = statsBar.querySelectorAll('.stat-val');
  const targets = [12, 2000, 3, 94];
  const suffixes = ['', '+', '%', '%'];
  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statVals.forEach((el, i) => {
          animateCounter(el, targets[i], suffixes[i]);
        });
      }
    });
  }, { threshold: 0.4 });
  observer.observe(statsBar);
}

// ── Swipe down to close modal on touch ──
let _swipeStartY = 0;
modalBackdrop.addEventListener('touchstart', (e) => {
  _swipeStartY = e.touches[0].clientY;
}, { passive: true });
modalBackdrop.addEventListener('touchend', (e) => {
  if (!modalBackdrop.classList.contains('active')) return;
  const delta = e.changedTouches[0].clientY - _swipeStartY;
  if (delta > 90) closeModal();
}, { passive: true });

// ── Tap-to-play on video cards (touch devices) ──
document.addEventListener('touchstart', (e) => {
  const card = e.target.closest('.video-card');
  if (!card) return;
  const vid = card.querySelector('.video-card-vid');
  if (!vid) return;
  if (vid.paused) vid.play().catch(() => {});
}, { passive: true });

// ── Business review actions ──
document.getElementById('btn-approve-all').addEventListener('click', () => {
  if (!currentVideo) return;
  currentVideo.items.forEach((_, i) => {
    if (!getReview(currentVideo.id, i)) setReview(currentVideo.id, i, 'approved');
  });
  renderModalItems(currentVideo);
  showToast('All remaining items approved');
});
document.getElementById('btn-publish-look').addEventListener('click', () => {
  if (!currentVideo) return;
  const c = reviewCounts(currentVideo);
  if (c.approved === 0) { showToast('Approve at least one item before publishing'); return; }
  showToast(`✓ Look published — ${c.approved} item${c.approved !== 1 ? 's' : ''} now live to shoppers`);
  closeModal();
});

// ── Mode: Customer vs Business ──
const modeGate = document.getElementById('mode-gate');
function safeGetMode() { try { return localStorage.getItem('tolstoy_mode'); } catch (e) { return null; } }
function safeSetMode(m) { try { localStorage.setItem('tolstoy_mode', m); } catch (e) {} }

function setMode(m, persist = true) {
  mode = (m === 'business') ? 'business' : 'customer';
  if (persist) safeSetMode(mode);
  document.body.classList.toggle('mode-business', mode === 'business');
  document.body.classList.toggle('mode-customer', mode === 'customer');
  document.querySelectorAll('.mode-switch-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.mode === mode));
  if (currentVideo) renderModalItems(currentVideo);   // re-render an open modal in the new view
}

function hideGate() { modeGate.classList.remove('active'); document.body.style.overflow = ''; }
function showGate() { modeGate.classList.add('active'); document.body.style.overflow = 'hidden'; }

modeGate.querySelectorAll('[data-mode]').forEach(el =>
  el.addEventListener('click', () => { setMode(el.dataset.mode); hideGate(); }));
document.querySelectorAll('.mode-switch-btn').forEach(b =>
  b.addEventListener('click', () => setMode(b.dataset.mode)));

function initMode() {
  const saved = safeGetMode();
  if (saved === 'customer' || saved === 'business') {
    setMode(saved);
  } else {
    setMode('customer', false);   // default look behind the gate, but don't lock it in
    showGate();
  }
}

// ── Init ──
initMode();
renderInfluencers();
renderVideos();
initStatsObserver();
