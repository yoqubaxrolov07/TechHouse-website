/* 
   TECHHOUSE E-COMMERCE JAVASCRIPT
   To'liq Ishlaydigan Front-End Prototype
    */

// 
// MAHSULOTLAR MA'LUMOTLAR BAZASI
// Barcha mahsulotlar bu yerda saqlanadi
// 

const allProducts = [
  {
      id: 1,
      name: "Cuisinart 9-Speed Hand Mixer",
      price: 66.66,
      category: "Kitchen Appliances",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400",
      rating: 4.8,
      quantity: 20,
      description: "Powerful, convenient, and multifunctional - with this 9-speed mixer, you can easily prepare dough, cream, sauce, and many other recipes. Ergonomic gripper, smooth speed change, and additional accessories make working with the mixer more convenient and precise.",
      specs: "Motor: High-performance 220W motor\nSpeeds: 9 adjustable speed settings with smooth control\nIncluded attachments:\n- 2 x beater\n- 2 x dough hook\n- 1 x chef's whisk"
  },
  {
      id: 2,
      name: "Chefman 12-Quart 8-in-1 Air Fryer",
      price: 52.78,
      category: "Kitchen Appliances",
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400",
      rating: 4.6,
      quantity: 33,
      description: "8-in-1 multifunctional air fryer with 12-quart capacity. Cook healthier meals with up to 85% less oil. Features multiple cooking modes including air fry, roast, bake, and more.",
      specs: "Capacity: 12 quarts\nPower: 1700W\nModes: Air Fry, Roast, Bake, Broil, Rotisserie, Dehydrate, Reheat, Keep Warm\nTemperature Range: 90°F - 400°F"
  },
  {
      id: 3,
      name: "Ninja Detect Power Blender Pro",
      price: 29.80,
      category: "Kitchen Appliances",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400",
      rating: 4.5,
      quantity: 146,
      description: "Professional-grade blender with smart detect technology. Automatically adjusts power and blending time based on container size. Perfect for smoothies, soups, and more.",
      specs: "Power: 1400W\nCapacity: 72 oz pitcher\nFeatures: Smart Detect Technology, 4 Auto-iQ programs\nBlades: Stainless steel precision blades"
  },
  {
      id: 4,
      name: "COMFEE' EM720CPL-PMB Countertop",
      price: 249.90,
      category: "Kitchen Appliances",
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400",
      rating: 4.3,
      quantity: 9,
      description: "Compact and powerful microwave oven perfect for any kitchen. Features multiple power levels, quick-cook presets, and easy-to-clean interior.",
      specs: "Capacity: 0.7 Cu.ft\nPower: 700W\nDimensions: 17.3 x 13 x 10.2 inches\nFeatures: 11 power levels, express cooking, child safety lock"
  },
  {
      id: 5,
      name: "Vacuum with Automatic Cord Rewind",
      price: 70.10,
      category: "Cleaning Devices",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
      rating: 4.2,
      quantity: 23,
      description: "Powerful upright vacuum cleaner with automatic cord rewind feature. HEPA filtration system captures 99.9% of dust and allergens.",
      specs: "Type: Upright Vacuum\nFiltration: HEPA Filter\nCord Length: 25 feet with auto-rewind\nCapacity: 2L dust container"
  },
  {
      id: 6,
      name: "Handheld Steam Cleaner, 9-Piece Set",
      price: 45.30,
      category: "Cleaning Devices",
      image: "https://www.lakeland.co.uk/inspiration/wp-content/uploads/2024/01/Steam-cleaning-Featured-Image-Lakeland-Inspiration.jpg",
      rating: 4.6,
      quantity: 43,
      description: "Complete 9-piece handheld steam cleaning system. Chemical-free cleaning for multiple surfaces. Includes various attachments for versatile cleaning.",
      specs: "Heating Time: 3 minutes\nSteam Duration: 15-20 minutes\nWater Tank: 350ml\nIncludes: 9 different attachments for various surfaces"
  },
  {
      id: 7,
      name: "Programmable Coffee Maker",
      price: 89.99,
      category: "Kitchen Appliances",
      image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400",
      rating: 4.7,
      quantity: 15,
      description: "Programmable coffee maker with 24-hour timer. Brew delicious coffee exactly when you want it. Features auto-shutoff and keep-warm function.",
      specs: "Capacity: 12 cups\nProgrammable: 24-hour advance brew start\nFeatures: Auto pause, auto shutoff (2 hours), keep warm\nCarafe: Glass with comfort grip handle"
  },
  {
      id: 8,
      name: "Smart Speaker with Voice Control",
      price: 129.99,
      category: "Smart Home",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400",
      rating: 4.9,
      quantity: 28,
      description: "Voice-activated smart speaker with premium sound quality. Control your smart home, play music, get weather updates, and more with simple voice commands.",
      specs: "Connectivity: WiFi, Bluetooth\nVoice Assistant: Built-in AI assistant\nAudio: 360-degree premium sound\nCompatibility: Works with major smart home devices"
  },
  {
      id: 9,
      name: "Professional Hair Dryer",
      price: 79.99,
      category: "Personal Care",
      image: "https://www.hailyourhair.co.uk/cdn/shop/products/hailyourhairhairdryer10.jpg?v=1651063895",
      rating: 4.8,
      quantity: 11,
      description: "Salon-quality hair dryer with ionic technology. Multiple heat and speed settings for all hair types. Lightweight and ergonomic design.",
      specs: "Power: 1875W\nTechnology: Ionic technology for frizz reduction\nSettings: 3 heat, 2 speed settings\nWeight: 1.2 lbs"
  }
];

