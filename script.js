/* ================================================================
   SOUL Amigurumii — script.js
   Aquí vive toda la lógica interactiva de la página
   ================================================================

   📖 CÓMO LEER ESTE ARCHIVO:
   - Las líneas que empiezan con // son comentarios de una sola línea
   - Los bloques / * ... * / son comentarios de varias líneas
   - const = variable que no cambia
   - let   = variable que puede cambiar
   - function = bloque de código que hace algo cuando lo llamas

   ================================================================ */


/* ================================================================
   🛍️ PRODUCTOS — Edita aquí para agregar, quitar o modificar
   ================================================================

   La estructura es: un objeto con 4 categorías.
   Cada categoría tiene una lista [ ] de productos.
   Cada producto es un objeto { } con estas propiedades:

     name  → nombre visible en la tarjeta
     price → precio (texto libre, escribe lo que quieras)
     desc  → descripción corta (máx ~120 caracteres recomendado)
     img   → emoji O ruta de una foto (ver nota abajo)
     images→ lista de fotos para la página del producto (la primera es la principal)
     bg    → color de respaldo detrás de la imagen, elige uno de:
               'prod-img-rose'  → rosa a durazno
               'prod-img-lila'  → lila a rosa
               'prod-img-peach' → durazno a mantequilla
     badge → texto del badge pequeño, o null si no quieres ninguno
             Ejemplos: 'Nuevo', 'Más vendido', 'Edición lim.', 'Popular'

   🖼️ PARA PONER FOTO REAL en lugar del emoji (¡ahora es más fácil!):
   1. Guarda tu foto en assets/img/   (ej: assets/img/osito.jpg)
   2. Cambia img e images escribiendo solo la ruta:
        img: 'assets/img/osito.jpg',
        images: ['assets/img/osito.jpg', 'assets/img/osito-2.jpg'],
   (Si prefieres, el formato anterior con <img ...> también sigue funcionando)

   ➕ PARA AGREGAR UN PRODUCTO NUEVO:
   Copia uno de los bloques { ... } y pégalo dentro de la categoría,
   separado por una coma del anterior. Edita los valores.

   ➕ PARA AGREGAR UNA CATEGORÍA NUEVA:
   1. Agrega aquí: nueva_cat: [ { ...producto... } ]
   2. En index.html agrega un botón en .cat-tabs:
      <button class="tab tab-rose" onclick="filterCat('nueva_cat', this)">🌟 Mi categoría</button>

   ================================================================ */

