/**
 * HEVI FITWEAR - DISTILLED E-COMMERCE CORE & MOBILE SPA CONTROLLER
 * Arquitetura enxuta, alta performance e controle de visões mobile sem saltos
 */

// Catálogo de Produtos Oficial HEVI
const PRODUCTS_DATA = [
  {
    id: 'hevi-01',
    title: 'Conjunto Sculp Terracota Seamless',
    category: 'conjuntos',
    tag: 'mais-vendidos',
    priceOriginal: 249.90,
    pricePix: 179.91,
    installments: '10x de R$ 19,99 sem juros',
    imgPrimary: 'assets/images/hevi_hero_banner.jpg',
    imgHover: 'assets/images/hevi_terracotta_set.jpg',
    badge: 'Zero Transparência',
    colors: ['#8A5338', '#5B2333', '#1D2A44', '#E8DDD1'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Conjunto de alta compressão em poliamida nobre com trama densa zero transparência. Top com sustentação reforçada e legging com cós anatômico.'
  },
  {
    id: 'hevi-02',
    title: 'Legging Cós Anatômico Marsala Contour',
    category: 'legging',
    tag: 'mais-vendidos',
    priceOriginal: 169.90,
    pricePix: 134.91,
    installments: '10x de R$ 14,99 sem juros',
    imgPrimary: 'assets/images/hevi_hero_banner.jpg',
    imgHover: 'assets/images/hevi_navy_set.jpg',
    badge: 'Alta Compressão',
    colors: ['#5B2333', '#8A5338', '#2C2C2B'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Desenvolvida para treinos intensos. O cós anatômico duplo não enrola durante agachamentos e garante compressão confortável sem marcar.'
  },
  {
    id: 'hevi-03',
    title: 'Macaquinho Seamless Boost Terracota',
    category: 'macaquinho',
    tag: 'lancamentos',
    priceOriginal: 189.90,
    pricePix: 139.90,
    installments: '10x de R$ 13,99 sem juros',
    imgPrimary: 'assets/images/hevi_terracotta_set.jpg',
    imgHover: 'assets/images/hevi_hero_banner.jpg',
    badge: 'Lançamento',
    colors: ['#8A5338', '#1D2A44', '#5B2333'],
    sizes: ['P', 'M', 'G'],
    description: 'Peça única statement com toque acetinado. Modela o busto e o quadril com tecnologia sem costura (seamless) para máximo conforto térmico.'
  },
  {
    id: 'hevi-04',
    title: 'Conjunto Compression Navy Contour',
    category: 'conjuntos',
    tag: 'lancamentos',
    priceOriginal: 229.90,
    pricePix: 189.90,
    installments: '10x de R$ 18,99 sem juros',
    imgPrimary: 'assets/images/hevi_navy_set.jpg',
    imgHover: 'assets/images/hevi_hero_banner.jpg',
    badge: 'Butt-Lift Contour',
    colors: ['#1D2A44', '#8A5338', '#5B2333'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'O equilíbrio perfeito entre sobriedade e sofisticação no azul marinho noturno. Recortes estratégicos que valorizam as linhas musculares com elegância.'
  },
  {
    id: 'hevi-05',
    title: 'Top Alças Duplas Minimal Navy',
    category: 'top',
    tag: 'mais-vendidos',
    priceOriginal: 99.90,
    pricePix: 71.91,
    installments: '10x de R$ 7,99 sem juros',
    imgPrimary: 'assets/images/hevi_navy_set.jpg',
    imgHover: 'assets/images/hevi_terracotta_set.jpg',
    badge: 'Médio Impacto',
    colors: ['#1D2A44', '#E8DDD1', '#5B2333'],
    sizes: ['P', 'M', 'G'],
    description: 'Top minimalista com forro duplo e entrada para bojo removível. Costas em tiras sofisticadas que proporcionam liberdade total de movimentos.'
  },
  {
    id: 'hevi-06',
    title: 'Short Biker Zero Transparência Terracota',
    category: 'top',
    tag: 'mais-vendidos',
    priceOriginal: 119.90,
    pricePix: 89.91,
    installments: '10x de R$ 9,99 sem juros',
    imgPrimary: 'assets/images/hevi_terracotta_set.jpg',
    imgHover: 'assets/images/hevi_navy_set.jpg',
    badge: 'Zero Transparência',
    colors: ['#8A5338', '#1D2A44', '#2C2C2B'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Comprimento ideal meia coxa com elástico siliconado interno que impede a barra de subir durante corridas ou agachamentos pesados.'
  },
  {
    id: 'hevi-07',
    title: 'Top Assimétrico Ribbed Marsala',
    category: 'top',
    tag: 'lancamentos',
    priceOriginal: 109.90,
    pricePix: 80.91,
    installments: '10x de R$ 8,99 sem juros',
    imgPrimary: 'assets/images/hevi_hero_banner.jpg',
    imgHover: 'assets/images/hevi_terracotta_set.jpg',
    badge: 'Trend 2026',
    colors: ['#5B2333', '#E8DDD1', '#8A5338'],
    sizes: ['P', 'M', 'G'],
    description: 'Design de um ombro só com sustentação interna cruzada. Um dos ícones mais cobiçados da temporada que transita do treino ao look casual chic.'
  },
  {
    id: 'hevi-08',
    title: 'Calça Flare Sculpting Grafite',
    category: 'legging',
    tag: 'lancamentos',
    priceOriginal: 179.90,
    pricePix: 149.90,
    installments: '10x de R$ 14,99 sem juros',
    imgPrimary: 'assets/images/hevi_navy_set.jpg',
    imgHover: 'assets/images/hevi_terracotta_set.jpg',
    badge: 'Corte Flare',
    colors: ['#2C2C2B', '#1D2A44', '#8A5338'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Elegância máxima para quem busca estilo athleisure. Corte flare impecável que valoriza a postura corporal com poliamida encorpada.'
  }
];

// Estado Global da Aplicação
const State = {
  cart: [
    {
      id: 'hevi-01',
      title: 'Conjunto Sculp Terracota Seamless',
      price: 179.91,
      size: 'M',
      color: '#8A5338',
      colorName: 'Terracota',
      img: 'assets/images/hevi_hero_banner.jpg',
      qty: 1
    }
  ],
  wishlist: ['hevi-01'],
  appliedCoupon: null,
  freeShippingThreshold: 299.00,
  activeFilter: 'todos',
  searchQuery: '',
  mobileActiveView: 'inicio'
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilterListeners();
  setupCartListeners();
  setupSearchListeners();
  setupMobileSearchListeners();
  setupQuickViewListeners();
  setupScrollEffects();
  updateCartUI();
  setupNewsletter();
});

// ==========================================================================
// MOBILE SPA VIEW-SWITCHING (Sem troca de altura ou saltos)
// ==========================================================================
function switchMobileView(viewName) {
  if (viewName === 'sacola') {
    openCartDrawer();
    return;
  }

  // Se o drawer da sacola estiver aberto, fechá-lo
  const drawer = document.getElementById('cartDrawer');
  if (drawer && drawer.classList.contains('active')) {
    closeCartDrawer();
  }

  State.mobileActiveView = viewName;
  document.body.setAttribute('data-active-view', viewName);

  // Atualizar classe ativa na barra de navegação inferior
  const navItems = document.querySelectorAll('.bottom-nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-nav-target') === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Resetar scroll para o topo de forma instantânea sem saltos bruscos
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Foco se for a visão de busca
  if (viewName === 'buscar') {
    const input = document.getElementById('mobileViewSearchInput');
    if (input) {
      setTimeout(() => input.focus(), 80);
      renderMobileSearchResults();
    }
  } else if (viewName === 'colecao') {
    renderProducts();
  }
}

function handleLogoClick() {
  if (window.innerWidth < 1024) {
    switchMobileView('inicio');
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function navigateToColecao() {
  if (window.innerWidth < 1024) {
    switchMobileView('colecao');
  } else {
    const vitrine = document.getElementById('vitrineSection');
    if (vitrine) vitrine.scrollIntoView({ behavior: 'smooth' });
  }
}

function openCategoryFromHome(category) {
  State.activeFilter = category;
  
  // Atualizar pílulas da vitrine
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => {
    p.classList.toggle('active', p.dataset.filter === category);
  });

  renderProducts();

  if (window.innerWidth < 1024) {
    switchMobileView('colecao');
  } else {
    const vitrine = document.getElementById('vitrineSection');
    if (vitrine) vitrine.scrollIntoView({ behavior: 'smooth' });
  }
}

function openStoryFilter(tag) {
  if (tag.toLowerCase() === 'macaquinho') {
    openCategoryFromHome('macaquinho');
    return;
  }
  
  State.searchQuery = tag;
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = tag;

  renderProducts();

  if (window.innerWidth < 1024) {
    switchMobileView('colecao');
  } else {
    const vitrine = document.getElementById('vitrineSection');
    if (vitrine) vitrine.scrollIntoView({ behavior: 'smooth' });
  }
}

// Scroll Effects
function setupScrollEffects() {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ==========================================================================
// RENDERIZAÇÃO DE PRODUTOS (Impeccable & Clean)
// ==========================================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let filtered = PRODUCTS_DATA;

  if (State.activeFilter === 'mais-vendidos') {
    filtered = PRODUCTS_DATA.filter(p => p.tag === 'mais-vendidos');
  } else if (State.activeFilter === 'lancamentos') {
    filtered = PRODUCTS_DATA.filter(p => p.tag === 'lancamentos');
  } else if (State.activeFilter === 'conjuntos') {
    filtered = PRODUCTS_DATA.filter(p => p.category === 'conjuntos');
  } else if (State.activeFilter === 'leggings' || State.activeFilter === 'legging') {
    filtered = PRODUCTS_DATA.filter(p => p.category === 'legging');
  } else if (State.activeFilter === 'top' || State.activeFilter === 'tops') {
    filtered = PRODUCTS_DATA.filter(p => p.category === 'top');
  } else if (State.activeFilter === 'macaquinho' || State.activeFilter === 'macacoes') {
    filtered = PRODUCTS_DATA.filter(p => p.category === 'macaquinho');
  } else if (State.activeFilter !== 'todos') {
    filtered = PRODUCTS_DATA.filter(p => p.category === State.activeFilter);
  }

  if (State.searchQuery.trim() !== '') {
    const q = State.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-results">
        <p>Nenhuma peça encontrada para esta seleção.</p>
        <button class="btn-primary" onclick="resetFilters()" style="width: auto; padding: 10px 24px;">Ver Coleção Completa</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => createProductCardHtml(prod)).join('');
}

function createProductCardHtml(prod) {
  const isWished = State.wishlist.includes(prod.id);
  const badgeHtml = prod.badge ? `<span class="product-badge">${prod.badge}</span>` : '';

  return `
    <article class="product-card" data-id="${prod.id}">
      <div class="product-thumb" onclick="openQuickView('${prod.id}')">
        ${badgeHtml}
        <button class="btn-wishlist ${isWished ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${prod.id}', this)" aria-label="Favoritar peça">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <img class="product-img" src="${prod.imgPrimary}" alt="${prod.title}" loading="lazy">
        <img class="product-img product-img-hover" src="${prod.imgHover}" alt="${prod.title} (costas)" loading="lazy">
      </div>

      <div class="product-info">
        <h3 class="product-title" onclick="openQuickView('${prod.id}')">${prod.title}</h3>
        
        <div class="product-pricing">
          <span class="price-pix">R$ ${prod.pricePix.toFixed(2).replace('.', ',')}</span>
          <span class="price-sub">${prod.installments}</span>
        </div>

        <button class="btn-card-action" onclick="openQuickView('${prod.id}')">
          Escolher Tamanho
        </button>
      </div>
    </article>
  `;
}

// Filtros da vitrine
function setupFilterListeners() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      State.activeFilter = pill.dataset.filter;
      State.searchQuery = '';
      renderProducts();
    });
  });
}