// 
// INITIALIZATION
// 
// Brauzer HTML to'liq o'qib keyin js ishga tushadi
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  initializeModal();
  initializeSearch();
  initializeShopNowButton();
  initializeAddToCart();
  initializeCart();
  loadProductsPage();
  loadProductDetail();
  updateCartCount();
}

// 
// CART COUNT YANGILASH
// Header dagi savatcha sonini ko'rsatadi
// 

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const cartCounts = document.querySelectorAll('.cart-count');
  cartCounts.forEach(element => {
      element.textContent = totalItems;
      element.style.display = totalItems > 0 ? 'inline' : 'none';
  });
}

// 
// MODAL FUNCTIONALITY
// 

function initializeModal() {
  const modal = document.getElementById('loginModal');
  const profileBtn = document.getElementById('profileBtn');
  const closeBtn = document.querySelector('.close');
  const loginForm = document.getElementById('loginForm');

  if (profileBtn) {
      profileBtn.addEventListener('click', function(e) {
          e.preventDefault();
          modal.style.display = 'block';
      });
  }

  if (closeBtn) {
      closeBtn.addEventListener('click', function() {
          modal.style.display = 'none';
      });
  }

  window.addEventListener('click', function(e) {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });

  if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const email = document.getElementById('email').value;
          alert('Welcome! You are now logged in as: ' + email);
          modal.style.display = 'none';
          loginForm.reset();
      });
  }
}

// 
// QIDIRUV FUNKSIYASI
// Mahsulotlarni qidiradi va products sahifasiga o'tkazadi
// 

function initializeSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', function() {
          performSearch();
      });

      searchInput.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
              performSearch();
          }
      });
  }
}

function performSearch() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.trim().toLowerCase();
  
  if (query) {
      // Qidiruv so'zini localStorage ga saqlash
      localStorage.setItem('searchQuery', query);
      
      // Products sahifasiga o'tish
      window.location.href = 'products.html';
  } else {
      alert('Iltimos, qidiruv so\'zini kiriting');
  }
}

// 
// SMOOTH SCROLL
// 

function initializeShopNowButton() {
  const shopNowBtn = document.getElementById('shopNowBtn');
  const featuredSection = document.getElementById('featuredProducts');

  if (shopNowBtn && featuredSection) {
      shopNowBtn.addEventListener('click', function() {
          featuredSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
          });
      });
  }
}

// 
// ADD TO CART
// 

function initializeAddToCart() {
  const addToCartButtons = document.querySelectorAll('.btn-cart');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.stopPropagation(); // Product card bosilishini to'xtatish
          const productData = this.getAttribute('data-product');
          const product = JSON.parse(productData);
          addProductToCart(product);
          
          this.textContent = 'Added to Cart!';
          this.style.backgroundColor = '#27ae60';
          
          setTimeout(() => {    
              this.textContent = 'Add to Cart';
              this.style.backgroundColor = '';
          }, 1000);
      });
  });
}

