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
  { id: 'a1', influencer: 'ayiah', thumb: 'assets/thumbnails/ayiah_1.png', product: 'Cream Cable-Knit Sweater', price: 59.99, desc: 'Cozy oversized cable-knit in soft cream. Perfect for layering over your favorite basics this season.', social: '3.2k customers dressed like Ayiah this week', tag: 'trending' },
  { id: 'a2', influencer: 'ayiah', thumb: 'assets/thumbnails/ayiah_2.png', product: 'Camel Leather Blazer', price: 129.99, desc: 'Structured camel leather blazer. Elevate any outfit from casual to chic in seconds.', social: '1.8k styled this look', tag: 'trending' },
  { id: 'a3', influencer: 'ayiah', thumb: 'assets/thumbnails/ayiah_3.png', product: 'White Ribbed Crop Top', price: 34.99, desc: 'Fitted ribbed crop top in crisp white. The foundation piece for every influencer wardrobe.', social: '4.1k saved this item', tag: 'new' },
  // Jack
  { id: 'j1', influencer: 'jack', thumb: 'assets/thumbnails/jack_1.png', product: 'Navy Fitted Blazer', price: 149.99, desc: 'Sharp navy blazer with modern slim fit. Dress it up or down — Jack\'s go-to piece.', social: '2.5k guys bought this look', tag: 'trending' },
  { id: 'j2', influencer: 'jack', thumb: 'assets/thumbnails/jack_2.png', product: 'Olive Bomber Jacket', price: 119.99, desc: 'Military-inspired olive bomber with premium hardware. Street-to-studio versatility.', social: '1.4k styled this week', tag: 'new' },
  { id: 'j3', influencer: 'jack', thumb: 'assets/thumbnails/jack_3.png', product: 'Cream Cable Knit Sweater', price: 79.99, desc: 'Heritage cable knit in warm cream. Effortless weekend style with refined detail.', social: '980 saved this look', tag: 'new' },
  // Michal
  { id: 'm1', influencer: 'michal', thumb: 'assets/thumbnails/michal_1.png', product: 'Lavender Chunky Cardigan', price: 69.99, desc: 'Statement lavender cardigan in ultra-soft yarn. Cozy meets color for the perfect lounge look.', social: '5.6k hearts this week', tag: 'trending' },
  { id: 'm2', influencer: 'michal', thumb: 'assets/thumbnails/michal_2.png', product: 'Black Power Blazer', price: 159.99, desc: 'Double-breasted blazer with gold hardware. Michal\'s boardroom-to-bar essential.', social: '2.3k power dressed this week', tag: 'trending' },
  { id: 'm3', influencer: 'michal', thumb: 'assets/thumbnails/michal_3.png', product: 'Sage Satin Slip Dress', price: 89.99, desc: 'Elegant sage green satin slip dress. Minimalist luxury for evenings out.', social: '3.9k added to wishlists', tag: 'new' },
  // Jacob
  { id: 'jb1', influencer: 'jacob', thumb: 'assets/thumbnails/jacob_1.png', product: 'Tan Suede Bomber', price: 139.99, desc: 'Premium suede bomber jacket in warm tan. Jacob\'s signature street-style piece.', social: '1.7k rocked this look', tag: 'new' },
  { id: 'jb2', influencer: 'jacob', thumb: 'assets/thumbnails/jacob_2.png', product: 'Charcoal Overcoat', price: 199.99, desc: 'Tailored charcoal wool overcoat. Sophisticated layering for the modern gentleman.', social: '2.1k elevated their wardrobe', tag: 'trending' },
  { id: 'jb3', influencer: 'jacob', thumb: 'assets/thumbnails/jacob_3.png', product: 'Rust Linen Shirt', price: 54.99, desc: 'Relaxed rust-orange linen shirt. Resort-ready style with effortless vibes.', social: '3.4k vacation-ready', tag: 'new' },
];

