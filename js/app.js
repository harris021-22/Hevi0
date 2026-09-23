/**
 * HEVI FITWEAR - DISTILLED E-COMMERCE CORE & MOBILE SPA CONTROLLER
 * Arquitetura enxuta, alta performance e controle de visões mobile sem saltos
 */

// Catálogo Oficial HEVI - Coleção Mulheres
const PRODUCTS_DATA = [
  {
    id: 'hevi-01',
    title: 'Conjunto de Short Sculp Terracota',
    category: 'conjunto-short',
    tag: 'mais-vendidos',
    priceOriginal: 249.90,
    pricePix: 179.91,
    installments: '10x de R$ 19,99 sem juros',
    imgPrimary: 'assets/images/conjunto_short_hevi.jpg',
    imgHover: 'assets/images/conjunto_short_black.jpg',
    badge: 'Zero Transparência',
    colors: ['#8A5338', '#5B2333', '#2C2C2B', '#E6D8CB'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Conjunto de alta compressão com top esportivo de sustentação reforçada e short biker anatômico em poliamida nobre com trama zero transparência.'
  },
  {
    id: 'hevi-02',
    title: 'Conjunto de Short Biker Black Contour',
    category: 'conjunto-short',
    tag: 'lancamentos',
    priceOriginal: 229.90,
    pricePix: 169.91,
    installments: '10x de R$ 18,99 sem juros',
    imgPrimary: 'assets/images/conjunto_short_black.jpg',
    imgHover: 'assets/images/conjunto_short_hevi.jpg',
    badge: 'Alta Compressão',
    colors: ['#2C2C2B', '#8A5338', '#1D2A44'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Desenvolvido para treinos intensos. O cós anatômico duplo com compressão modela a cintura sem enrolar em agachamentos.'
  },
  {
    id: 'hevi-03',
    title: 'Conjunto de Camisa UV Protect & Biker Navy',
    category: 'conjunto-camisa',
    tag: 'mais-vendidos',
    priceOriginal: 289.90,
    pricePix: 219.90,
    installments: '10x de R$ 23,99 sem juros',
    imgPrimary: 'assets/images/conjunto_camisa_hevi.jpg',
    imgHover: 'assets/images/hevi_navy_set.jpg',
    badge: 'Proteção UV50+',
    colors: ['#1D2A44', '#8A5338', '#E6D8CB'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Trio athleisure sofisticado: camisa esportiva oversized leve com proteção solar UV50+, top de alta sustentação e short biker no azul marinho.'
  },
  {
    id: 'hevi-04',
    title: 'Macaquinho Seamless Boost Marsala',
    category: 'macaquinho',
    tag: 'mais-vendidos',
    priceOriginal: 199.90,
    pricePix: 149.90,
    installments: '10x de R$ 15,99 sem juros',
    imgPrimary: 'assets/images/macaquinho_hevi.jpg',
    imgHover: 'assets/images/hevi_terracotta_set.jpg',
    badge: 'Toque Acetinado',
    colors: ['#5B2333', '#8A5338', '#2C2C2B'],
    sizes: ['P', 'M', 'G'],
    description: 'Peça única sem costura com toque acetinado. Modela o busto e o quadril com tecnologia térmica que proporciona liberdade absoluta de movimentos.'
  },
  {
    id: 'hevi-05',
    title: 'Macaquinho Sculpt Ribbed Terracota',
    category: 'macaquinho',
    tag: 'lancamentos',
    priceOriginal: 189.90,
    pricePix: 139.90,
    installments: '10x de R$ 14,99 sem juros',
    imgPrimary: 'assets/images/hevi_terracotta_set.jpg',
    imgHover: 'assets/images/macaquinho_hevi.jpg',
    badge: 'Lançamento',
    colors: ['#8A5338', '#5B2333', '#1D2A44'],
    sizes: ['P', 'M', 'G'],
    description: 'Textura canelada com sustentação de médio impacto. Modela a silhueta com elegância, frescor e zero transparência comprovada.'
  },
  {
    id: 'hevi-06',
    title: 'Macacão Longo Compression Grafite',
    category: 'macacao',
    tag: 'mais-vendidos',
    priceOriginal: 279.90,
    pricePix: 199.90,
    installments: '10x de R$ 21,99 sem juros',
    imgPrimary: 'assets/images/macacao_hevi.jpg',
    imgHover: 'assets/images/conjunto_short_black.jpg',
    badge: 'Zero Transparência',
    colors: ['#2C2C2B', '#1D2A44', '#5B2333'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Macacão longo inteiriço de alta compressão muscular. Costas com design em tiras cruzadas ergonômicas e toque encorpado que não marca.'
  },
  {
    id: 'hevi-07',
    title: 'Blusa Gola Alta Segunda Pele Nude',
    category: 'blusa',
    tag: 'lancamentos',
    priceOriginal: 159.90,
    pricePix: 119.90,
    installments: '10x de R$ 12,99 sem juros',
    imgPrimary: 'assets/images/blusa_hevi.jpg',
    imgHover: 'assets/images/blusa_cropped_hevi.jpg',
    badge: 'Conforto Térmico',
    colors: ['#E6D8CB', '#2C2C2B', '#8A5338'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Blusa manga longa com gola alta refinada em malha térmica de poliamida nobre ultra suave, respirável e com caimento impecável.'
  },
  {
    id: 'hevi-08',
    title: 'Blusa Cropped Ribbed Terracota',
    category: 'blusa',
    tag: 'mais-vendidos',
    priceOriginal: 139.90,
    pricePix: 99.90,
    installments: '10x de R$ 10,99 sem juros',
    imgPrimary: 'assets/images/blusa_cropped_hevi.jpg',
    imgHover: 'assets/images/blusa_hevi.jpg',
    badge: 'Trend 2026',
    colors: ['#8A5338', '#5B2333', '#E6D8CB'],
    sizes: ['P', 'M', 'G'],
    description: 'Blusa cropped manga longa canelada com ajuste anatômico ao corpo. Peça chave do estilo athleisure que vai do treino à rotina casual.'
  }
];

// Mapa de Cores Oficiais HEVI
const COLOR_NAMES = {
  '#8A5338': 'Terracota',
  '#5B2333': 'Bordô Marsala',
  '#1D2A44': 'Azul Marinho Noturno',
  '#E6D8CB': 'Off-White Nude',
  '#2C2C2B': 'Preto Grafite'
};

// Estado Global da Aplicação (Inicia sem itens no carrinho nem favoritos)
const State = {
  cart: [],
  wishlist: [],
  appliedCoupon: null,
  freeShippingThreshold: 299.00,
  activeFilter: 'todos',
  searchQuery: '',
  mobileActiveView: 'inicio',
  lastRemoved: null
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar estado de histórico para navegação móvel com seta de voltar
  if (!window.history.state) {
    window.history.replaceState({ view: 'inicio' }, '', window.location.href);
  }
  setupHistoryNavigation();

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
// CONTROLE DE NAVEGAÇÃO E HISTÓRICO MOBILE (Seta de Voltar do Celular)
// ==========================================================================
function setupHistoryNavigation() {
  window.addEventListener('popstate', (e) => {
    // 1. Se o modal de visualização rápida do produto estiver aberto, fechar
    const quickViewModal = document.getElementById('quickViewBackdrop');
    if (quickViewModal && quickViewModal.classList.contains('active')) {
      closeQuickView(true);
      return;
    }

    // 2. Se a sacola de compras estiver aberta, fechar
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer && cartDrawer.classList.contains('active')) {
      closeCartDrawer(true);
      return;
    }

    // 3. Se o menu hambúrguer lateral estiver aberto, fechar
    const navDrawer = document.getElementById('navDrawer');
    if (navDrawer && navDrawer.classList.contains('active')) {
      closeNavDrawer(true);
      return;
    }

    // 4. Se o modal de busca do desktop estiver aberto, fechar
    const searchModal = document.getElementById('searchModal');
    if (searchModal && searchModal.classList.contains('active')) {
      searchModal.classList.remove('active');
      return;
    }

    // 5. Se estamos no celular e em outra visão (ex: 'colecao' ou 'buscar'), voltar para 'inicio'
    if (window.innerWidth < 1024) {
      const targetView = (e.state && e.state.view) ? e.state.view : 'inicio';
      if (State.mobileActiveView !== targetView) {
        switchMobileView(targetView, false);
      }
    }
  });
}

// ==========================================================================
// CONTROLE DO MENU HAMBÚRGUER LATERAL ESQUERDO
// ==========================================================================
function openNavDrawer() {
  const drawer = document.getElementById('navDrawer');
  const backdrop = document.getElementById('navDrawerBackdrop');
  const btn = document.getElementById('mobileMenuBtn');
  if (drawer && backdrop) {
    if (!drawer.classList.contains('active')) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (btn) btn.setAttribute('aria-expanded', 'true');
      window.history.pushState({ overlay: 'navDrawer' }, '');
    }
  }
}

function closeNavDrawer(fromPopState = false) {
  const drawer = document.getElementById('navDrawer');
  const backdrop = document.getElementById('navDrawerBackdrop');
  const btn = document.getElementById('mobileMenuBtn');
  if (drawer && backdrop && drawer.classList.contains('active')) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    if (btn) btn.setAttribute('aria-expanded', 'false');

    if (!fromPopState && window.history.state && window.history.state.overlay === 'navDrawer') {
      window.history.back();
    }
  }
}

function handleDrawerNav(viewName) {
  closeNavDrawer(true);
  if (viewName === 'sacola') {
    window.history.replaceState({ overlay: 'cartDrawer' }, '');
    openCartDrawer(true);
  } else if (viewName === 'inicio') {
    if (window.history.state && window.history.state.overlay === 'navDrawer') {
      window.history.back();
    }
    switchMobileView('inicio', false);
  } else {
    window.history.replaceState({ view: viewName }, '');
    switchMobileView(viewName, false);
  }
}

function handleDrawerCategory(category) {
  closeNavDrawer(true);
  window.history.replaceState({ view: 'colecao' }, '');
  openCategoryFromHome(category);
}

// Fechar overlays ao pressionar Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeNavDrawer();
    closeCartDrawer();
    closeQuickView();
    const searchModal = document.getElementById('searchModal');
    if (searchModal && searchModal.classList.contains('active')) {
      searchModal.classList.remove('active');
    }
  }
});