// Button dan to'g'ridan-to'g'ri chaqiriladi (onclick)
function addToCartFromButton(button) {
  const productData = button.getAttribute('data-product');
  const product = JSON.parse(productData);
  addProductToCart(product);
  
  button.textContent = 'Qo\'shildi!';
  button.style.backgroundColor = '#27ae60';
  
  setTimeout(() => {
      button.textContent = 'Add to Cart';
      button.style.backgroundColor = '';
  }, 1000);
}

function addProductToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
  } else {
      product.quantity = 1;
      cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  console.log('Product added to cart:', product);
}

// 
// KATEGORIYA BO'YICHA FILTERLASH
// Kategoriya bosilganda products sahifasiga o'tadi
// 

function filterByCategory(category) {
  localStorage.setItem('filterCategory', category);
  window.location.href = 'products.html';
}

// 
// PRODUCTS SAHIFASI
// Barcha mahsulotlarni ko'rsatadi va filterlaydi
// 

function loadProductsPage() {
  const productsGrid = document.getElementById('productsGrid');
  
  if (!productsGrid) return; // Agar products sahifasi bo'lmasa, chiqish

  // Qidiruv yoki filter mavjudligini tekshirish
  const searchQuery = localStorage.getItem('searchQuery');
  const filterCategory = localStorage.getItem('filterCategory');
  
  let filteredProducts = [...allProducts];
  
  // Agar qidiruv so'zi bo'lsa
  if (searchQuery) {
      filteredProducts = filteredProducts.filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      document.getElementById('pageTitle').textContent = `Search results for "${searchQuery}"`;
      localStorage.removeItem('searchQuery'); // Qidiruv so'zini tozalash
  }
  
  // Agar kategoriya bo'lsa
  if (filterCategory && filterCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
          product.category === filterCategory
      );
      
      document.getElementById('pageTitle').textContent = filterCategory;
      localStorage.removeItem('filterCategory');
  }
  
  displayProducts(filteredProducts);
}

function displayProducts(products) {
  const productsGrid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  
  if (products.length === 0) {
      productsGrid.style.display = 'none';
      noResults.style.display = 'block';
      return;
  }
  
  productsGrid.style.display = 'grid';
  noResults.style.display = 'none';
  
  products.forEach(product => {
      const productCard = `
          <div class="product-card" onclick="goToProduct(${product.id})">
              <img src="${product.image}" alt="${product.name}">
              <div class="product-info">
                  <h3 class="product-name">${product.name}</h3>
                  <p class="product-rating">⭐ ${product.rating}</p>
                  <p class="product-quantity">Quantity: ${product.quantity}</p>
                  <p class="product-price">$${product.price.toFixed(2)}</p>
                  <button class="btn btn-cart" onclick="event.stopPropagation(); addToCartFromButton(this)" data-product='${JSON.stringify(product)}'>Add to Cart</button>
              </div>
          </div>
      `;
      productsGrid.innerHTML += productCard;
  });
}

// Filter tugmalari uchun
function filterProducts(category) {
  // Barcha filter tugmalaridan active ni olib tashlash
  document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
  });
  
  // Bosilgan tugmaga active qo'shish
  event.target.classList.add('active');
  
  let filtered;
  if (category === 'all') {
      filtered = [...allProducts];
      document.getElementById('pageTitle').textContent = 'All Products';
  } else {
      filtered = allProducts.filter(p => p.category === category);
      document.getElementById('pageTitle').textContent = category;
  }
  
  displayProducts(filtered);
}

function clearFilters() {
  document.getElementById('pageTitle').textContent = 'All Products';
  displayProducts(allProducts);
  
  // Birinchi tugmani active qilish
  document.querySelectorAll('.filter-btn').forEach((btn, index) => {
      if (index === 0) btn.classList.add('active');
      else btn.classList.remove('active');
  });
}

// 
// MAHSULOT TAFSILOTLARI SAHIFASI
// 

function goToProduct(productId) {
  localStorage.setItem('selectedProductId', productId);
  window.location.href = 'product-detail.html';
}