const products = {

  // ── AMIGURUMIS ──────────────────────────────────────────────
  amigurumis: [
    {
      id: 'ami-1',
      name: 'Perrito Pincher',
      price: '$45.000',
      desc: 'Un perrito tejido a mano. Suave, tierno y lleno de personalidad propia.',
      img: 'assets/img/perrito-pincher.jpg',
      images: ['assets/img/perrito-pincher.jpg', '🌸', '🧸'],
      video: null,
      bg: 'prod-img-rose',
      badge: 'Más vendido'
    },
    {
      id: 'ami-2',
      name: 'Chuy cerdito',
      price: '$42.000',
      desc: 'Cerdito en tonos rosa y cafe con sus orejitas larguitas. Cada una es única, no existen dos iguales.',
      img: 'assets/img/polaroid-2.jpg',
      images: ['assets/img/polaroid-2.jpg', '🌙', '✨'],
      video: null,
      bg: 'prod-img-lila',
      badge: null
    },
    {
      id: 'ami-3',
      name: 'Bojack',
      price: '$40.000',
      desc: 'El caballo mas triste. Tejido en algodón suave con ojos de seguridad y bigotitos bordados.',
      img: 'assets/img/coleccion-amigurumis.jpg',
      images: ['assets/img/coleccion-amigurumis.jpg', '☁️', '💤'],
      video: null,
      bg: 'prod-img-peach',
      badge: 'Nuevo'
    },
    {
      id: 'ami-4',
      name: 'Ramo Pascal',
      price: '$32.000',
      desc: 'Mascota de rapunzel. Perfecto para regalar.',
      img: 'assets/img/ramo-pascal.jpg',
      images: ['assets/img/ramo-pascal.jpg', '❄️', '🧊'],
      video: null,
      bg: 'prod-img-lila',
      badge: null
    }
  ],

  // ── RAMOS TEJIDOS ───────────────────────────────────────────
  ramos: [
    {
      id: 'ram-1',
      name: 'Ramo Primavera',
      price: '$65.000',
      desc: 'flores tejidas en colores pastel. No se marchitan nunca y huelen... a amor.',
      img: 'assets/img/ramo-lila.jpg',
      images: ['assets/img/ramo-lila.jpg', '🌷', '🌿'],
      video: null,
      bg: 'prod-img-rose',
      badge: 'Edición lim.'
    },
    {
      id: 'ram-2',
      name: 'Bouquet Rosa Dust',
      price: '$58.000',
      desc: 'Ramo monocromático en tono rosa empolvado. Eterno y delicado, como un recuerdo que no se va.',
      img: 'assets/img/ramo-girasoles.jpg',
      images: ['assets/img/ramo-girasoles.jpg', '🎀', '💌'],
      video: null,
      bg: 'prod-img-peach',
      badge: null
    },
    {
      id: 'ram-3',
      name: 'Mini Ramo',
      price: '$38.000',
      desc: 'Versión pequeña, grande en ternura. Ideal para centros de mesa o detalles de graduación.',
      img: 'assets/img/hero.jpg',
      images: ['assets/img/hero.jpg', '✨', '🍑'],
      video: null,
      bg: 'prod-img-lila',
      badge: null
    }
  ],

  // ── ARETES ──────────────────────────────────────────────────
  aretes: [
    {
      id: 'are-1',
      name: 'Aretes Margarita',
      price: '$16.000',
      desc: 'Margaritas tejidas en hilo de algodón con gancho hipoalergénico. Ligeros como pétalos.',
      img: 'assets/img/Aretesmargarita.jpg',
      images: ['assets/img/Aretesmargarita.jpg', '🌼', '✨'],
      video: null,
      bg: 'prod-img-rose',
      badge: null
    },
    {
      id: 'are-2',
      name: 'Aretes Corazón',
      price: '$15.000',
      desc: 'Corazones pequeños con textura tejida. Cada par es ligeramente distinto: así es el amor hecho a mano.',
      img: 'assets/img/coleccion-aretes.jpg',
      images: ['assets/img/coleccion-aretes.jpg', '💖', '✨'],
      video: null,
      bg: 'prod-img-lila',
      badge: 'Popular'
    },
    {
      id: 'are-3',
      name: 'Aretes Luna & Estrella',
      price: '$20.000',
      desc: 'Para las que llevan el cosmos en los oídos. Tejidos en hilo metálico suave dorado y crema.',
      img: 'assets/img/polaroid-1.jpg',
      images: ['assets/img/polaroid-1.jpg', '⭐', '✨'],
      video: null,
      bg: 'prod-img-peach',
      badge: null
    }
  ],

  // ── ACCESORIOS ──────────────────────────────────────────────
  accesorios: [
    {
      id: 'acc-1',
      name: 'Llavero girasol',
      price: '$12.000',
      desc: 'Tejidos en forma de nube esponjosa. Perfectos para el cabello o la solapa del abrigo.',
      img: 'assets/img/coleccion-accesorios.jpg',
      images: ['assets/img/coleccion-accesorios.jpg', '🌈', '✨'],
      video: null,
      bg: 'prod-img-lila',
      badge: null
    },
    {
      id: 'acc-2',
      name: 'Llavero rosa',
      price: '$16.000',
      desc: 'Tu rosa de bolsillo favorito. Pequeño, suave y listo para acompañarte a donde vayas.',
      img: 'assets/img/rosa-llavero.jpg',
      images: ['assets/img/rosa-llavero.jpg', '🔑', '🎀'],
      video: null,
      bg: 'prod-img-rose',
      badge: 'Nuevo'
    },
    {
      id: 'acc-3',
      name: 'LLavero tulipanes',
      price: '$10.000',
      desc: 'Para las que leen con flores. Florcita tejida que guarda tu lugar y te hace sonreír cada vez.',
      img: 'assets/img/tulipan-llavero.jpg',
      images: ['assets/img/tulipan-llavero.jpg', '📖', '✨'],
      video: null,
      bg: 'prod-img-peach',
      badge: null
    }
  ]

}; // fin de products


