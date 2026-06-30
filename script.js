const products = [
  { id: 1, name: 'Midnight Dew Serum', category: 'Skincare', price: 2800, description: 'Blue botanicals + niacinamide', badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Velvet Crush Lip', category: 'Makeup', price: 850, description: 'Soft matte with lasting comfort', badge: 'New', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Ocean Mist Fragrance', category: 'Fragrance', price: 2990, description: 'Crisp citrus and mineral musk', badge: 'Limited', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Cloud Veil Primer', category: 'Skincare', price: 1400, description: 'Smooths and preps for a radiant finish', badge: 'Editor pick', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Aurora Glow Highlighter', category: 'Makeup', price: 950, description: 'Liquid sheen for sculpted light', badge: 'Trending', image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'Moonlit Body Oil', category: 'Fragrance', price: 2200, description: 'Velvety finish with soft florals', badge: 'Giftable', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80' },
  { id: 7, name: 'Luminous Silk Cream', category: 'Skincare', price: 1800, description: 'Weightless hydration with a satin glow', badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80' },
  { id: 8, name: 'Navy Lash Lift', category: 'Makeup', price: 1200, description: 'Defined lashes with a lifted curl', badge: 'New', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80' },
  { id: 9, name: 'Cobalt Bloom Eau', category: 'Fragrance', price: 2600, description: 'Bright florals with a cool finish', badge: 'Limited', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80' },
  { id: 10, name: 'Crystal Calm Toner', category: 'Skincare', price: 1100, description: 'Soothing mist for balanced skin', badge: 'Fresh', image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=800&q=80' },
  { id: 11, name: 'Silver Veil Blush', category: 'Makeup', price: 900, description: 'Buildable blush with a healthy flush', badge: 'Trending', image: 'https://images.unsplash.com/photo-1556229010-195a672e8a03?auto=format&fit=crop&w=800&q=80' },
  { id: 12, name: 'Misty Sea Cologne', category: 'Fragrance', price: 2400, description: 'Clean aquatic notes for everyday wear', badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80' },
  { id: 13, name: 'Blue Clay Mask', category: 'Skincare', price: 1500, description: 'Purifying mask with mineral richness', badge: 'Editor pick', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80' },
  { id: 14, name: 'Pearl Glow Concealer', category: 'Makeup', price: 1300, description: 'Soft-focus coverage with lasting comfort', badge: 'New', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80' },
  { id: 15, name: 'Midnight Bloom Perfume', category: 'Fragrance', price: 2890, description: 'Velvety florals and warm woods', badge: 'Limited', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80' },
  { id: 16, name: 'Halo Recovery Balm', category: 'Skincare', price: 1250, description: 'Barrier-supporting balm for dry skin', badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=800&q=80' },
  { id: 17, name: 'Ocean Edge Eyeliner', category: 'Makeup', price: 700, description: 'Smudge-proof precision for defined eyes', badge: 'Trending', image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80' },
  { id: 18, name: 'Dewdrop Body Mist', category: 'Fragrance', price: 950, description: 'Fresh citrus and clean musk', badge: 'Fresh', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80' },
  { id: 19, name: 'Marine Serum Elixir', category: 'Skincare', price: 2100, description: 'Brightens and smooths with marine actives', badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80' },
  { id: 20, name: 'Velvet Brow Tint', category: 'Makeup', price: 1150, description: 'Soft, sculpted brows in one swipe', badge: 'New', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
  { id: 21, name: 'Glacier Mist Spray', category: 'Fragrance', price: 1450, description: 'Cool mineral accord with citrus lift', badge: 'Giftable', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80' },
  { id: 22, name: 'Radiant Skin Essence', category: 'Skincare', price: 1700, description: 'Layerable essence for a glassy glow', badge: 'Editor pick', image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=800&q=80' },
  { id: 23, name: 'Linen Rose Powder', category: 'Makeup', price: 980, description: 'Flushed finish with silky texture', badge: 'Trending', image: 'https://images.unsplash.com/photo-1556229010-195a672e8a03?auto=format&fit=crop&w=800&q=80' },
  { id: 24, name: 'Aqua Velvet Parfum', category: 'Fragrance', price: 2740, description: 'Soft woods and fresh citrus blend', badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80' },
  { id: 25, name: 'Cool Calm Cleanser', category: 'Skincare', price: 900, description: 'Gentle daily cleanser with ceramides', badge: 'Fresh', image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=800&q=80' },
  { id: 26, name: 'Satin Eye Shadow', category: 'Makeup', price: 750, description: 'Iridescent color with easy blendability', badge: 'New', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80' },
  { id: 27, name: 'Coastal Breeze Oil', category: 'Fragrance', price: 1600, description: 'Fresh sea salt with airy florals', badge: 'Limited', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80' },
  { id: 28, name: 'Plush Dew Moisturizer', category: 'Skincare', price: 1350, description: 'Comforting cream for soft, balanced skin', badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=800&q=80' },
  { id: 29, name: 'Moonlight Lip Gloss', category: 'Makeup', price: 800, description: 'High-shine gloss with cushioned comfort', badge: 'Trending', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
  { id: 30, name: 'Azure Velvet Candle', category: 'Fragrance', price: 1100, description: 'Soft amber and blue tea notes', badge: 'Giftable', image: 'https://images.unsplash.com/photo-1608571424352-9261a1e1e6f0?auto=format&fit=crop&w=800&q=80' },
  { id: 31, name: 'Pure Silk Essence', category: 'Skincare', price: 1950, description: 'Silky layers for luminous, calm skin', badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=800&q=80' },
  { id: 32, name: 'Blue Ice Nail Lacquer', category: 'Makeup', price: 650, description: 'Glossy, vivid color with a fast dry finish', badge: 'Fresh', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80' }
];

const state = {
  category: 'All',
  sort: 'featured',
  query: '',
  minPrice: 300,
  maxPrice: 3000
};

const cart = [];
const wishlist = [];

const filtersElement = document.getElementById('filters');
const productsGrid = document.getElementById('productsGrid');
const resultsCount = document.getElementById('resultsCount');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const cartList = document.getElementById('cartList');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const subtotal = document.getElementById('subtotal');
const toast = document.getElementById('toast');
const navItems = document.querySelectorAll('.nav-item');
const authModal = document.getElementById('authModal');
const checkoutModal = document.getElementById('checkoutModal');
const rewardsModal = document.getElementById('rewardsModal');
const adminModal = document.getElementById('adminModal');
const adminSection = document.getElementById('adminSection');
const adminTabContent = document.getElementById('adminTabContent');
const signupName = document.getElementById('signupName');
const authEmail = document.getElementById('authEmail');
const authPassword = document.getElementById('authPassword');
const authConfirm = document.getElementById('authConfirm');
const adminPassword = document.getElementById('adminPassword');
const checkoutSummary = document.getElementById('checkoutSummary');
const orderConfirmation = document.getElementById('orderConfirmation');
const checkoutTotal = document.getElementById('checkoutTotal');
const couponCodeInput = document.getElementById('couponCode');
const COUPONS = { blue20: 0.20, glow10: 0.10, freegift: 0.00, firstbuy: 0.15 };
let appliedCoupon = null;
const ADMIN_PASSWORD = 'blueadmin2026';

const defaultAdminState = {
  activeTab: 'users'
};

const productImagePool = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
];

function getProductImage(product) {
  return productImagePool[(product.id - 1) % productImagePool.length];
}

function getProductReviews(product) {
  const rating = (4.6 + ((product.id % 6) * 0.06)).toFixed(1);
  const count = 80 + product.id * 7;
  return { rating, count };
}

function getCategories() {
  return ['All', ...new Set(products.map((item) => item.category))];
}

function renderFilters() {
  filtersElement.innerHTML = getCategories()
    .map((category) => `
      <button class="filter-btn ${state.category === category ? 'active' : ''}" data-category="${category}">
        ${category}
      </button>
    `)
    .join('');
}

function getFilteredProducts() {
  let filtered = products.filter((product) => {
    const matchesCategory = state.category === 'All' || product.category === state.category;
    const matchesQuery = product.name.toLowerCase().includes(state.query.toLowerCase()) || product.description.toLowerCase().includes(state.query.toLowerCase());
    const matchesPrice = product.price >= state.minPrice && product.price <= state.maxPrice;
    return matchesCategory && matchesQuery && matchesPrice;
  });

  if (state.sort === 'price-asc') filtered = filtered.slice().sort((a, b) => a.price - b.price);
  if (state.sort === 'price-desc') filtered = filtered.slice().sort((a, b) => b.price - a.price);

  return filtered;
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  resultsCount.textContent = `${visibleProducts.length} products available`;

  if (!visibleProducts.length) {
    productsGrid.innerHTML = '<div class="empty-state">No products match your search yet. Try another keyword.</div>';
    return;
  }

  productsGrid.innerHTML = visibleProducts
    .map((product) => {
      const inWishlist = wishlist.includes(product.id);
      const inCart = cart.find((item) => item.id === product.id);
      const reviews = getProductReviews(product);
      return `
        <article class="product-card">
          <div class="product-top">
            <span class="badge">${product.badge}</span>
            <button data-action="wishlist" data-id="${product.id}" aria-label="Add to wishlist">${inWishlist ? '♥' : '♡'}</button>
          </div>
          <div class="product-image" style="background-image:url('${getProductImage(product)}')"></div>
          <h4>${product.name}</h4>
          <p>${product.description}</p>
          <p class="product-reviews">⭐ ${reviews.rating} · ${reviews.count} reviews</p>
          <div class="product-meta">
            <strong>₹${product.price}</strong>
            <button class="mini-btn" data-action="cart" data-id="${product.id}">${inCart ? 'Added' : 'Add to bag'}</button>
          </div>
        </article>
      `;
    })
    .join('');
}

function showToast(message, duration = 1800) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), duration);
}

function openModal(modal) {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function getLocalStorageData(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveLocalStorageData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getAdminUsers() {
  return getLocalStorageData('admin_user_database', []);
}

function saveAdminUsers(users) {
  saveLocalStorageData('admin_user_database', users);
}

function addAdminUser(name, email) {
  const users = getAdminUsers();
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    email,
    role: 'Customer'
  };
  users.push(newUser);
  saveAdminUsers(users);
  return newUser;
}

function getAuthMode() {
  return document.querySelector('.modal-tab.active')?.dataset.authTab || 'login';
}

function ensureAdminStorage() {
  const existingUsers = getLocalStorageData('admin_user_database', null);
  if (existingUsers === null) {
    saveAdminUsers([]);
  } else if (Array.isArray(existingUsers)) {
    const cleanedUsers = existingUsers.filter((user) => !['Maya Patel', 'Aria Singh'].includes(user.name));
    if (cleanedUsers.length !== existingUsers.length) {
      saveAdminUsers(cleanedUsers);
    }
  }

  if (!localStorage.getItem('product_catalog')) {
    saveLocalStorageData('product_catalog', products.map((product) => ({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      badge: product.badge,
      description: product.description,
      reviews: getProductReviews(product)
    })));
  }
  if (!localStorage.getItem('order_summary_checkout')) {
    saveLocalStorageData('order_summary_checkout', [
      { orderId: 'BLC-1021', customer: 'Maya Patel', total: 5450, status: 'Processing' },
      { orderId: 'BLC-1022', customer: 'Aria Singh', total: 960, status: 'Delivered' }
    ]);
  }
}

function applyCoupon(code) {
  const normalized = (code || '').trim().toLowerCase();
  if (!normalized) {
    showToast('Enter a coupon code');
    return false;
  }
  if (COUPONS[normalized]) {
    appliedCoupon = { code: normalized, discount: COUPONS[normalized] };
    couponCodeInput.value = normalized;
    renderCheckoutSummary();
    showToast(`Coupon applied: ${Math.round(COUPONS[normalized] * 100)}% off`);
    return true;
  }
  showToast('Invalid coupon');
  return false;
}

function resetCheckoutCoupon() {
  appliedCoupon = null;
  if (couponCodeInput) couponCodeInput.value = '';
}

function renderCheckoutSummary() {
  orderConfirmation?.classList.add('hidden');
  if (!cart.length) {
    checkoutSummary.innerHTML = '<div class="empty-state">Your bag is empty.</div>';
    checkoutTotal.textContent = '₹0';
    return;
  }

  checkoutSummary.innerHTML = cart
    .map((item) => `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong>
          <p>${item.quantity} × ₹${item.price}</p>
        </div>
        <strong>₹${item.price * item.quantity}</strong>
      </div>
    `)
    .join('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (appliedCoupon && appliedCoupon.code) {
    const discount = Math.round(total * appliedCoupon.discount);
    const discountedTotal = total - discount;
    // show coupon line
    checkoutSummary.insertAdjacentHTML('beforeend', `
      <div class="summary-row">
        <span>Coupon (${appliedCoupon.code.toUpperCase()})</span>
        <strong>-₹${discount}</strong>
      </div>
    `);
    checkoutTotal.textContent = `₹${discountedTotal}`;
  } else {
    checkoutTotal.textContent = `₹${total}`;
  }
}

function renderAdminTable(type) {
  const users = getAdminUsers();
  const productCatalog = getLocalStorageData('product_catalog', []);
  const orders = getLocalStorageData('order_summary_checkout', []);

  if (type === 'users') {
    if (!users.length) {
      adminTabContent.innerHTML = '<div class="empty-state">No data yet. Create user/order first</div>';
      return;
    }
    adminTabContent.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th></tr>
        </thead>
        <tbody>
          ${users.map((user) => `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td><td>${user.role}</td></tr>`).join('')}
        </tbody>
      </table>
    `;
    return;
  }

  if (type === 'products') {
    if (!productCatalog.length) {
      adminTabContent.innerHTML = '<div class="empty-state">No data yet. Create user/order first</div>';
      return;
    }
    adminTabContent.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Category</th><th>Description</th><th>Reviews</th><th>Price</th></tr>
        </thead>
        <tbody>
          ${productCatalog.map((product) => `<tr><td>${product.id}</td><td>${product.name}</td><td>${product.category}</td><td>${product.description || '—'}</td><td>⭐ ${product.reviews?.rating || '4.7'} · ${product.reviews?.count || '120'} reviews</td><td>₹${product.price}</td></tr>`).join('')}
        </tbody>
      </table>
    `;
    return;
  }

  if (type === 'orders') {
    if (!orders.length) {
      adminTabContent.innerHTML = '<div class="empty-state">No data yet. Create user/order first</div>';
      return;
    }
    adminTabContent.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr><th>Order ID</th><th>Customer</th><th>Total</th><th>Status</th></tr>
        </thead>
        <tbody>
          ${orders.map((order) => `<tr><td>${order.orderId}</td><td>${order.customer}</td><td>₹${order.total}</td><td>${order.status}</td></tr>`).join('')}
        </tbody>
      </table>
    `;
    return;
  }
}

function showAdminDashboard(tab = 'users') {
  adminSection.classList.remove('hidden');
  closeModal(adminModal);
  document.querySelectorAll('.admin-tab').forEach((button) => {
    button.classList.toggle('active', button.dataset.adminTab === tab);
  });
  renderAdminTable(tab);
  adminSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetAdminLogin() {
  adminSection.classList.add('hidden');
  adminPassword.value = '';
}

function renderCart() {
  if (!cart.length) {
    cartList.innerHTML = '<div class="empty-state">Your bag is waiting for a little glow.</div>';
    subtotal.textContent = '₹0';
  } else {
    cartList.innerHTML = cart
      .map((item) => `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <p>${item.quantity} × ₹${item.price}</p>
          </div>
          <div class="cart-item-actions">
            <div class="qty-controls">
              <button data-action="decrease" data-id="${item.id}">−</button>
              <span>${item.quantity}</span>
              <button data-action="increase" data-id="${item.id}">+</button>
            </div>
            <button class="text-btn" data-action="remove" data-id="${item.id}">Remove</button>
          </div>
          <strong>₹${item.price * item.quantity}</strong>
        </div>
      `)
      .join('');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    subtotal.textContent = `₹${total}`;
  }

  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  wishlistCount.textContent = wishlist.length;
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });

  renderCart();
  renderProducts();
  showToast('Added to bag');
}

function changeCartQuantity(productId, delta) {
  const existing = cart.find((item) => item.id === productId);
  if (!existing) return;

  existing.quantity += delta;
  if (existing.quantity <= 0) {
    const index = cart.findIndex((item) => item.id === productId);
    if (index >= 0) cart.splice(index, 1);
  }

  renderCart();
  renderProducts();
}

function removeCartItem(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index >= 0) {
    cart.splice(index, 1);
    renderCart();
    renderProducts();
    showToast('Removed from bag');
  }
}

function clearCart() {
  cart.length = 0;
  renderCart();
  renderProducts();
  showToast('Bag cleared');
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index >= 0) wishlist.splice(index, 1);
  else wishlist.push(productId);

  renderCart();
  renderProducts();
}

filtersElement.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-category]');
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderProducts();
});

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value.trim();
  renderProducts();
});

sortSelect.addEventListener('change', (event) => {
  state.sort = event.target.value;
  renderProducts();
});

function syncPriceRange() {
  const minValue = Number(minPriceInput.value) || 300;
  const maxValue = Number(maxPriceInput.value) || 3000;
  state.minPrice = Math.min(minValue, maxValue);
  state.maxPrice = Math.max(minValue, maxValue);
  minPriceInput.value = state.minPrice;
  maxPriceInput.value = state.maxPrice;
  renderProducts();
}

minPriceInput.addEventListener('input', syncPriceRange);
maxPriceInput.addEventListener('input', syncPriceRange);

document.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const action = button.dataset.action;
  const productId = Number(button.dataset.id);
  const mode = button.dataset.mode;

  if (action === 'cart') addToCart(productId);
  if (action === 'wishlist') toggleWishlist(productId);
  if (action === 'increase') changeCartQuantity(productId, 1);
  if (action === 'decrease') changeCartQuantity(productId, -1);
  if (action === 'remove') removeCartItem(productId);
  if (action === 'clear-cart') clearCart();
  if (action === 'open-auth') {
    authConfirm.classList.toggle('hidden', mode !== 'signup');
    signupName?.classList.toggle('hidden', mode !== 'signup');
    // Ensure the modal tab UI matches the opener (login vs signup)
    document.querySelectorAll('.modal-tab').forEach((item) => item.classList.toggle('active', item.dataset.authTab === mode));
    openModal(authModal);
    showToast(mode === 'signup' ? 'Create your account' : 'Welcome back');
  }
  if (action === 'open-checkout') {
    resetCheckoutCoupon();
    renderCheckoutSummary();
    openModal(checkoutModal);
  }
  if (action === 'open-editor-pick') {
    const editorProduct = products.find((p) => /Editor pick/i.test(p.badge)) || products.find((p) => p.id === 1);
    if (editorProduct) {
      const existing = cart.find((item) => item.id === editorProduct.id);
      if (existing) existing.quantity += 1;
      else cart.push({ id: editorProduct.id, name: editorProduct.name, price: editorProduct.price, quantity: 1 });
      renderCart();
      renderProducts();
      cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
      subtotal.textContent = `₹${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}`;
    }
    navItems.forEach((item) => item.classList.toggle('active', item.dataset.target === 'about'));
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Editor’s pick added to bag');
  }
  if (action === 'apply-coupon') {
    const code = button.dataset.coupon || couponCodeInput?.value;
    applyCoupon(code);
  }
  if (action === 'open-rewards') {
    openModal(rewardsModal);
    showToast('You have 4,800 glow points');
  }
  if (action === 'open-admin') {
    resetAdminLogin();
    openModal(adminModal);
  }
  if (action === 'admin-logout') {
    resetAdminLogin();
    adminSection.classList.add('hidden');
    showToast('Admin logged out');
  }
  if (action === 'close-modal') {
    closeModal(authModal);
    closeModal(checkoutModal);
    closeModal(rewardsModal);
    closeModal(adminModal);
  }
  if (action === 'place-order') {
    if (!cart.length) {
      showToast('No items in bag');
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = appliedCoupon ? Math.round(total * appliedCoupon.discount) : 0;
    const finalTotal = total - discount;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'gpay';
    const orders = getLocalStorageData('order_summary_checkout', []);
    const newOrder = {
      orderId: `BLC-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: 'Aanya',
      total: finalTotal,
      discount: discount,
      coupon: appliedCoupon?.code || null,
      status: paymentMethod === 'cod' ? 'Cash on Delivery' : 'Paid'
    };
    orders.unshift(newOrder);
    saveLocalStorageData('order_summary_checkout', orders);

    orderConfirmation.innerHTML = `
      <strong>Your order placed successfully</strong>
      <p>Your order is being prepared and will be delivered soon.</p>
    `;
    orderConfirmation?.classList.remove('hidden');
    checkoutSummary.innerHTML = '';
    checkoutTotal.textContent = `₹${finalTotal}`;
    clearCart();
    renderCart();
    renderAdminTable('orders');
    resetCheckoutCoupon();
    showToast('Your order placed successfully', 2500);
    setTimeout(() => {
      closeModal(checkoutModal);
      navItems.forEach((item) => item.classList.toggle('active', item.dataset.target === 'home'));
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.location.hash = '#home';
      }
    }, 1200);
    return;
  }
  if (action === 'auth-submit') {
    if (!adminModal.classList.contains('hidden')) {
      if (adminPassword?.value !== ADMIN_PASSWORD) {
        alert('Wrong password');
        return;
      }
      showAdminDashboard(defaultAdminState.activeTab);
      return;
    }

    if (getAuthMode() === 'signup') {
      const fullName = signupName?.value.trim();
      const email = authEmail?.value.trim();
      const password = authPassword?.value;
      const confirmPassword = authConfirm?.value;

      if (!fullName || !email || !password || password !== confirmPassword) {
        showToast('Please complete signup details');
        return;
      }

      addAdminUser(fullName, email);
      const profileHeading = document.querySelector('#profile h3');
      if (profileHeading) {
        profileHeading.textContent = `Welcome back, ${fullName}`;
      }
      closeModal(authModal);
      renderAdminTable('users');
      showToast(`Welcome ${fullName}`);
      return;
    }

    closeModal(authModal);
    closeModal(rewardsModal);
    showToast('Signed in successfully');
  }
});

document.querySelector('.bottom-nav')?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-target]');
  if (!button) return;

  navItems.forEach((item) => item.classList.toggle('active', item === button));
  const target = document.getElementById(button.dataset.target);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

document.querySelectorAll('.modal-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.modal-tab').forEach((item) => item.classList.toggle('active', item === tab));
    authConfirm.classList.toggle('hidden', tab.dataset.authTab !== 'signup');
    signupName?.classList.toggle('hidden', tab.dataset.authTab !== 'signup');
  });
});

document.querySelectorAll('.admin-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.admin-tab').forEach((item) => item.classList.toggle('active', item === tab));
    renderAdminTable(tab.dataset.adminTab);
  });
});

ensureAdminStorage();
renderFilters();
renderProducts();
renderCart();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch((error) => {
      console.error('Service worker registration failed:', error);
    });
  });
}