function loadProductDetail() {
  const productImage = document.getElementById('productImage');
  
  if (!productImage) return; // Agar detail sahifasi bo'lmasa, chiqish
  
  const productId = parseInt(localStorage.getItem('selectedProductId'));
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) {
      alert('Mahsulot topilmadi');
      window.location.href = 'index.html';
      return;
  }
  
  // Mahsulot ma'lumotlarini ko'rsatish
  document.getElementById('productImage').src = product.image;
  document.getElementById('productImage').alt = product.name;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productRating').textContent = product.rating;
  document.getElementById('productCategory').textContent = product.category;
  document.getElementById('productSpecs').textContent = product.specs;
  document.getElementById('productPrice').textContent = product.price.toFixed(2);
  document.getElementById('productStock').textContent = product.quantity;
  document.getElementById('productDescription').textContent = product.description;
  
  // Add to Cart tugmasi
  const addBtn = document.getElementById('addToCartDetailBtn');
  if (addBtn) {
      addBtn.onclick = function() {
          addProductToCart(product);
          this.textContent = 'Product added to cart!';
          this.style.backgroundColor = '#27ae60';
          
          setTimeout(() => {
              this.textContent = 'Add to Cart';
              this.style.backgroundColor = '';
          }, 1500);
      };
  }
  
  // O'xshash mahsulotlarni ko'rsatish
  const relatedProducts = allProducts
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
  
  const relatedGrid = document.getElementById('relatedProductsGrid');
  if (relatedGrid) {
      relatedGrid.innerHTML = '';
      relatedProducts.forEach(p => {
          const card = `
              <div class="product-card" onclick="goToProduct(${p.id})">
                  <img src="${p.image}" alt="${p.name}">
                  <div class="product-info">
                      <h3 class="product-name">${p.name}</h3>
                      <p class="product-rating">⭐ ${p.rating}</p>
                      <p class="product-price">$${p.price.toFixed(2)}</p>
                      <button class="btn btn-cart" onclick="event.stopPropagation(); addToCartFromButton(this)" data-product='${JSON.stringify(p)}'>Add to Cart</button>
                  </div>
              </div>
          `;
          relatedGrid.innerHTML += card;
      });
  }
}

// 
// CART PAGE
// 

function initializeCart() {
  if (!document.getElementById('cartItems')) return;
  
  loadCartItems();
  initializeCheckoutButtons();
  initializePaymentOptions();
}

function loadCartItems() {
  const cartItemsContainer = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');
  const cartLayout = document.querySelector('.cart-layout');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
      cartLayout.style.display = 'none';
      emptyCart.style.display = 'block';
      return;
  }

  cartLayout.style.display = 'grid';
  emptyCart.style.display = 'none';
  cartItemsContainer.innerHTML = '';

  cart.forEach((product, index) => {
      const cartItem = createCartItemElement(product, index);
      cartItemsContainer.appendChild(cartItem);
  });

  updateCartTotals();
}

