# Soul Amigurumii 🌸

Sitio web del emprendimiento de crochet Soul Amigurumii.

## Estructura del proyecto

```
soul-nuigurumi/
├── index.html        → estructura HTML (lo que ves)
├── producto.html     → página de detalle de cada producto
├── style.css         → estilos visuales (colores, fuentes, tamaños)
├── script.js         → lógica interactiva (productos, carrito, navegación)
├── assets/
│   ├── img/          → TUS FOTOS (ya hay imágenes de ejemplo con el nombre correcto)
│   └── deco/         → ilustraciones decorativas (margarita, rama de flores, corazón)
└── README.md         → este archivo
```

## 📷 Cómo poner tus fotos (la forma fácil)

Cada foto del diseño ya tiene un archivo de ejemplo en `assets/img/` que dice
"Reemplázame con tu foto". **Guarda tu foto con el mismo nombre (y .jpg) y
reemplaza el archivo.** No hay que tocar código.

| Archivo                       | Dónde aparece                         | Tamaño sugerido |
|-------------------------------|---------------------------------------|-----------------|
| `hero.jpg`                    | Foto grande del inicio (polaroid)     | 800×1000 vertical |
| `coleccion-amigurumis.jpg`    | Tarjeta de colección Amigurumis       | 600×800 vertical |
| `coleccion-ramos.jpg`         | Tarjeta de colección Ramos            | 600×800 vertical |
| `coleccion-aretes.jpg`        | Tarjeta de colección Aretes           | 600×800 vertical |
| `coleccion-accesorios.jpg`    | Tarjeta de colección Accesorios       | 600×800 vertical |
| `sobre-mi.jpg`                | Tu retrato redondo en el inicio       | 700×700 cuadrada |
| `polaroid-1.jpg`, `polaroid-2.jpg` | Las dos fotitos junto a "Sobre mí" | 500×560 |
| `foto-taller.jpg`             | Foto en la sección Nosotros           | 800×900 vertical |
| `personalizado-1/2/3.jpg`     | Galería de Personalizados             | 600×500 horizontal |

💡 Si tu foto es `.png` o `.jpeg`, conviértela a `.jpg` (o cambia la extensión
en el `src` del `index.html`). Optimízalas en squoosh.app antes de subirlas.

### Fotos de productos
En `script.js`, en cada producto, cambia el emoji por la ruta de la foto:

```js
img: 'assets/img/osito.jpg',
images: ['assets/img/osito.jpg', 'assets/img/osito-2.jpg'],
```

### "Lo más amado" (inicio)
Usa las fotos de los productos que elijas en `script.js`, en la lista
`featuredIds` (pon los `id` de los productos).

## 🎨 Cómo editar

- **Colores** → `style.css`, bloque `:root` (arriba del todo)
- **Productos** → `script.js`, busca `const products`
- **Textos** → `index.html`, busca la sección que quieras
- **Logo** → está hecho con texto en el menú (`<a class="logo">`); si tienes
  un logo horizontal en imagen, hay un comentario en `index.html` que explica cómo usarlo
- **Nueva categoría** → agrega la categoría en `script.js`, un botón en `.cat-tabs`
  y (opcional) una tarjeta `<a class="coleccion">` copiando una existente

## Cómo ver localmente

Instala la extensión **Live Server** en VS Code y haz clic derecho
sobre `index.html` → "Open with Live Server"
