/* ═══════════════════════════════════════════
   TOLSTOY – Application Logic
   ═══════════════════════════════════════════ */

// ── Data ──
const influencers = [
  { id: 'ayiah', name: 'Ayiah Soufi', avatar: 'assets/avatars/ayiah.png', followers: '1.2M' },
  { id: 'jack',  name: 'Jack Scalise', avatar: 'assets/avatars/jack.png', followers: '890K' },
  { id: 'michal', name: 'Michal Blank', avatar: 'assets/avatars/michal.png', followers: '2.1M' },
  { id: 'jacob', name: 'Jacob Arabo', avatar: 'assets/avatars/jacob.png', followers: '650K' },
];

const videos = [
  // Ayiah
  {
    id: 'a1', influencer: 'ayiah',
    thumb: 'assets/thumbnails/ayiah_1.png',
    video: 'assets/videos/ayiah_1.mp4',
    social: '3.2k customers dressed like Ayiah this week', tag: 'trending',
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
    social: '2.3k power dressed this week', tag: 'trending',
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
  influencerGrid.innerHTML = filtered.map((inf, idx) => `
    <div class="influencer-card ${selectedInfluencers.has(inf.id) ? 'selected' : ''} fade-in-up"
         data-id="${inf.id}" style="animation-delay: ${idx * 0.08}s">
      <img class="influencer-avatar" src="${inf.avatar}" alt="${inf.name}">
      <div class="influencer-info">
        <div class="influencer-name">${inf.name}</div>
        <span class="influencer-cta"><span class="dot"></span> Watch Shoppable Video</span>
      </div>
      <div class="check-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('.influencer-card').forEach(card => {
    card.addEventListener('click', () => toggleInfluencer(card.dataset.id));
  });
}

function toggleInfluencer(id) {
  if (selectedInfluencers.has(id)) selectedInfluencers.delete(id);
  else selectedInfluencers.add(id);
  renderInfluencers(searchInput.value);
  renderVideos();
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
    return `
    <div class="video-card fade-in-up" data-video-id="${v.id}" style="animation-delay: ${idx * 0.07}s">
      <video src="${v.video}" poster="${v.thumb}" muted loop playsinline preload="metadata" class="video-card-vid"></video>
      <div class="video-card-creator">
        <img src="${inf.avatar}" alt="${inf.name}" class="video-card-creator-avatar">
        <span class="video-card-creator-name">${inf.name}</span>
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
    card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
  });

  // IntersectionObserver: pause off-screen videos for performance
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target.querySelector('.video-card-vid');
        if (!vid) return;
        if (!entry.isIntersecting) { vid.pause(); }
      });
    }, { threshold: 0.1 });
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
  // Item list
  const listEl = document.getElementById('modal-item-list');
  listEl.innerHTML = v.items.map((it, i) => `
    <div class="modal-item ${i === selectedItemIdx ? 'active' : ''}" data-idx="${i}">
      <div class="modal-item-icon">${getTypeIcon(it.type)}</div>
      <div class="modal-item-info">
        <span class="modal-item-name">${it.name}</span>
        <span class="modal-item-type">${it.type}</span>
      </div>
      <span class="modal-item-price">$${it.price.toFixed(2)}</span>
    </div>
  `).join('');

  listEl.querySelectorAll('.modal-item').forEach(el => {
    el.addEventListener('click', () => {
      selectedItemIdx = parseInt(el.dataset.idx);
      renderModalItems(v);
    });
  });

  // Details
  document.getElementById('modal-product-title').textContent = item.name;
  document.getElementById('modal-product-price').textContent = `$${item.price.toFixed(2)}`;
  document.getElementById('modal-product-desc').textContent = item.desc;

  // Outfit total
  const total = v.items.reduce((s, it) => s + it.price, 0);
  document.getElementById('modal-outfit-total').textContent = `Full outfit: $${total.toFixed(2)}`;

  // Size buttons
  document.querySelectorAll('#modal-sizes .size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === selectedSize);
  });
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
        <div class="cart-item-size">${item.type} · Size: ${item.size} · by ${item.influencer}</div>
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
document.getElementById('btn-checkout').addEventListener('click', () => showToast('🎉 Checkout coming soon!'));

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
    if (modalBackdrop.classList.contains('active')) closeModal();
    if (cartBackdrop.classList.contains('active')) closeCart();
  }
});

// ── Init ──
renderInfluencers();
renderVideos();