function createCartItemElement(product, index) {
  const cartItem = document.createElement('div');
  cartItem.className = 'cart-item';

  cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="cart-item-info">
          <h3 class="cart-item-name">${product.name}</h3>
          <p class="cart-item-price">$${product.price.toFixed(2)}</p>
      </div>
      <div class="cart-item-controls">
          <div class="quantity-controls">
              <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
              <span class="quantity-display">${product.quantity}</span>
              <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
      </div>
  `;

  return cartItem;
}

function increaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity += 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCartItems();
  updateCartCount();
}

function decreaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      loadCartItems();
      updateCartCount();
  }
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCartItems();
  updateCartCount();
}

function updateCartTotals() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  let subtotal = 0;
  cart.forEach(product => {
      subtotal += product.price * product.quantity;
  });

  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');

  if (subtotalElement) {
      subtotalElement.textContent = '$' + subtotal.toFixed(2);
  }
  
  if (totalElement) {
      totalElement.innerHTML = '<strong>$' + subtotal.toFixed(2) + '</strong>';
  }
}

// 
// CHECKOUT
// 

// Payment Options Funksiyasi
function initializePaymentOptions() {
  const cashPayment = document.getElementById('cashPayment');
  const cardPayment = document.getElementById('cardPayment');
  const cardDetails = document.getElementById('cardDetails');
  const paymentMethod = document.getElementById('paymentMethod');

  if (cashPayment && cardPayment) {
      cashPayment.addEventListener('change', function() {
          if (this.checked) {
              cardDetails.style.display = 'none';
              paymentMethod.textContent = 'Cash';
          }
      });

      cardPayment.addEventListener('change', function() {
          if (this.checked) {
              cardDetails.style.display = 'block';
              paymentMethod.textContent = 'Card';
          }
      });
  }

  // Card Number Formatting (4 ta raqamdan keyin bo'sh joy)
  const cardNumberInput = document.getElementById('cardNumber');
  if (cardNumberInput) {
      cardNumberInput.addEventListener('input', function(e) {
          let value = e.target.value.replace(/\s/g, '');
          let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
          e.target.value = formattedValue;
      });
  }

  // Card Expiry Formatting (MM/YY)
  const cardExpiryInput = document.getElementById('cardExpiry');
  if (cardExpiryInput) {
      cardExpiryInput.addEventListener('input', function(e) {
          let value = e.target.value.replace(/\D/g, '');
          if (value.length >= 2) {
              value = value.slice(0, 2) + '/' + value.slice(2, 4);
          }
          e.target.value = value;
      });
  }

  // CVV - faqat raqamlar
  const cardCVVInput = document.getElementById('cardCVV');
  if (cardCVVInput) {
      cardCVVInput.addEventListener('input', function(e) {
          e.target.value = e.target.value.replace(/\D/g, '');
      });
  }
}

function initializeCheckoutButtons() {
  const confirmBtn = document.getElementById('confirmBtn');
  const orderBtn = document.getElementById('orderBtn');

  if (confirmBtn) {
      confirmBtn.addEventListener('click', function() {
          const name = document.getElementById('customerName').value;
          const phone = document.getElementById('customerPhone').value;
          const country = document.getElementById('country').value;
          const city = document.getElementById('city').value;
          const street = document.getElementById('street').value;

          if (!name || !phone || !country || !city || !street) {
              alert('Iltimos, barcha ma\'lumotlarni to\'ldiring');
              return;
          }

          alert('Yetkazib berish ma\'lumotlari tasdiqlandi!');
      });
  }

  if (orderBtn) {
      orderBtn.addEventListener('click', function() {
          const cart = JSON.parse(localStorage.getItem('cart')) || [];

          if (cart.length === 0) {
              alert('Savatingiz bo\'sh');
              return;
          }

          const name = document.getElementById('customerName').value;
          const phone = document.getElementById('customerPhone').value;

          if (!name || !phone) {
              alert('Iltimos, shaxsiy ma\'lumotlarni to\'ldiring');
              return;
          }

          // Payment type tekshirish
          const paymentType = document.querySelector('input[name="payment"]:checked').value;
          
          // Agar card tanlangan bo'lsa, card ma'lumotlarini tekshirish
          if (paymentType === 'card') {
              const cardNumber = document.getElementById('cardNumber').value;
              const cardExpiry = document.getElementById('cardExpiry').value;
              const cardCVV = document.getElementById('cardCVV').value;
              const cardName = document.getElementById('cardName').value;

              if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
                  alert('Iltimos, karta ma\'lumotlarini to\'ldiring');
                  return;
              }

              // Card number uzunligi tekshirish (16-19 raqam + bo'sh joylar)
              if (cardNumber.replace(/\s/g, '').length < 16) {
                  alert('Karta raqami noto\'g\'ri');
                  return;
              }

              // CVV tekshirish
              if (cardCVV.length !== 3) {
                  alert('CVV 3 ta raqamdan iborat bo\'lishi kerak');
                  return;
              }
          }

          const total = document.getElementById('total').textContent;
          const paymentText = paymentType === 'cash' ? 'Naqd pul' : 'Karta';
          
          alert(`Buyurtma muvaffaqiyatli amalga oshirildi!\nJami: ${total}\nTo\'lov turi: ${paymentText}\nXaridingiz uchun rahmat!`);

          localStorage.removeItem('cart');
          window.location.href = 'index.html';
      });
  }
}

// Global funksiyalar
window.goToProduct = goToProduct;
window.filterByCategory = filterByCategory;
window.addToCartFromButton = addToCartFromButton;
window.filterProducts = filterProducts;
window.clearFilters = clearFilters;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeFromCart = removeFromCart;