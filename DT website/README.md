# 🍰 Dulce Testimonio — Repostería Personalizada (Cali, Colombia)
### Haute Patisserie Boutique Website

Sitio web oficial de alta repostería artesanal para **Dulce Testimonio**, fundado por **Isabella y Adriana** en Cali, Colombia.

Diseñado con una síntesis estética de lujo inspirada en:
- **Melt Madrid:** Encuadre cinematográfico hero, tipografía editorial limpia, primeros planos macro de glaseados y alta conversión en CTAs.
- **Social Goods Club:** Ticker cinético con marquesina infinita, Bento Grid asimétrico con soporte de fotografía y reels verticales (9:16).
- **Donutelier London:** Tratamiento de donuts y ramos como joyas de alta pastelería, selector interactivo de sabores en vivo y modal interactivo de "Anatomía & Sabores".

---

## 🎨 Características Implementadas

1. **Personalizador de Color en Vivo (Theme Customizer Drawer):**
   - Botón flotante inferior izquierdo: `🎨 Personalizar Colores`.
   - 4 Paletas preestablecidas de alta gama:
     - **Dulce Mauve & Cream** (Por defecto - Elevación del original).
     - **Melt Espresso & Brioche** (Tonos chocolate fundido, caramelo y crema).
     - **Donutelier Blush & Pistachio** (Verde salvia, rosa empolvado y carbón editorial).
     - **Editorial Monochrome** (Negro mate, alabastro y destellos de oro).
   - Selectores nativos HTML5 de color (`<input type="color">`) para ajuste fino en vivo de variables CSS (`--primary`, `--accent-soft`, `--accent-gold`, etc.).
   - Botón **"Copiar Variables CSS"** con notificación toast emergente.

2. **Soporte Bilingüe Instantáneo (Español / Inglés):**
   - Selector en la barra de navegación: `[ ES | EN ]`.
   - Traduce al instante todos los títulos, textos, botones, testimonios y el cotizador sin recargar la página.

3. **Arquitectura Completa:**
   - **Navbar Glassmorphism:** Monograma "DT", enlaces de navegación suaves, toggle de idioma y botón "Cotiza Ya".
   - **Hero Cinematográfico:** Video continuo / póster de alta definición con marco de lujo de doble borde dorado.
   - **Ticker Infinito:** Animación continua con estrellas doradas (`DONUTS DE DISEÑO ✦ RAMOS DE DONUTS ✦ TIRAMISÚ ITALIANO POR KILOS...`).
   - **Tira de 3 Pilares:**
     - 01 "Donuts..." (Ramos de donuts con papel lila satinado).
     - 02 "...De Diseño..." (Bandejas de desayuno con vino espumoso, taza y rosas).
     - 03 "...Personalizado..." (Cajas florales alargadas con eucalipto y velo de novia).
   - **Menú Interactivo (Donutelier Style):**
     - Pestañas de filtrado: *Todos, Cajas de Donuts, Ramos & Regalos, Tiramisú Italiano, Eventos & Tortas*.
     - **Spotlight 1: Donuts Cloud Box:** Selector interactivo de píldoras de sabor (`Sabor 1`, `Sabor 2`, etc.) con vista previa dinámica en vivo.
     - **Spotlight 2: Tiramisú The Italian Way:** Selector de kilos (1 Kg, 2 Kg, 3+ Kg) y ficha técnica.
     - **Modal de Anatomía & Sabores:** Desglose capa por capa (Masa Base, Glaseados, Toque de Autor, Empaque).
   - **Eventos & Galería Bento Grid:** Cuadrícula editorial que mezcla fotos y reels verticales 9:16 con lightbox emergente.
   - **Testimonios:** Citas elegantes de clientes reales en Cali.
   - **Chef Isabella y Adriana:** Retrato editorial, historia de madre e hija, firmas y pancarta de cita célebre.
   - **Cotizador Inteligente de WhatsApp:** Selección de producto, presentación, sabores en chips, fecha y dedicatoria. Genera un enlace directo a WhatsApp con mensaje prediseñado y emojis.

---

## ⚡ Guía Rápida para Isabella y Adriana (Edición en 2 Minutos)

Todo el contenido clave está concentrado al principio del archivo [`script.js`](file:///c:/Users/rauso/Desktop/Dulce%20Testimonio%20isa/DT%20website/script.js) dentro de `SITE_CONFIG`:

```javascript
const SITE_CONFIG = {
  // 1. Cambia tu número de WhatsApp aquí (con código de país 57 para Colombia):
  whatsappNumber: "573151234567",

  // 2. Cambia tu Instagram:
  instagramHandle: "@dulcetestimonio_",
  instagramUrl: "https://instagram.com/dulcetestimonio_",

  // 3. Cambia o agrega fotos reemplazando los archivos en la carpeta /assets:
  media: {
    heroFallback: "assets/hero_pastry_art.jpg",
    donutBouquet: "assets/donut_bouquet.jpg",
    giftBoxTray: "assets/gift_box_tray.jpg",
    floralDonutBox: "assets/floral_donut_box.jpg",
    donutsCloudBox: "assets/donuts_cloud_box.jpg",
    italianTiramisu: "assets/italian_tiramisu.jpg",
    chefsIsabellaAdriana: "assets/chefs_isabella_adriana.jpg",
    vintageHeartCake: "assets/vintage_heart_cake.jpg",
    donutTowerEvent: "assets/donut_tower_event.jpg",
    reelPipingPastry: "assets/reel_piping_pastry.jpg"
  }
};
```

---

## 🚀 Cómo Publicar Gratis en Internet (100% Gratuito)

Este sitio fue construido usando **HTML5, CSS3 y JavaScript puro**, lo que significa que **no requiere ningún servidor de pago** ni base de datos compleja. Puedes alojarlo de por vida gratis en:

### Opción A: Netlify Drop (La más fácil, 30 segundos)
1. Ve a [app.netlify.com/drop](https://app.netlify.com/drop) (crea una cuenta gratis).
2. Arrastra la carpeta completa `DT website` sobre la pantalla del navegador.
3. ¡Listo! Tu sitio estará activo en internet con SSL (https://) gratuito y puedes conectarle tu propio dominio `.com` o `.com.co`.

### Opción B: GitHub Pages
1. Sube estos archivos a un repositorio en GitHub.
2. Ve a **Settings -> Pages**.
3. Selecciona la rama `main` y guarda. En 1 minuto tendrás tu enlace `https://tuusuario.github.io/dt-website/`.

---

© 2026 Dulce Testimonio — Hecho con amor en Cali, Colombia.