// ── State ──
let selectedInfluencers = new Set();
let cart = [];
let currentVideo = null;
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

  // Bind clicks
  document.querySelectorAll('.influencer-card').forEach(card => {
    card.addEventListener('click', () => toggleInfluencer(card.dataset.id));
  });
}

// ── Toggle Influencer Selection ──
function toggleInfluencer(id) {
  if (selectedInfluencers.has(id)) {
    selectedInfluencers.delete(id);
  } else {
    selectedInfluencers.add(id);
  }
  renderInfluencers(searchInput.value);
  renderVideos();
}

// ── Render Video Cards ──
function renderVideos() {
  let filtered = videos;

  // Filter by selected influencers
  if (selectedInfluencers.size > 0) {
    filtered = filtered.filter(v => selectedInfluencers.has(v.influencer));
  }

  // Filter by tab
  if (activeFilter !== 'all') {
    filtered = filtered.filter(v => v.tag === activeFilter);
  }

  // Update title
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

  videoGrid.innerHTML = filtered.map((v, idx) => {
    const inf = influencers.find(i => i.id === v.influencer);
    return `
    <div class="video-card fade-in-up" data-video-id="${v.id}" style="animation-delay: ${idx * 0.07}s">
      <img src="${v.thumb}" alt="${v.product}" loading="lazy">
      <div class="price-tags">
        <span class="price-tag">$${v.price.toFixed(2)} for ${v.product.split(' ').pop().toLowerCase()}</span>
      </div>
      <div class="play-btn">
        <svg viewBox="0 0 24 24"><polygon points="6,3 20,12 6,21"/></svg>
      </div>
      <div class="video-overlay">
        <div class="video-bottom">
          <span class="video-social">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            ${v.social}
          </span>
          <button class="btn-shop ${idx % 3 === 1 ? 'btn-shop--primary' : ''}" data-shop-id="${v.id}">${idx % 3 === 1 ? 'Buy Now' : 'Shop the Look'}</button>
        </div>
      </div>
    </div>`;
  }).join('');

  // Bind video card clicks
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(card.dataset.videoId);
    });
  });
  // Bind shop buttons explicitly
  document.querySelectorAll('.btn-shop').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.dataset.shopId);
    });
  });
}

// ── Modal ──
function openModal(videoId) {
  const v = videos.find(x => x.id === videoId);
  if (!v) return;
  currentVideo = v;
  const inf = influencers.find(i => i.id === v.influencer);

  document.getElementById('modal-img').src = v.thumb;
  document.getElementById('modal-img').alt = v.product;
  document.getElementById('modal-avatar').src = inf.avatar;
  document.getElementById('modal-inf-name').textContent = inf.name;
  document.getElementById('modal-product-title').textContent = v.product;
  document.getElementById('modal-product-price').textContent = `$${v.price.toFixed(2)}`;
  document.getElementById('modal-product-desc').textContent = v.desc;

  // Reset size
  selectedSize = 'S';
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === 'S');
  });

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
  currentVideo = null;
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});

// Size selection
document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = btn.dataset.size;
  });
});

// ── Cart Logic ──
document.getElementById('btn-add-cart').addEventListener('click', () => {
  if (!currentVideo) return;
  const inf = influencers.find(i => i.id === currentVideo.influencer);
  cart.push({
    id: currentVideo.id + '_' + selectedSize + '_' + Date.now(),
    videoId: currentVideo.id,
    product: currentVideo.product,
    price: currentVideo.price,
    size: selectedSize,
    thumb: currentVideo.thumb,
    influencer: inf.name,
  });
  updateCart();
  closeModal();
  showToast(`${currentVideo.product} added to your bag!`);
});