function resetFilters() {
  State.activeFilter = 'todos';
  State.searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => {
    p.classList.toggle('active', p.dataset.filter === 'todos');
  });
  renderProducts();
}

// ==========================================================================
// TELA DEDICADA DE BUSCA MOBILE
// ==========================================================================
function setupMobileSearchListeners() {
  const input = document.getElementById('mobileViewSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (input) {
    input.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearBtn) clearBtn.style.display = val.length > 0 ? 'inline-flex' : 'none';
      renderMobileSearchResults(val);
    });
  }
}

function renderMobileSearchResults(query = '') {
  const grid = document.getElementById('mobileSearchResultsGrid');
  if (!grid) return;

  const q = query.trim().toLowerCase();
  let results = PRODUCTS_DATA;

  if (q !== '') {
    results = PRODUCTS_DATA.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (results.length === 0) {
    grid.innerHTML = `
      <div class="empty-results">
        <p>Nenhuma peça encontrada para "${query}".</p>
        <button class="btn-primary" onclick="clearMobileSearch()" style="width: auto; padding: 10px 24px;">Limpar Busca</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = results.map(prod => createProductCardHtml(prod)).join('');
}

function searchByTagInView(tag) {
  const input = document.getElementById('mobileViewSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (input) {
    input.value = tag;
    if (clearBtn) clearBtn.style.display = 'inline-flex';
    renderMobileSearchResults(tag);
  }
}

function clearMobileSearch() {
  const input = document.getElementById('mobileViewSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (input) {
    input.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
    renderMobileSearchResults('');
    input.focus();
  }
}

// Favoritos
function toggleWishlist(prodId, btn) {
  const idx = State.wishlist.indexOf(prodId);
  if (idx > -1) {
    State.wishlist.splice(idx, 1);
    btn.classList.remove('active');
    btn.querySelector('svg').setAttribute('fill', 'none');
    showToast('Removido dos favoritos');
  } else {
    State.wishlist.push(prodId);
    btn.classList.add('active');
    btn.querySelector('svg').setAttribute('fill', 'currentColor');
    showToast('Salvo nos favoritos');
  }
  const badge = document.getElementById('wishlistCountBadge');
  if (badge) badge.textContent = State.wishlist.length;
}

// Carrinho Drawer
function setupCartListeners() {
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const backdrop = document.getElementById('cartBackdrop');

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

  const couponBtn = document.getElementById('applyCouponBtn');
  const couponInput = document.getElementById('cartCouponInput');
  if (couponBtn && couponInput) {
    couponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (code === 'HEVI10' || code === 'HARDYN10') {
        State.appliedCoupon = { code: code, discount: 0.10 };
        showToast(`Cupom ${code} aplicado: 10% de desconto.`);
        updateCartUI();
      } else if (code) {
        showToast('Cupom não encontrado.');
      }
    });
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Destacar Sacola na barra de navegação inferior
    const navItems = document.querySelectorAll('.bottom-nav-item');
    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-nav-target') === 'sacola');
    });
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';

    // Restaurar a visão ativa anterior na barra de navegação inferior
    const navItems = document.querySelectorAll('.bottom-nav-item');
    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-nav-target') === State.mobileActiveView);
    });
  }
}

function updateCartQty(idx, delta) {
  if (State.cart[idx]) {
    State.cart[idx].qty += delta;
    if (State.cart[idx].qty <= 0) {
      State.cart.splice(idx, 1);
    }
  }
  updateCartUI();
}

function removeCartItem(idx) {
  State.cart.splice(idx, 1);
  updateCartUI();
  showToast('Item removido da sacola.');
}

function updateCartUI() {
  const itemsContainer = document.getElementById('cartItemsList');
  const badgeCount = document.getElementById('cartCountBadge');
  const drawerItemCount = document.getElementById('drawerItemCount');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscount');
  const totalEl = document.getElementById('cartTotal');
  const shippingMsg = document.getElementById('shippingMsg');
  const shippingFill = document.getElementById('shippingProgressFill');

  const totalItems = State.cart.reduce((sum, item) => sum + item.qty, 0);
  if (badgeCount) badgeCount.textContent = totalItems;
  const bottomBadge = document.getElementById('bottomNavCartBadge');
  if (bottomBadge) bottomBadge.textContent = totalItems;
  if (drawerItemCount) drawerItemCount.textContent = `(${totalItems})`;

  let subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;
  if (State.appliedCoupon) {
    discount = subtotal * State.appliedCoupon.discount;
  }
  let total = subtotal - discount;

  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (discountEl) discountEl.textContent = discount > 0 ? `- R$ ${discount.toFixed(2).replace('.', ',')}` : 'R$ 0,00';
  if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

  // Frete grátis threshold
  if (shippingMsg && shippingFill) {
    const diff = State.freeShippingThreshold - subtotal;
    if (diff <= 0) {
      shippingMsg.innerHTML = `<strong style="color: #2E7D32;">Parabéns! Você tem FRETE GRÁTIS.</strong>`;
      shippingFill.style.width = '100%';
    } else {
      const pct = Math.min(100, Math.max(10, (subtotal / State.freeShippingThreshold) * 100));
      shippingMsg.innerHTML = `Faltam <strong style="color: var(--hevi-marsala);">R$ ${diff.toFixed(2).replace('.', ',')}</strong> para <strong>FRETE GRÁTIS</strong>`;
      shippingFill.style.width = `${pct}%`;
    }
  }

  if (!itemsContainer) return;

  if (State.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <p style="font-weight: 700; color: var(--hevi-graphite);">Sua sacola está vazia</p>
        <p style="font-size: 0.82rem; color: var(--hevi-graphite-muted);">Escolha suas peças favoritas com 10% OFF no PIX.</p>
        <button onclick="closeCartDrawer(); switchMobileView('colecao');" class="btn-primary" style="margin-top: 14px; width: auto; padding: 10px 22px;">Ver Coleção</button>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = State.cart.map((item, idx) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.title}">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-variant">Tam: <strong>${item.size}</strong></div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty(${idx}, -1)" aria-label="Diminuir">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${idx}, 1)" aria-label="Aumentar">+</button>
          </div>
          <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
          <button class="cart-item-remove" onclick="removeCartItem(${idx})" aria-label="Remover">✕</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Quick View Modal
function setupQuickViewListeners() {
  const modalBackdrop = document.getElementById('quickViewBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeQuickView);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeQuickView();
    });
  }
}

function openQuickView(prodId) {
  const product = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!product) return;

  const modal = document.getElementById('quickViewBackdrop');
  const mainImg = document.getElementById('modalMainImg');
  const title = document.getElementById('modalTitle');
  const pricePix = document.getElementById('modalPricePix');
  const desc = document.getElementById('modalDesc');
  const sizeGroup = document.getElementById('modalSizeGroup');
  const colorGroup = document.getElementById('modalColorGroup');
  const addBtn = document.getElementById('modalAddCartBtn');

  if (mainImg) mainImg.src = product.imgPrimary;
  if (title) title.textContent = product.title;
  if (pricePix) pricePix.textContent = `R$ ${product.pricePix.toFixed(2).replace('.', ',')} no PIX`;
  if (desc) desc.textContent = product.description;

  let selectedSize = product.sizes[0];
  let selectedColor = product.colors[0];

  if (sizeGroup) {
    sizeGroup.innerHTML = product.sizes.map((s, i) => `
      <button class="modal-size-btn ${i === 0 ? 'active' : ''}" onclick="selectModalSize(this, '${s}')">${s}</button>
    `).join('');
  }

  if (colorGroup) {
    colorGroup.innerHTML = product.colors.map((c, i) => `
      <span class="color-dot ${i === 0 ? 'active' : ''}" style="background-color: ${c};" onclick="selectModalColor(this, '${c}')" title="Cor"></span>
    `).join('');
  }

  if (addBtn) {
    addBtn.onclick = () => {
      State.cart.push({
        id: product.id,
        title: product.title,
        price: product.pricePix,
        size: selectedSize,
        color: selectedColor,
        colorName: 'Cor Selecionada',
        img: product.imgPrimary,
        qty: 1
      });
      updateCartUI();
      closeQuickView();
      openCartDrawer();
      showToast(`"${product.title}" adicionado à sacola.`);
    };
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function selectModalSize(btn, size) {
  document.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectModalColor(dot, color) {
  document.querySelectorAll('#modalColorGroup .color-dot').forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewBackdrop');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Busca Overlay Desktop
function setupSearchListeners() {
  const toggleBtn = document.getElementById('searchToggleBtn');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');

  if (toggleBtn && searchModal) {
    toggleBtn.addEventListener('click', () => {
      searchModal.classList.toggle('active');
      if (searchModal.classList.contains('active') && searchInput) {
        searchInput.focus();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      State.searchQuery = e.target.value;
      renderProducts();
      const showcase = document.getElementById('vitrineSection');
      if (showcase && State.searchQuery.length >= 2) {
        showcase.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function searchByTag(tag) {
  State.searchQuery = tag;
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = tag;
  renderProducts();
  const showcase = document.getElementById('vitrineSection');
  if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
}

// Newsletter
function setupNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterEmail');
      if (input && input.value) {
        showToast('Inscrição confirmada. Use o cupom HEVI10.');
        input.value = '';
      }
    });
  }
}

// Toast
function showToast(msg) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <span class="toast-icon">✓</span>
      <span id="toastMsg"></span>
    `;
    document.body.appendChild(toast);
  }

  const toastMsg = document.getElementById('toastMsg');
  if (toastMsg) toastMsg.textContent = msg;

  toast.classList.add('active');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}