/* ================================================================
   ⭐ LO MÁS AMADO — qué productos salen en el inicio
   Escribe aquí los id de los productos que quieres destacar
   (los id están en la lista de arriba: 'ami-1', 'ram-1', etc.)
   Funciona bien con 4 productos.
   ================================================================ */
const featuredIds = ['ami-1', 'ram-1', 'are-1', 'ami-3'];


/* ----------------------------------------------------------------
   mediaHTML(valor, alt)
   Convierte el valor de img en lo que se ve en pantalla:
     · una ruta  ('assets/img/osito.jpg') → <img>
     · HTML      ('<img ...>')            → se deja igual
     · un emoji  ('🐻')                    → <span>🐻</span>
   Si la foto no existe, se oculta y se ve el color de fondo.
   ---------------------------------------------------------------- */
function mediaHTML(value, alt = '') {
  if (!value) return '';
  const v = String(value).trim();
  if (v.startsWith('<')) return v;
  if (/\.(jpe?g|png|webp|gif|avif|svg)(\?.*)?$/i.test(v)) {
    const safeAlt = alt.replace(/"/g, '&quot;');
    return `<img src="${v}" alt="${safeAlt}" loading="lazy" onerror="this.style.display='none'">`;
  }
  return `<span>${v}</span>`;
}


/* ================================================================
   NAVEGACIÓN — Variables y funciones de control de secciones
   ================================================================ */

// Lista de todas las secciones de la página
const sections = ['home', 'productos', 'nosotros', 'promos', 'custom', 'contacto'];

// Categoría actualmente seleccionada en productos
let currentCat = 'amigurumis';

// Estado del carrito de compras (carga de localStorage si existe)
let cart = JSON.parse(localStorage.getItem('soul_cart')) || [];


/* ----------------------------------------------------------------
   showSection(id)
   Muestra la sección con ese id y oculta todas las demás
   Se llama desde los onclick del menú y los botones
   ---------------------------------------------------------------- */
function showSection(id) {
  // Recorre todas las secciones
  sections.forEach(s => {
    const el = document.getElementById(s);
    if (el) {
      // Si el id coincide → quita la clase hidden (muestra)
      // Si no coincide → agrega la clase hidden (oculta)
      el.classList.toggle('section-hidden', s !== id);
    }
  });

  // Si navegamos a productos, dibuja las tarjetas de la categoría actual
  if (id === 'productos') {
    renderProducts(currentCat);
  }

  // Marca en el menú la sección actual (subrayado verde)
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === id);
  });

  // Vuelve al tope de la página suavemente
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Cierra el menú hamburguesa en móvil
  document.getElementById('nav-links').classList.remove('open');
}

/* ----------------------------------------------------------------
   goToCategory(cat)
   Abre Productos ya filtrado en una categoría
   (lo usan las tarjetas de "Colecciones" del inicio)
   ---------------------------------------------------------------- */
function goToCategory(cat) {
  currentCat = cat;
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
  showSection('productos');
}

/* ----------------------------------------------------------------
   openProduct(id)
   Redirige a la página del producto específico
   ---------------------------------------------------------------- */
function openProduct(id) {
  window.location.href = 'producto.html?id=' + id;
}


/* ----------------------------------------------------------------
   renderProducts(cat)
   Dibuja las tarjetas de productos de la categoría dada
   Lee los datos del objeto 'products' de arriba
   ---------------------------------------------------------------- */
function renderProducts(cat) {
  const grid = document.getElementById('prod-grid');
  grid.innerHTML = ''; // limpia las tarjetas anteriores

  // Recorre cada producto de la categoría
  products[cat].forEach((p, index) => {

    // Si el producto tiene badge, crea el HTML del badge; si no, string vacío
    const badge = p.badge
      ? `<span class="badge">${p.badge}</span>`
      : '';

    // Foto (ruta), HTML o emoji → lo que se ve en la tarjeta
    const imgHTML = mediaHTML(p.img, p.name);

    grid.innerHTML += `
      <div class="prod-card" onclick="openProduct('${p.id}')" style="cursor: pointer;">
        <div class="prod-img ${p.bg}">
          ${badge}
          ${imgHTML}
        </div>
        <div class="prod-body">
          <h3>${p.name}</h3>
          <div class="price">${p.price}</div>
          <p>${p.desc}</p>
          <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${index}, '${cat}')">
            Agregar al carrito 🛒
          </button>
        </div>
      </div>`;
  });
}