// ==========================================================================
// MOBILE SPA VIEW-SWITCHING (Sem troca de altura ou saltos)
// ==========================================================================
function switchMobileView(viewName, pushHistory = true) {
  if (viewName === 'sacola') {
    openCartDrawer();
    return;
  }

  // Se o drawer da sacola estiver aberto, fechá-lo
  const drawer = document.getElementById('cartDrawer');
  if (drawer && drawer.classList.contains('active')) {
    closeCartDrawer(true);
  }

  // Se o menu lateral estiver aberto, fechá-lo
  const navDrawer = document.getElementById('navDrawer');
  if (navDrawer && navDrawer.classList.contains('active')) {
    closeNavDrawer(true);
  }

  const previousView = State.mobileActiveView;
  State.mobileActiveView = viewName;
  document.body.setAttribute('data-active-view', viewName);

  // Atualizar classe ativa no drawer de navegação lateral
  const navItems = document.querySelectorAll('.nav-drawer-item');
  navItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-nav-target') === viewName);
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

  // Salvar no histórico de navegação para a seta de voltar do celular
  if (pushHistory && viewName !== previousView) {
    if (viewName !== 'inicio') {
      window.history.pushState({ view: viewName }, '');
    }
  }
}

function handleLogoClick() {
  if (window.innerWidth < 1024) {
    if (State.mobileActiveView !== 'inicio') {
      window.history.replaceState({ view: 'inicio' }, '');
      switchMobileView('inicio', false);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
  } else if (State.activeFilter === 'conjunto-short') {
    filtered = PRODUCTS_DATA.filter(p => p.category === 'conjunto-short');
  } else if (State.activeFilter === 'conjunto-camisa') {
    filtered = PRODUCTS_DATA.filter(p => p.category === 'conjunto-camisa');
  } else if (State.activeFilter === 'macaquinho') {
    filtered = PRODUCTS_DATA.filter(p => p.category === 'macaquinho');
  } else if (State.activeFilter === 'macacao') {
    filtered = PRODUCTS_DATA.filter(p => p.category === 'macacao');
  } else if (State.activeFilter === 'blusa') {
    filtered = PRODUCTS_DATA.filter(p => p.category === 'blusa');
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

  if (openCartBtn) openCartBtn.addEventListener('click', () => openCartDrawer());
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => closeCartDrawer());
  if (backdrop) backdrop.addEventListener('click', () => closeCartDrawer());

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

function openCartDrawer(fromReplace = false) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    if (!drawer.classList.contains('active')) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Destacar Sacola no drawer lateral
      const navItems = document.querySelectorAll('.nav-drawer-item');
      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-nav-target') === 'sacola');
      });

      if (!fromReplace) {
        window.history.pushState({ overlay: 'cartDrawer' }, '');
      }
    }
  }
}