document.getElementById('btn-wishlist').addEventListener('click', () => {
  const btn = document.getElementById('btn-wishlist');
  btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
  btn.style.color = btn.textContent === '♥' ? '#ef4444' : '';
  btn.style.borderColor = btn.textContent === '♥' ? '#ef4444' : '';
  showToast(btn.textContent === '♥' ? 'Added to wishlist ♥' : 'Removed from wishlist');
});

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

  // Re-render items
  const existingItems = cartBody.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.thumb}" alt="${item.product}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.product}</div>
        <div class="cart-item-size">Size: ${item.size} · by ${item.influencer}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <button class="cart-item-remove" data-cart-id="${item.id}">Remove</button>
      </div>
    `;
    cartBody.appendChild(div);
  });

  // Bind remove
  cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      cart = cart.filter(c => c.id !== btn.dataset.cartId);
      updateCart();
    });
  });

  const total = cart.reduce((sum, c) => sum + c.price, 0);
  cartTotalPrice.textContent = `$${total.toFixed(2)}`;
}

// Cart drawer open/close
document.getElementById('cart-btn').addEventListener('click', () => {
  cartBackdrop.classList.add('active');
  cartDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';
});

function closeCart() {
  cartBackdrop.classList.remove('active');
  cartDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cart-close').addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', (e) => {
  if (e.target === cartBackdrop) closeCart();
});

document.getElementById('btn-checkout').addEventListener('click', () => {
  showToast('🎉 Checkout coming soon!');
});

// ── Search ──
searchInput.addEventListener('input', () => {
  renderInfluencers(searchInput.value);
});

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

// ═══════════════════════════════════════════
//   AI SHOPPER – Conversational Style Agent
//   ═══════════════════════════════════════════

const NVIDIA_MODEL = 'nvidia/neva-22b';

const STYLE_PROFILES = {
  ayiah: { name: 'Ayiah Soufi', vibe: 'Feminine · Cozy Chic · Warm Neutrals', emoji: '🧣', keywords: ['feminine', 'cozy', 'cream', 'camel', 'white', 'chic', 'classic', 'sweater', 'warm', 'soft', 'romantic', 'elegant', 'neutral', 'cable-knit'] },
  jack: { name: 'Jack Scalise', vibe: 'Modern · Tailored · Street-Style Edge', emoji: '🧥', keywords: ['modern', 'tailored', 'navy', 'olive', 'street', 'sharp', 'blazer', 'masculine', 'clean', 'fitted', 'urban', 'bomber', 'minimalist'] },
  michal: { name: 'Michal Blank', vibe: 'Bold · Power · Statement Luxury', emoji: '✨', keywords: ['bold', 'power', 'statement', 'lavender', 'black', 'sage', 'satin', 'luxury', 'sophisticated', 'dramatic', 'confident', 'high-end', 'double-breasted'] },
  jacob: { name: 'Jacob Arabo', vibe: 'Rugged · Earth Tones · Gentleman', emoji: '🏔️', keywords: ['rugged', 'earth', 'tan', 'suede', 'charcoal', 'rust', 'linen', 'gentleman', 'warm', 'natural', 'outdoor', 'refined', 'overcoat'] },
};

const AI_SYSTEM_PROMPT = `You are a conversational AI style advisor for a fashion platform called Tolstoy. Your job is to help users discover influencers whose style matches their taste through friendly conversation.

Available influencers:
- Ayiah Soufi (id: ayiah) — Feminine, cozy chic, warm neutrals (cream, camel, white). Classic elegant with soft textures.
- Jack Scalise (id: jack) — Modern, tailored street-style (navy, olive). Sharp, clean, urban masculine.
- Michal Blank (id: michal) — Bold, power-dressing, statement luxury (lavender, black, sage). Sophisticated and dramatic.
- Jacob Arabo (id: jacob) — Rugged earth tones, gentleman style (tan, suede, charcoal, rust). Warm, natural, refined.