/* ----------------------------------------------------------------
   renderFeatured()
   Dibuja "Lo más amado" en el inicio con los productos de featuredIds
   ---------------------------------------------------------------- */
function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;

  // Junta todos los productos en una sola lista para buscarlos por id
  const all = Object.values(products).flat();

  grid.innerHTML = featuredIds
    .map(id => all.find(p => p.id === id))
    .filter(Boolean)
    .map(p => `
      <div class="featured-item ${p.bg}" onclick="openProduct('${p.id}')" title="${p.name}">
        ${mediaHTML(p.img, p.name)}
        <div class="featured-caption">${p.name}<span>${p.price}</span></div>
      </div>`)
    .join('');
}


/* ----------------------------------------------------------------
   filterCat(cat, el)
   Cambia la categoría de productos al hacer clic en un tab
   cat = nombre de la categoría ('amigurumis', 'ramos', etc.)
   el  = el botón que se hizo clic (para marcar como activo)
   ---------------------------------------------------------------- */
function filterCat(cat, el) {
  currentCat = cat; // guarda la categoría actual

  // Quita la clase 'active' de todos los tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  // Agrega 'active' solo al tab clickeado
  el.classList.add('active');

  // Redibuja los productos de la nueva categoría
  renderProducts(cat);
}


/* ----------------------------------------------------------------
   handleForm(e)
   Se llama cuando el usuario envía el formulario de contacto
   Abre WhatsApp con el mensaje compuesto desde los campos
   ---------------------------------------------------------------- */
function handleForm(e) {
  e.preventDefault(); // evita que la página se recargue

  // Lee los valores de los campos del formulario
  const name = document.getElementById('f-name').value;
  const subject = document.getElementById('f-subject').value;
  const msg = document.getElementById('f-msg').value;

  // Construye el mensaje de WhatsApp
  const text = `Hola Soul Amigurumii! Soy ${name}. ${subject ? 'Asunto: ' + subject + '. ' : ''}${msg}`;

  // Abre WhatsApp en una nueva pestaña con el mensaje pre-escrito
  // encodeURIComponent convierte el texto para que funcione en una URL
  window.open(`https://wa.me/573009749120?text=${encodeURIComponent(text)}`, '_blank');
  // 📞 Reemplaza TU_NUMERO igual que arriba
}


/* ----------------------------------------------------------------
   toggleMenu()
   Abre/cierra el menú hamburguesa en celular
   ---------------------------------------------------------------- */
function toggleMenu() {
  // .toggle agrega la clase si no la tiene, la quita si ya la tiene
  document.getElementById('nav-links').classList.toggle('open');
}


/* ================================================================
   INICIALIZACIÓN — Se ejecuta cuando carga la página
   ================================================================ */
if (document.getElementById('prod-grid')) {
  renderProducts('amigurumis'); // muestra amigurumis por defecto
  renderFeatured();             // "Lo más amado" del inicio

  // Si llegas desde otra página con un enlace tipo index.html#productos,
  // abrimos esa sección directamente
  const hashId = window.location.hash.replace('#', '');
  if (sections.includes(hashId) && hashId !== 'home') {
    showSection(hashId);
  } else {
    document.querySelector('.nav-links a[data-section="home"]')?.classList.add('active');
  }
}
renderCart(); // inicializa el contador del carrito


/* ================================================================
   CARRITO DE COMPRAS — Lógica principal
   ================================================================ */

function saveCart() {
  localStorage.setItem('soul_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
    cartCountEl.innerText = count;
  }
  
  // Actualizar barra flotante móvil si existe
  const floatBar = document.getElementById('floating-cart-bar');
  if (floatBar) {
    if (count > 0) {
      floatBar.classList.add('show');
      const floatTotal = document.getElementById('floating-cart-total');
      if (floatTotal) {
        floatTotal.innerText = `${count} productos | ${formatPrice(calculateTotal())}`;
      }
    } else {
      floatBar.classList.remove('show');
    }
  }
}

function parsePrice(priceStr) {
  // Convierte "$45.000" a 45000
  return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
}