function closeCartDrawer(fromPopState = false) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop && drawer.classList.contains('active')) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';

    // Restaurar a visão ativa anterior no drawer lateral
    const navItems = document.querySelectorAll('.nav-drawer-item');
    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-nav-target') === State.mobileActiveView);
    });

    if (!fromPopState && window.history.state && window.history.state.overlay === 'cartDrawer') {
      window.history.back();
    }
  }
}

function navigateFromCartToColecao() {
  closeCartDrawer(true);
  window.history.replaceState({ view: 'colecao' }, '');
  switchMobileView('colecao', false);
}

function updateCartQty(idx, delta) {
  if (State.cart[idx]) {
    State.cart[idx].qty += delta;
    if (State.cart[idx].qty <= 0) {
      removeCartItem(idx);
      return;
    }
  }
  updateCartUI();
}

function removeCartItem(idx) {
  if (!State.cart[idx]) return;
  const removed = State.cart.splice(idx, 1)[0];
  State.lastRemoved = { item: removed, index: idx };
  updateCartUI();
  showToast(`"${removed.title}" removido.`, 'Desfazer', () => restoreLastRemovedItem());
}

function restoreLastRemovedItem() {
  if (State.lastRemoved && State.lastRemoved.item) {
    State.cart.splice(State.lastRemoved.index, 0, State.lastRemoved.item);
    const restoredTitle = State.lastRemoved.item.title;
    State.lastRemoved = null;
    updateCartUI();
    showToast(`"${restoredTitle}" restaurado à sacola!`);
  }
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
  const mobileCartBadge = document.getElementById('mobileCartCountBadge');
  if (mobileCartBadge) mobileCartBadge.textContent = totalItems;
  const navDrawerBadge = document.getElementById('navDrawerCartBadge');
  if (navDrawerBadge) navDrawerBadge.textContent = totalItems;
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
    if (subtotal === 0) {
      shippingMsg.innerHTML = `Faltam <strong style="color: var(--hevi-marsala);">R$ ${State.freeShippingThreshold.toFixed(2).replace('.', ',')}</strong> para <strong>FRETE GRÁTIS</strong>`;
      shippingFill.style.transform = 'scaleX(0)';
    } else if (diff <= 0) {
      shippingMsg.innerHTML = `<strong style="color: #2E7D32;">Parabéns! Você tem FRETE GRÁTIS.</strong>`;
      shippingFill.style.transform = 'scaleX(1)';
    } else {
      const pct = Math.min(100, Math.max(0, (subtotal / State.freeShippingThreshold) * 100));
      shippingMsg.innerHTML = `Faltam <strong style="color: var(--hevi-marsala);">R$ ${diff.toFixed(2).replace('.', ',')}</strong> para <strong>FRETE GRÁTIS</strong>`;
      shippingFill.style.transform = `scaleX(${pct / 100})`;
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
        <button onclick="navigateFromCartToColecao();" class="btn-primary" style="margin-top: 14px; width: auto; padding: 10px 22px;">Ver Coleção Mulheres</button>
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
          <button class="cart-item-remove" onclick="removeCartItem(${idx})" aria-label="Remover">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Quick View Modal
function setupQuickViewListeners() {
  const modalBackdrop = document.getElementById('quickViewBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', () => closeQuickView());
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
  let selectedColorName = COLOR_NAMES[selectedColor] || 'Terracota';

  const colorLabelEl = document.getElementById('modalSelectedColorName');
  if (colorLabelEl) colorLabelEl.textContent = selectedColorName;

  if (sizeGroup) {
    sizeGroup.innerHTML = product.sizes.map((s, i) => `
      <button class="modal-size-btn ${i === 0 ? 'active' : ''}" onclick="selectModalSize(this, '${s}')">${s}</button>
    `).join('');
  }

  if (colorGroup) {
    colorGroup.innerHTML = product.colors.map((c, i) => `
      <span class="color-dot ${i === 0 ? 'active' : ''}" style="background-color: ${c};" onclick="selectModalColor(this, '${c}')" title="${COLOR_NAMES[c] || 'Cor'}"></span>
    `).join('');
  }

  window.modalCurrentColor = selectedColor;
  window.modalCurrentColorName = selectedColorName;

  if (addBtn) {
    addBtn.onclick = () => {
      const activeColor = window.modalCurrentColor || selectedColor;
      const activeColorName = window.modalCurrentColorName || selectedColorName;
      const activeSizeBtn = document.querySelector('.modal-size-btn.active');
      const activeSize = activeSizeBtn ? activeSizeBtn.textContent.trim() : selectedSize;

      State.cart.push({
        id: product.id,
        title: product.title,
        price: product.pricePix,
        size: activeSize,
        color: activeColor,
        colorName: activeColorName,
        img: product.imgPrimary,
        qty: 1
      });
      updateCartUI();
      closeQuickView(true);
      window.history.replaceState({ overlay: 'cartDrawer' }, '');
      openCartDrawer(true);
      showToast(`"${product.title}" (${activeColorName}) adicionado à sacola.`);
    };
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    window.history.pushState({ overlay: 'quickView', prodId: prodId }, '');
  }
}

function selectModalSize(btn, size) {
  document.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectModalColor(dot, color) {
  document.querySelectorAll('#modalColorGroup .color-dot').forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
  const name = COLOR_NAMES[color] || 'Selecionada';
  const colorLabelEl = document.getElementById('modalSelectedColorName');
  if (colorLabelEl) colorLabelEl.textContent = name;
  window.modalCurrentColor = color;
  window.modalCurrentColorName = name;
}

function closeQuickView(fromPopState = false) {
  const modal = document.getElementById('quickViewBackdrop');
  if (modal && modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = '';

    if (!fromPopState && window.history.state && window.history.state.overlay === 'quickView') {
      window.history.back();
    }
  }
}

// Busca Overlay Desktop
function setupSearchListeners() {
  const toggleBtn = document.getElementById('searchToggleBtn');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');

  if (toggleBtn && searchModal) {
    toggleBtn.addEventListener('click', () => {
      const isOpening = !searchModal.classList.contains('active');
      searchModal.classList.toggle('active');
      if (isOpening) {
        if (searchInput) searchInput.focus();
        window.history.pushState({ overlay: 'searchModal' }, '');
      } else {
        if (window.history.state && window.history.state.overlay === 'searchModal') {
          window.history.back();
        }
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

// Toast com suporte a ação (ex: Desfazer)
function showToast(msg, actionLabel = null, onAction = null) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  const actionBtn = document.getElementById('toastActionBtn');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;

  if (actionLabel && onAction && actionBtn) {
    actionBtn.textContent = actionLabel;
    actionBtn.style.display = 'inline-flex';
    actionBtn.onclick = (e) => {
      e.stopPropagation();
      onAction();
      toast.classList.remove('active');
    };
  } else if (actionBtn) {
    actionBtn.style.display = 'none';
    actionBtn.onclick = null;
  }

  toast.classList.add('active');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('active');
  }, actionLabel ? 5000 : 3200);
}