Rules:
1. Have a natural conversation. Ask ONE question at a time about the user's style preferences.
2. Start by asking about their general vibe/aesthetic. Then follow up on colors, fit preferences, occasion, etc.
3. After 2-3 rounds of Q&A (once you have enough info), recommend the best matching influencers.
4. Your response must end with JSON: {"phase":"questioning","question":"..."} or {"phase":"recommending","matches":["id1","id2","id3"]}
5. Keep your conversational text under 3 sentences per turn.
6. Be warm, enthusiastic, and fashion-savvy. Use emojis sparingly.
7. When recommending, explain WHY each influencer matches the user's preferences.
8. If the user uploads a photo, analyze their style from the image and recommend matches based on what you see.`;

const aiDOM = {
  toggle: document.getElementById('ai-toggle'),
  chat: document.getElementById('ai-chat'),
  overlay: document.getElementById('ai-chat-overlay'),
  close: document.getElementById('ai-chat-close'),
  clear: document.getElementById('ai-chat-clear'),
  body: document.getElementById('ai-chat-body'),
  input: document.getElementById('ai-chat-input'),
  send: document.getElementById('ai-send-btn'),
  fileInput: document.getElementById('ai-file-input'),
};

const ai = {
  conversation: [{ role: 'system', content: AI_SYSTEM_PROMPT }],
  phase: 'greeting',
  preferences: {},
  matches: [],
  processing: false,
  photoBase64: null,
};

aiDOM.toggle.addEventListener('click', () => {
  aiDOM.chat.classList.toggle('open');
  aiDOM.overlay.classList.toggle('active');
  aiDOM.toggle.classList.add('hidden');
  if (aiDOM.chat.classList.contains('open')) aiDOM.input.focus();
});

function closeAIChat() {
  aiDOM.chat.classList.remove('open');
  aiDOM.overlay.classList.remove('active');
  aiDOM.toggle.classList.remove('hidden');
}
aiDOM.close.addEventListener('click', closeAIChat);
aiDOM.overlay.addEventListener('click', closeAIChat);

aiDOM.clear.addEventListener('click', resetAI);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (aiDOM.chat.classList.contains('open')) closeAIChat();
    if (modalBackdrop.classList.contains('active')) closeModal();
    if (cartBackdrop.classList.contains('active')) closeCart();
  }
});

function resetAI() {
  const msgs = aiDOM.body.querySelectorAll('.ai-message');
  for (let i = 1; i < msgs.length; i++) msgs[i].remove();
  const extra = aiDOM.body.querySelectorAll('.ai-quick-replies, .ai-typing');
  extra.forEach(e => e.remove());
  ai.conversation = [{ role: 'system', content: AI_SYSTEM_PROMPT }];
  ai.phase = 'greeting';
  ai.preferences = {};
  ai.matches = [];
  ai.photoBase64 = null;
  ai.processing = false;
}

function sendAIMessage(text) {
  if (!text.trim() || ai.processing) return;
  addUserMsg(text);
  aiDOM.input.value = '';
  processAIInput(text, null);
}
aiDOM.send.addEventListener('click', () => sendAIMessage(aiDOM.input.value));
aiDOM.input.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendAIMessage(aiDOM.input.value);
});

aiDOM.fileInput.addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async evt => {
    const dataUrl = evt.target.result;
    ai.photoBase64 = dataUrl;
    addUserMsg('📸 Uploaded a photo for style analysis', dataUrl);
    await processAIInput(null, dataUrl);
  };
  reader.readAsDataURL(file);
  aiDOM.fileInput.value = '';
});

function addBotMsg(html) {
  removeQuickReplies();
  const d = document.createElement('div');
  d.className = 'ai-message ai-message--bot';
  d.innerHTML = `<div class="ai-message-avatar">✦</div><div class="ai-message-content">${html}</div>`;
  aiDOM.body.appendChild(d);
  aiDOM.body.scrollTop = aiDOM.body.scrollHeight;
}

function addUserMsg(text, imgSrc) {
  removeQuickReplies();
  const d = document.createElement('div');
  d.className = 'ai-message ai-message--user';
  let c = text.replace(/\n/g, '<br>');
  if (imgSrc) c += `<img src="${imgSrc}" class="ai-uploaded-img">`;
  d.innerHTML = `<div class="ai-message-avatar">👤</div><div class="ai-message-content">${c}</div>`;
  aiDOM.body.appendChild(d);
  aiDOM.body.scrollTop = aiDOM.body.scrollHeight;
}

function showTyping() {
  const existing = document.getElementById('ai-typing-id');
  if (existing) existing.remove();
  const d = document.createElement('div');
  d.className = 'ai-typing';
  d.id = 'ai-typing-id';
  d.innerHTML = '<div class="ai-typing-dot"></div><div class="ai-typing-dot"></div><div class="ai-typing-dot"></div>';
  aiDOM.body.appendChild(d);
  aiDOM.body.scrollTop = aiDOM.body.scrollHeight;
}

function rmTyping() {
  const e = document.getElementById('ai-typing-id');
  if (e) e.remove();
}

function removeQuickReplies() {
  const existing = aiDOM.body.querySelectorAll('.ai-quick-replies');
  existing.forEach(e => e.remove());
}

function renderMatchCards(ids) {
  return ids.map(id => {
    const p = STYLE_PROFILES[id];
    const inf = influencers.find(i => i.id === id);
    if (!p || !inf) return '';
    return `<div class="ai-match-card" data-inf-id="${id}">
      <img src="${inf.avatar}" alt="${p.name}">
      <div class="ai-match-card-info">
        <div class="ai-match-card-name">${p.emoji} ${p.name}</div>
        <div class="ai-match-card-vibe">${p.vibe}</div>
      </div>
      <span class="ai-match-card-cta">Shop →</span>
    </div>`;
  }).join('');
}

function showQuickReplies(options) {
  removeQuickReplies();
  const container = document.createElement('div');
  container.className = 'ai-quick-replies';
  container.innerHTML = options.map(opt =>
    `<button class="ai-quick-reply" data-value="${opt.replace(/"/g, '&quot;')}">${opt}</button>`
  ).join('') + `<button class="ai-quick-reply ai-quick-reply--text" data-value="">✏️ Type my own</button>`;
  aiDOM.body.appendChild(container);
  aiDOM.body.scrollTop = aiDOM.body.scrollHeight;
  container.querySelectorAll('.ai-quick-reply').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.value;
      if (val) {
        sendAIMessage(val);
      } else {
        aiDOM.input.focus();
        container.remove();
      }
    });
  });
}