function addToCart(index, cat) {
  const product = products[cat][index];
  const numPrice = parsePrice(product.price);

  // Buscar si ya existe en el carrito con las mismas opciones base
  const existingIndex = cart.findIndex(item => item.name === product.name);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    // Configurar opciones por defecto según categoría
    let options = {};
    if (cat === 'aretes' || cat === 'accesorios') {
      options.argolla = 'plateada'; // Valor por defecto
    }

    cart.push({
      name: product.name,
      price: numPrice,
      priceStr: product.price,
      quantity: 1,
      category: cat,
      options: options,
      img: product.img,
      bg: product.bg
    });
  }

  saveCart();
  showToast('Producto agregado 💖');

  // Si el modal está abierto, lo actualizamos
  if (document.getElementById('cart-modal').classList.contains('open')) {
    renderCart();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function updateQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) {
    removeFromCart(index);
  } else {
    saveCart();
    renderCart();
  }
}

function updateProductOption(index, optionName, value) {
  cart[index].options[optionName] = value;
  saveCart();
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  const overlay = document.getElementById('cart-overlay');

  if (modal.classList.contains('open')) {
    modal.classList.remove('open');
    overlay.classList.remove('show');
  } else {
    renderCart();
    modal.classList.add('open');
    overlay.classList.add('show');
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function calculateTotal() {
  let total = 0;

  // Sumar productos
  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  // Sumar extras
  const premiumChecked = document.getElementById('cart-opt-premium')?.checked;
  if (premiumChecked) total += 5000;

  return total;
}

function formatPrice(num) {
  return '$' + num.toLocaleString('es-CO');
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty-msg">Tu carrito está vacío ☁️</div>';
    totalEl.innerText = '$0';
    return;
  }

  let html = '';
  cart.forEach((item, index) => {

    // Select de opciones para aretes/accesorios
    let optionsHtml = '';
    if (item.category === 'aretes' || item.category === 'accesorios') {
      const isPlateada = item.options.argolla === 'plateada' ? 'selected' : '';
      const isDorada = item.options.argolla === 'dorada' ? 'selected' : '';

      optionsHtml = `
        <div class="product-options">
          <label>Tipo de argolla:</label>
          <select onchange="updateProductOption(${index}, 'argolla', this.value)">
            <option value="plateada" ${isPlateada}>Plateada</option>
            <option value="dorada" ${isDorada}>Dorada</option>
          </select>
        </div>
      `;
    }

    // Foto (ruta), HTML o emoji
    const imgContent = mediaHTML(item.img, item.name);

    html += `
      <div class="cart-item">
        <button class="remove-btn" onclick="removeFromCart(${index})">&times;</button>
        <div class="cart-item-img ${item.bg}">
          ${imgContent}
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
          
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
          </div>
          
          ${optionsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  totalEl.innerText = formatPrice(calculateTotal());
  updateCartCount();
}

function generateWhatsAppMessage() {
  if (cart.length === 0) {
    showToast('Tu carrito está vacío 🛒');
    return;
  }

  let text = 'Hola Soul Amigurumii 💖\nQuiero hacer el siguiente pedido:\n\n🛍️ *Productos:*\n';

  cart.forEach(item => {
    text += `- ${item.name} x ${item.quantity} → ${formatPrice(item.price * item.quantity)}\n`;
    if (item.options && item.options.argolla) {
      text += `  Detalles: Argolla ${item.options.argolla}\n`;
    }
  });

  text += '\n🎁 *Opciones adicionales:*\n';
  const premium = document.getElementById('cart-opt-premium').checked;
  const card = document.getElementById('cart-opt-card').checked;

  let hasOptions = false;
  if (premium) { text += `- Empaque premium personalizado\n`; hasOptions = true; }
  if (card) { text += `- Tarjeta personalizada\n`; hasOptions = true; }

  if (!hasOptions) {
    text += `- Ninguna\n`;
  }

  const msg = document.getElementById('cart-msg').value.trim();
  if (msg) {
    text += `\n📝 *Mensaje adicional:*\n${msg}\n`;
  }

  text += `\n💰 *Total estimado:* ${formatPrice(calculateTotal())}`;

  // 📞 IMPORTANTE: Reemplaza TU_NUMERO por tu número de WhatsApp real
  const phone = '573009749120';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
}