function bindMatchCardClicks() {
  aiDOM.body.querySelectorAll('.ai-match-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.infId;
      if (id && !selectedInfluencers.has(id)) {
        selectedInfluencers.add(id);
        renderInfluencers(searchInput.value);
        renderVideos();
        closeAIChat();
        document.getElementById('feed-section').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function findMatchingInfluencers(text, extraKeywords) {
  const q = (text || '').toLowerCase();
  const allKeywords = [...(extraKeywords || []), ...q.split(/\s+/)].filter(k => k.length > 2);
  const scores = {};
  for (const [id, profile] of Object.entries(STYLE_PROFILES)) {
    let score = 0;
    for (const kw of allKeywords) {
      for (const pk of profile.keywords) {
        if (kw.includes(pk) || pk.includes(kw)) score += 2;
        else if (q.includes(pk)) score += 1;
      }
    }
    scores[id] = score;
  }
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .filter(([, s]) => s > 0)
    .map(([id]) => id)
    .slice(0, 4);
}

async function processAIInput(text, imageBase64) {
  ai.processing = true;
  showTyping();

  const userContent = imageBase64
    ? [{ type: 'text', text: text || 'Analyze this photo and help me find matching influencers. Ask me questions about my style preferences if you need more info.' }, { type: 'image_url', image_url: { url: imageBase64 } }]
    : text;

  ai.conversation.push({ role: 'user', content: userContent });

  try {
    const resp = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: NVIDIA_MODEL,
        messages: ai.conversation,
        max_tokens: 512,
        temperature: 0.3,
      }),
    });

    if (!resp.ok) throw new Error(`API ${resp.status}`);
    const data = await resp.json();
    const reply = data.choices[0].message.content;
    ai.conversation.push({ role: 'assistant', content: reply });
    rmTyping();

    // Parse JSON directive from response
    const jsonMatch = reply.match(/\{[\s\S]*"phase"[\s\S]*\}/);
    let phase = 'questioning';
    let matches = [];
    let question = '';

    if (jsonMatch) {
      try {
        const cmd = JSON.parse(jsonMatch[0]);
        phase = cmd.phase;
        matches = cmd.matches || [];
        question = cmd.question || '';
      } catch (e) { /* fall through */ }
    }

    // Clean the JSON directive from display text
    const displayText = reply.replace(/\{[\s\S]*"phase"[\s\S]*\}/, '').trim();

    if (phase === 'recommending' && matches.length > 0) {
      ai.phase = 'recommending';
      ai.matches = matches;
      let html = `<p>${displayText.replace(/\n/g, '<br>')}</p>`;
      html += `<div style="margin-top:8px">${renderMatchCards(matches)}</div>`;
      html += `<p style="margin-top:10px;font-size:0.78rem;color:var(--text-muted)">Click a card to shop their looks</p>`;
      addBotMsg(html);
      bindMatchCardClicks();

      // Offer refinement options
      setTimeout(() => showQuickReplies(['Show me more options', 'I want a different style', 'Tell me more about them', '👍 Perfect, thanks!']), 600);
    } else {
      ai.phase = 'questioning';
      let html = `<p>${displayText.replace(/\n/g, '<br>')}</p>`;

      // Infer quick replies from context if AI didn't provide them
      const quickOptions = inferQuickReplies(displayText, ai.conversation.length);
      addBotMsg(html);
      if (quickOptions.length > 0) {
        setTimeout(() => showQuickReplies(quickOptions), 400);
      }
    }
  } catch (err) {
    console.error('AI err:', err);
    rmTyping();
    handleFallback(text);
  }

  ai.processing = false;
}

function inferQuickReplies(aiText, turnCount) {
  const lower = aiText.toLowerCase();
  const replies = [];

  if (turnCount <= 3) {
    if (lower.includes('vibe') || lower.includes('aesthetic') || lower.includes('style')) {
      replies.push('Casual streetwear', 'Feminine & elegant', 'Bold & edgy', 'Classic & timeless');
    } else if (lower.includes('color') || lower.includes('palette') || lower.includes('shade')) {
      replies.push('Neutrals', 'Earth tones', 'Bold colors', 'Monochrome');
    } else if (lower.includes('fit') || lower.includes('silhouette') || lower.includes('cut')) {
      replies.push('Relaxed & oversized', 'Tailored & fitted', 'Mix of both');
    } else if (lower.includes('occasion') || lower.includes('wear') || lower.includes('outfit')) {
      replies.push('Everyday casual', 'Work & office', 'Night out', 'Weekend');
    } else if (lower.includes('budget') || lower.includes('price') || lower.includes('spend')) {
      replies.push('Budget-friendly', 'Mid-range', 'Premium');
    } else if (lower.includes('photo') || lower.includes('picture') || lower.includes('image') || lower.includes('upload')) {
      replies = [];
    }
  }

  if (replies.length === 0 && turnCount <= 3) {
    replies.push('Tell me more', 'Show me options');
  }

  return replies;
}

function handleFallback(text) {
  const query = text || (ai.photoBase64 ? 'photo upload' : 'stylish');
  const matches = findMatchingInfluencers(query);
  if (matches.length > 0) {
    addBotMsg(`<p>Here are influencers I found for your style:</p>${renderMatchCards(matches)}`);
    bindMatchCardClicks();
    setTimeout(() => showQuickReplies(['Show me more options', 'Different style', '👍 Looks good']), 600);
  } else {
    addBotMsg(`<p>Try describing your style — like "cozy feminine", "streetwear", or "bold and edgy" — and I'll find your match!</p>`);
  }
}

// ── Init ──
renderInfluencers();
renderVideos();
