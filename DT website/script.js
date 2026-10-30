/**
 * ============================================================================
 * DULCE TESTIMONIO — REPOSTERÍA PERSONALIZADA (CALI, COLOMBIA)
 * Script Principal & Configuración Centralizada
 * ============================================================================
 * 
 * 💡 GUÍA PARA ISABELLA Y ADRIANA:
 * Puedes modificar tu número de WhatsApp, Instagram, fotos y sabores
 * directamente en el objeto SITE_CONFIG a continuación en solo 2 minutos.
 */

const SITE_CONFIG = {
  // Información de Contacto
  shopName: "Dulce Testimonio — Repostería Personalizada",
  city: "Cali, Colombia",
  whatsappNumber: "+57 305 2940852", // Tu número de WhatsApp con código de país (57 para Colombia)
  instagramHandle: "@dulcetestimonio_",
  instagramUrl: "https://instagram.com/dulcetestimonio_",

  // Rutas de Imágenes y Medios
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
  },

  // Sabores Interactivos de la Cloud Box
  cloudFlavors: {
    1: {
      nameEs: "Glaseado Clásico de Vainilla Bourbon",
      nameEn: "Classic Bourbon Vanilla Glaze",
      descEs: "Baño sedoso y translúcido con vainilla pura de Madagascar y un toque sutil de azúcar glass crocante.",
      descEn: "Silky translucent glaze infused with pure Madagascar vanilla and a delicate crunch of confectioner's sugar."
    },
    2: {
      nameEs: "Chocolate Belga 70% & Ganache",
      nameEn: "70% Belgian Dark Chocolate Ganache",
      descEs: "Intenso chocolate oscuro aterciopelado con escamas de sal marina y lluvia de avellanas tostadas.",
      descEn: "Rich velvety dark chocolate ganache topped with sea salt flakes and roasted hazelnut praline."
    },
    3: {
      nameEs: "Frutos Rojos Silvestres & Pistacho",
      nameEn: "Wild Red Berries & Crushed Pistachio",
      descEs: "Glaseado ácido de frambuesas y moras frescas con pistachos sicilianos picados finamente.",
      descEn: "Zesty fresh raspberry and blackberry reduction finished with finely crushed Sicilian pistachios."
    },
    4: {
      nameEs: "Edición Especial Dulce Amor ❤️",
      nameEn: "Sweet Love Special Edition ❤️",
      descEs: "Crema diplomática de dulce de leche artesanal, corazón de fresa y lazo de pastillaje comestible.",
      descEn: "Artisanal dulce de leche diplomat cream, fresh strawberry heart, and edible handcrafted sugar bow."
    }
  },

  // Fichas Técnicas para la "Anatomía & Sabores" (Donutelier Style)
  anatomyData: {
    cloud_box: {
      titleEs: "Donuts Cloud Box (12 Unidades)",
      titleEn: "Donuts Cloud Box (12 Pieces)",
      categoryEs: "Cajas de Colección",
      categoryEn: "Signature Collection Boxes",
      img: "assets/donuts_cloud_box.jpg",
      snippetEs: "Nuestra creación icónica: 12 donuts en masa brioche ultra ligera decoradas con moños artesanales y capacillos de pastelería fina.",
      snippetEn: "Our iconic creation: 12 artisanal ultra-light brioche donuts decorated with handcrafted bow-ties in fluted liners.",
      layers: [
        { labelEs: "Masa Base", labelEn: "Base Dough", valEs: "Brioche francés fermentado durante 24h para máxima ligereza tipo nube.", valEn: "French brioche slow-fermented for 24h for ultimate cloud-like softness." },
        { labelEs: "Glaseados", labelEn: "Glazes", valEs: "4 variedades a elección (Chocolate Belga, Frutos Rojos, Vainilla, Caramelo).", valEn: "4 customizable flavors (Belgian Chocolate, Wild Berries, Vanilla, Caramel)." },
        { labelEs: "Toque de Autor", labelEn: "Signature Detail", valEs: "Moños bicolor de azúcar hechos a mano y toques de oro de 24k comestible.", valEn: "Handcrafted two-tone sugar bow-ties and delicate 24k edible gold dust." },
        { labelEs: "Empaque", labelEn: "Packaging", valEs: "Caja rígida blanca con estampado dorado y cinta de terciopelo.", valEn: "Rigid luxury white box with gold hot-stamping and velvet ribbon." }
      ]
    },
    tiramisu: {
      titleEs: "Tiramisú Tradizionale: The Italian Way",
      titleEn: "Traditional Tiramisù: The Italian Way",
      categoryEs: "Postre Italiano por Kilos",
      categoryEn: "Italian Dessert by the Kilo",
      img: "assets/italian_tiramisu.jpg",
      snippetEs: "Elaborado exactamente como en Italia: crema sedosa de mascarpone fresco, café moka cargado y cacao puro de origen.",
      snippetEn: "Crafted strictly the authentic Italian way: velvety fresh mascarpone cream, stovetop moka espresso, and Valrhona cocoa.",
      layers: [
        { labelEs: "Crema", labelEn: "Cream", valEs: "Mascarpone italiano auténtico batido con yemas pasteurizadas a punto de cinta.", valEn: "Authentic Italian mascarpone gently folded with pasteurized ribbon-stage egg yolks." },
        { labelEs: "Bizcocho", labelEn: "Biscuits", valEs: "Savoiardi italianos sumergidos al segundo en café moka recién colado.", valEn: "Italian Savoiardi ladyfingers flash-dipped in freshly brewed stovetop moka espresso." },
        { labelEs: "Topping", labelEn: "Topping", valEs: "Generosa capa de cacao amargo Valrhona 100% puro en polvo.", valEn: "Generous dusting of 100% pure bitter Valrhona cocoa powder." },
        { labelEs: "Presentación", labelEn: "Format", valEs: "Venta exclusiva por kilos (1 Kg, 2 Kg o bandejas para recepciones).", valEn: "Sold exclusively by the kilo (1 Kg, 2 Kg, or banquet-style glass trays)." }
      ]
    },
    ramo_lamour: {
      titleEs: "Ramo de Donuts 'L'Amour'",
      titleEn: "Donut Bouquet 'L'Amour'",
      categoryEs: "Ramos & Regalos",
      categoryEn: "Bouquets & Gifts",
      img: "assets/donut_bouquet.jpg",
      snippetEs: "Un ramo que sustituye las flores tradicionales por 7 donuts gourmet perfumados y envueltos en papel satinado lila.",
      snippetEn: "A poetic bouquet replacing traditional flowers with 7 gourmet glazed donuts wrapped in dusty mauve paper.",
      layers: [
        { labelEs: "Donuts", labelEn: "Donuts", valEs: "7 unidades sobre varas de bambú reforzadas.", valEn: "7 artisan donuts mounted on food-grade reinforced skewers." },
        { labelEs: "Follaje", labelEn: "Florals", valEs: "Gypsophila fresca (baby's breath) y hojas de eucalipto aromático.", valEn: "Fresh natural gypsophila (baby's breath) and aromatic eucalyptus sprigs." },
        { labelEs: "Envoltorio", labelEn: "Wrapping", valEs: "Papel coreano impermeable lila/malva con lazo de raso.", valEn: "Waterproof Korean luxury mauve wrapping with custom satin ribbon." }
      ]
    },
    bandeja_desayuno: {
      titleEs: "Bandeja Desayuno 'Dulce Amor'",
      titleEn: "Breakfast Tray 'Dulce Amor'",
      categoryEs: "Regalos Especiales",
      categoryEn: "Special Occasion Gifts",
      img: "assets/gift_box_tray.jpg",
      snippetEs: "El despertar más memorable: bandeja artesanal de madera, mini botella de espumoso, taza cerámica, donuts y flores frescas.",
      snippetEn: "The most memorable morning surprise: handcrafted solid wood tray, mini sparkling wine, ceramic mug, donuts, and roses.",
      layers: [
        { labelEs: "Contenido", labelEn: "Content", valEs: "5 donuts gourmet + mini espumoso + taza artesanal de gres.", valEn: "5 gourmet donuts + mini sparkling wine + handcrafted stoneware mug." },
        { labelEs: "Flores", labelEn: "Flowers", valEs: "Ramillete de rosas inglesas pastel y eucalipto.", valEn: "Fresh pastel English roses posy with eucalyptus." },
        { labelEs: "Mensaje", labelEn: "Dedication", valEs: "Tarjeta caligrafiada a mano con mensaje personalizado.", valEn: "Hand-lettered card with your custom anniversary or love note." }
      ]
    },
    caja_floral: {
      titleEs: "Caja Floral Alargada con Eucalipto",
      titleEn: "Elongated Floral Donut Box with Eucalyptus",
      categoryEs: "Cajas de Donuts",
      categoryEn: "Artisanal Donut Boxes",
      img: "assets/floral_donut_box.jpg",
      snippetEs: "Diseño horizontal inspirado en joyerías de la Place Vendôme de París, combinando donuts pastel con botánicos naturales.",
      snippetEn: "Horizontal luxury box inspired by Parisian high-jewelry houses, blending pastel donuts with fresh botanical greenery.",
      layers: [
        { labelEs: "Presentación", labelEn: "Format", valEs: "10 donuts dispuestos en fila con separadores individuales.", valEn: "10 artisan donuts in a single row with individual fluted dividers." },
        { labelEs: "Botánicos", labelEn: "Botanicals", valEs: "Ramas de eucalipto baby blue y ramilletes de velo de novia.", valEn: "Baby blue eucalyptus sprigs and delicate baby's breath blossoms." }
      ]
    },
    vintage_cake: {
      titleEs: "Torta Vintage Heart Lambeth",
      titleEn: "Vintage Lambeth Heart Cake",
      categoryEs: "Tortas de Autor",
      categoryEn: "Signature Designer Cakes",
      img: "assets/vintage_heart_cake.jpg",
      snippetEs: "Inspirada en el método de decoración Lambeth del siglo XIX: múltiples volantes superpuestos de buttercream y cerezas al marrasquino.",
      snippetEn: "Inspired by the 19th-century Lambeth piping technique: intricate multi-tiered buttercream frills and maraschino cherries.",
      layers: [
        { labelEs: "Bizcocho", labelEn: "Sponge", valEs: "Vainilla Bourbon o Chocolate húmedo con almíbar de licor suave.", valEn: "Bourbon Vanilla or Moist Belgian Chocolate soaked in sweet liqueur." },
        { labelEs: "Decoración", labelEn: "Piping", valEs: "Guirnaldas victorianas, perlas comestibles y cerezas al marrasquino.", valEn: "Victorian garlands, edible sugar pearls, and glossy maraschino cherries." }
      ]
    },
    donut_tower: {
      titleEs: "Torre Monumental de Donuts para Eventos",
      titleEn: "Monumental Donut Event Tower",
      categoryEs: "Eventos & Mesas de Dulces",
      categoryEn: "Events & Dessert Tables",
      img: "assets/donut_tower_event.jpg",
      snippetEs: "Estructura piramidal de 4 a 7 niveles que se convierte en el centro de atención de cualquier boda, quinceañera o fiesta en Cali.",
      snippetEn: "A 4-to-7 tier show-stopping pyramid tower that acts as the grand centerpiece for weddings, birthdays, and celebrations in Cali.",
      layers: [
        { labelEs: "Capacidad", labelEn: "Capacity", valEs: "Desde 40 hasta 120 donuts personalizadas por paleta del evento.", valEn: "From 40 to 120 custom-glazed donuts matched to your event color scheme." },
        { labelEs: "Complementos", labelEn: "Add-ons", valEs: "Macarons franceses, flores frescas del montaje y topper en acrílico dorado.", valEn: "French macarons, fresh floral integrations, and custom golden acrylic topper." }
      ]
    },
    petite_box: {
      titleEs: "Petite Box x6 Artesanal",
      titleEn: "Petite Box x6 Artisanal",
      categoryEs: "Cajas de Donuts",
      categoryEn: "Donut Boxes",
      img: "assets/hero_pastry_art.jpg",
      snippetEs: "La muestra ideal para consentirte o enviar un detalle cariñoso: 6 donuts con coberturas exclusivas.",
      snippetEn: "The perfect sampler to pamper someone special or enjoy with coffee: 6 gourmet glazed donuts.",
      layers: [
        { labelEs: "Contenido", labelEn: "Content", valEs: "6 donuts con coberturas a elección y toques dorados.", valEn: "6 donuts with your choice of glazes and delicate gold details." }
      ]
    }
  }
};

/* ============================================================================
   2. BILINGUAL ENGINE (SPANISH / ENGLISH DICTIONARIES)
   ============================================================================ */
let currentLanguage = "es";

const I18N = {
  es: {
    "nav.home": "Inicio",
    "nav.menu": "Menú",
    "nav.events": "Eventos",
    "nav.chefs": "Chef (Isabella & Adriana)",
    "nav.contact": "Contacto",
    "nav.city": "Repostería • Cali",
    "nav.cta": "Cotiza Ya",

    "hero.subtitle": "Repostería Personalizada • Cali, Colombia",
    "hero.description": "El amor incondicional de una madre y la visión innovadora de una hija se funden en creaciones que transforman cada momento en una experiencia sensorial inolvidable.",
    "hero.ctaPrimary": "Cotiza Ya",
    "hero.ctaSecondary": "Ver Menú",
    "hero.stat1": "Hecho a Mano",
    "hero.stat2": "Valle del Cauca",
    "hero.stat3": "Diseño de Autor",

    "pillars.eyebrow": "Nuestra Esencia",
    "pillars.title": "El Arte de Regalar Dulzura",
    "pillars.subtitle": "Tres expresiones de nuestra pasión pastelera creadas para sorprender los sentidos en cada detalle.",
    "pillars.p1Step": "Pilar 01",
    "pillars.p1Title": "Donuts...",
    "pillars.p1Desc": "Ramos de donuts artesanales presentados como flores de alta costura, envueltos en papel satinado lila y detalles florales con gypsophila.",
    "pillars.p2Step": "Pilar 02",
    "pillars.p2Title": "...De Diseño...",
    "pillars.p2Desc": "Cajas de regalo y bandejas de desayuno con maridaje de vino espumoso, tazas de cerámica artesanal y flores frescas ('I Love Mom' & ocasiones especiales).",
    "pillars.p3Step": "Pilar 03",
    "pillars.p3Title": "...Personalizado",
    "pillars.p3Desc": "Cajas alargadas estilo floristería parisina con baby's breath (gypsophila) y ramas de eucalipto para aniversarios, bodas y regalos inolvidables.",
    "pillars.explore": "Explorar &rarr;",

    "menu.eyebrow": "Haute Patisserie",
    "menu.title": "Nuestros Donuts & Postres",
    "menu.subtitle": "Nacidos del amor de una madre y la innovación de una hija, perfectos para traer dulzura a tu vida... ¡pero cuidado, causan adicción!",
    "menu.tabs.all": "Todos",
    "menu.tabs.boxes": "Cajas de Donuts",
    "menu.tabs.bouquets": "Ramos & Regalos",
    "menu.tabs.tiramisu": "Tiramisú Italiano",
    "menu.tabs.events": "Eventos & Tortas",

    "menu.spotlight1.badge": "Edición Haute Patisserie",
    "menu.spotlight1.eyebrow": "Firma de la Casa",
    "menu.spotlight1.title": "Donuts Cloud Box",
    "menu.spotlight1.tagline": "¿Alguna vez comiste una nube? ¿No? Entonces debes probar estos donuts. Para una ocasión especial o para darte un gusto.",
    "menu.spotlight1.desc": "Doce piezas de masa brioche artesanal fermentada con lentitud, decoradas a mano con moños de pastillaje bicolor, glaseados espejados y capacillos finos.",
    "menu.flavorTitle": "Selecciona y Explora Sabores:",
    "menu.clickPreview": "Clic para previsualizar",
    "menu.orderBox": "Personalizar Esta Caja",
    "menu.viewAnatomy": "Ver Anatomía & Ficha",

    "menu.tiramisu.badge": "Pedidos Por Kilos",
    "menu.tiramisu.title": "Tiramisú: The Italian Way",
    "menu.tiramisu.story": "Durante mi viaje a Italia me enamoré de este postre y tomé una clase completa con un chef pastelero sobre cómo hacerlo a la manera original italiana: café de moka, savoiardi, mascarpone, huevos, cacao y muchísimo amor. El resultado es increíble. Los pedidos se hacen por kilos y, créeme, nunca es suficiente.",
    "menu.tiramisu.kilos": "Selecciona Tamaño por Kilos:",
    "menu.tiramisu.orderBtn": "Pedir Tiramisú",
    "menu.viewRecipe": "Ficha Técnica & Maridaje",

    "card.ramos": "Ramos & Regalos",
    "card.cajas": "Cajas de Donuts",
    "card.eventos": "Eventos & Tortas",
    "card.customQuote": "Cotización personalizada",
    "card.anatomy": "Anatomía",

    "gallery.eyebrow": "Momentos Inolvidables",
    "gallery.title": "Eventos & Galería Editorial",
    "gallery.subtitle": "Una mirada íntima a nuestras creaciones para cumpleaños, aniversarios, baby showers y celebraciones exclusivas en Cali.",

    "bento.events": "Eventos Exclusivos",
    "bento.tower": "Torres de Donuts de Alto Impacto",
    "bento.behindScenes": "En el Obrador",
    "bento.reelTitle": "Glaseados y Texturas al Minuto",
    "bento.customCakes": "Pastelería de Autor",
    "bento.vintageCake": "Tortas Vintage con Volantes de Buttercream",
    "bento.bouquets": "Regalos Románticos",
    "bento.bouquetTitle": "Ramos de Donuts en Papel Seda",

    "reviews.eyebrow": "Voces de Nuestros Clientes",
    "reviews.title": "Lo Que Dicen De Nosotros",
    "reviews.subtitle": "Cada testimonio es el reflejo de la pasión y dedicación que Isabella y Adriana ponen en cada creación.",
    "reviews.r1Text": "Pedimos una torre de donuts temática de cumpleaños y fue el centro de todas las miradas. ¡Deliciosos y hermosos!",
    "reviews.r1Tag": "Cumpleaños en Cali",
    "reviews.r2Text": "Buscábamos algo original para el baby shower y los ramos de donuts personalizados superaron todas nuestras expectativas.",
    "reviews.r2Tag": "Baby Shower",
    "reviews.r3Text": "Poder elegir cada detalle (coberturas, colores, relleno y empaque) hizo que el regalo fuera único. ¡100% recomendadas!",
    "reviews.r3Tag": "Aniversario Especial",

    "story.eyebrow": "Nuestras Creadoras",
    "story.title": "Isabella y Adriana",
    "story.p1": "El deseo de una mamá y el amor de una hija se mezclan para crear Dulce Testimonio, tu referente de los mejores dulces en Cali.",
    "story.p2": "Desarrollando nuevos sabores y nuevas ideas, pero siempre con el mismo amor que une a una madre y su hija. Desde nuestros viajes por Europa perfeccionando la receta del tiramisú tradicional hasta cada glaseado hecho a mano en nuestro taller.",
    "story.h1Title": "Recetas de Autor",
    "story.h1Desc": "Masa brioche con 24h de fermentación y glaseados con ingredientes reales sin conservantes.",
    "story.h2Title": "Amor en Cada Detalle",
    "story.h2Desc": "Cada ramo, caja y lazo es confeccionado individualmente para su destinatario.",
    "story.quote": "En Dulce Testimonio creemos que la vida es dulce, y por eso dedicamos nuestras fuerzas y tiempo para hacerte probar la dulzura de la vida.",
    "story.quoteAuthor": "— Isabella & Adriana, Dulce Testimonio Cali",

    "quote.eyebrow": "Cotizador Inteligente",
    "quote.title": "Arma tu Cotización Personalizada",
    "quote.subtitle": "Elige tu producto, combina tus sabores y envíanos tu solicitud directa a nuestro WhatsApp. Te responderemos en minutos con la confirmación de fecha y detalles.",
    "quote.step1": "Paso 01",
    "quote.selectProduct": "Selecciona tu Creación:",
    "quote.opt1": "Cajas de Donuts",
    "quote.opt1Sub": "Cloud Box x6, x12 o Floral",
    "quote.opt2": "Ramo de Donuts",
    "quote.opt2Sub": "Arreglo floral comestible",
    "quote.opt3": "Tiramisú por Kilos",
    "quote.opt3Sub": "Receta tradicional italiana",
    "quote.opt4": "Torres & Eventos",
    "quote.opt4Sub": "Bodas, cumpleaños y mesas",
    "quote.step2": "Paso 02",
    "quote.selectSize": "Tamaño o Presentación:",
    "quote.step3": "Paso 03",
    "quote.selectFlavors": "Sabores y Paleta de Color:",
    "quote.step4": "Paso 04",
    "quote.orderDetails": "Detalles de Entrega:",
    "quote.nameLabel": "Tu Nombre Completo:",
    "quote.dateLabel": "Fecha Requerida:",
    "quote.notesLabel": "Mensaje de Dedicatoria o Detalles Especiales:",

    "summary.eyebrow": "Resumen En Vivo",
    "summary.title": "Tu Pedido Dulce",
    "summary.itemProduct": "Creación:",
    "summary.itemSize": "Presentación:",
    "summary.itemFlavors": "Sabores:",
    "summary.itemDate": "Fecha:",
    "summary.itemLocation": "Destino:",
    "summary.sendWhatsApp": "Enviar por WhatsApp",

    "footer.desc": "Fundado con devoción y visión por Isabella y Adriana en Cali, Colombia. Especialistas en donuts de diseño, ramos de donuts de lujo, auténtico tiramisú italiano y mesas de postres para eventos de ensueño.",
    "footer.linksTitle": "Navegación",
    "footer.hoursTitle": "Horarios & Pedidos",
    "footer.contactTitle": "Hable con Nosotras",
    "footer.contactSubtitle": "¿Tienes una fecha especial en mente? Escríbenos directamente:",

    "theme.btnLabel": "Personalizar Colores",
    "theme.drawerTitle": "Paletas & Estilos",
    "theme.presetsTitle": "Paletas Preestablecidas",
    "theme.pickersTitle": "Ajuste Fino de Colores Hex",
    "theme.copyBtn": "Copiar Variables CSS",
    "theme.resetBtn": "Restaurar Original",

    "modal.eyebrow": "Haute Patisserie",
    "modal.quoteBtn": "Cotizar Este Dulce",
    "modal.closeBtn": "Volver"
  },

  en: {
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.events": "Events",
    "nav.chefs": "Chefs (Isabella & Adriana)",
    "nav.contact": "Contact",
    "nav.city": "Pastry Atelier • Cali",
    "nav.cta": "Quote Now",

    "hero.subtitle": "Custom Haute Patisserie • Cali, Colombia",
    "hero.description": "The unconditional love of a mother and the innovative vision of a daughter blend into creations that turn every moment into an unforgettable sensory experience.",
    "hero.ctaPrimary": "Quote Now",
    "hero.ctaSecondary": "Explore Menu",
    "hero.stat1": "100% Handcrafted",
    "hero.stat2": "Cali, Colombia",
    "hero.stat3": "Haute Couture",

    "pillars.eyebrow": "Our Essence",
    "pillars.title": "The Art of Sweet Gifting",
    "pillars.subtitle": "Three refined expressions of our pastry passion designed to enchant the senses in every single detail.",
    "pillars.p1Step": "Pillar 01",
    "pillars.p1Title": "Donuts...",
    "pillars.p1Desc": "Handcrafted donut bouquets arranged like high-fashion flower posies, wrapped in luxury dusty lilac paper and fresh baby's breath.",
    "pillars.p2Step": "Pillar 02",
    "pillars.p2Title": "...Designer...",
    "pillars.p2Desc": "Gift hampers and breakfast trays paired with sparkling wine, artisanal ceramic mugs, and fresh roses ('I Love Mom' & celebration gifts).",
    "pillars.p3Step": "Pillar 03",
    "pillars.p3Title": "...Bespoke",
    "pillars.p3Desc": "Elongated Parisian-style boxes adorned with eucalyptus sprigs and baby's breath for unforgettable anniversaries and luxury weddings.",
    "pillars.explore": "Discover &rarr;",

    "menu.eyebrow": "Haute Patisserie",
    "menu.title": "Our Donuts & Fine Pastries",
    "menu.subtitle": "Born from the love of a mother and the innovation of a daughter, perfect to bring sweetness into your life—but be careful, they are addictive!",
    "menu.tabs.all": "All Items",
    "menu.tabs.boxes": "Donut Boxes",
    "menu.tabs.bouquets": "Bouquets & Gifts",
    "menu.tabs.tiramisu": "Italian Tiramisù",
    "menu.tabs.events": "Events & Cakes",

    "menu.spotlight1.badge": "Haute Patisserie Edition",
    "menu.spotlight1.eyebrow": "Signature Creation",
    "menu.spotlight1.title": "Donuts Cloud Box",
    "menu.spotlight1.tagline": "Have you ever tasted a cloud? No? Then you must try these donuts. For a special occasion or to pamper yourself.",
    "menu.spotlight1.desc": "Twelve pieces of slow-fermented artisanal brioche, hand-decorated with two-tone sugar bow-ties, mirror glazes, and fine fluted paper liners.",
    "menu.flavorTitle": "Select & Explore Flavors:",
    "menu.clickPreview": "Click to preview flavor notes",
    "menu.orderBox": "Customize This Box",
    "menu.viewAnatomy": "View Anatomy & Details",

    "menu.tiramisu.badge": "Sold By The Kilo",
    "menu.tiramisu.title": "Tiramisù: The Italian Way",
    "menu.tiramisu.story": "During my trip to Italy, I fell in love with this dessert and took an in-depth masterclass with a master pastry chef on how to make it the authentic Italian way: stovetop moka espresso, savoiardi ladyfingers, rich mascarpone, egg yolks, cocoa, and an abundance of love. The result is pure bliss. We prepare it strictly by the kilo, and believe me, it is never enough.",
    "menu.tiramisu.kilos": "Select Size By The Kilo:",
    "menu.tiramisu.orderBtn": "Order Tiramisù",
    "menu.viewRecipe": "Technical Specs & Pairing",

    "card.ramos": "Bouquets & Gifts",
    "card.cajas": "Donut Boxes",
    "card.eventos": "Events & Cakes",
    "card.customQuote": "Custom quote available",
    "card.anatomy": "Anatomy",

    "gallery.eyebrow": "Unforgettable Moments",
    "gallery.title": "Events & Editorial Gallery",
    "gallery.subtitle": "An intimate glimpse into our dessert tables, vintage cakes, and celebration centerpieces in Cali, Colombia.",

    "bento.events": "Exclusive Events",
    "bento.tower": "Monumental Multi-Tier Donut Towers",
    "bento.behindScenes": "Inside The Atelier",
    "bento.reelTitle": "Fresh Glazes & Textures in Motion",
    "bento.customCakes": "Signature Patisserie",
    "bento.vintageCake": "Vintage Buttercream Lambeth Ruffle Cakes",
    "bento.bouquets": "Romantic Gifts",
    "bento.bouquetTitle": "Artisanal Silk-Wrapped Donut Bouquets",

    "reviews.eyebrow": "Voices of Our Guests",
    "reviews.title": "What They Say About Us",
    "reviews.subtitle": "Each review reflects the love, care, and exacting standards Isabella and Adriana infuse into every creation.",
    "reviews.r1Text": "We ordered a themed birthday donut tower and it was the absolute star of the event. Beyond delicious and strikingly gorgeous!",
    "reviews.r1Tag": "Birthday Celebration in Cali",
    "reviews.r2Text": "We wanted something uniquely original for our baby shower and the bespoke donut bouquets exceeded our wildest expectations.",
    "reviews.r2Tag": "Baby Shower",
    "reviews.r3Text": "Being able to tailor every single detail (glazes, color palette, filling, and packaging) made the gift truly one-of-a-kind. Highly recommended!",
    "reviews.r3Tag": "Special Anniversary",

    "story.eyebrow": "Our Founders",
    "story.title": "Isabella & Adriana",
    "story.p1": "A mother's lifelong devotion and a daughter's creative energy come together to create Dulce Testimonio, your ultimate reference for luxury sweets in Cali.",
    "story.p2": "Pioneering new flavor profiles and presentation concepts, yet always guided by the tender bond that unites mother and daughter. From culinary travels across Italy perfecting authentic recipes to hand-glazing each pastry in our Cali studio.",
    "story.h1Title": "Artisanal Formulas",
    "story.h1Desc": "24-hour slow-fermented brioche dough and glazes made exclusively with real, preservative-free ingredients.",
    "story.h2Title": "Love In Every Detail",
    "story.h2Desc": "Every bouquet, ribbon, and gift box is individually assembled with utmost tenderness for its recipient.",
    "story.quote": "At Dulce Testimonio, we believe that life is sweet, and we dedicate all our energy and passion to making you experience the sweetness of life.",
    "story.quoteAuthor": "— Isabella & Adriana, Dulce Testimonio Cali",

    "quote.eyebrow": "Smart Quote Builder",
    "quote.title": "Build Your Bespoke Quote",
    "quote.subtitle": "Select your centerpiece, pick your flavor palette, and send us your inquiry directly to WhatsApp. We will confirm date availability and pricing in minutes.",
    "quote.step1": "Step 01",
    "quote.selectProduct": "Select Your Creation:",
    "quote.opt1": "Donut Boxes",
    "quote.opt1Sub": "Cloud Box x6, x12 or Floral",
    "quote.opt2": "Donut Bouquet",
    "quote.opt2Sub": "Edible haute floral arrangement",
    "quote.opt3": "Tiramisù By The Kilo",
    "quote.opt3Sub": "Authentic Italian recipe",
    "quote.opt4": "Towers & Events",
    "quote.opt4Sub": "Weddings, birthdays & tables",
    "quote.step2": "Step 02",
    "quote.selectSize": "Size or Presentation:",
    "quote.step3": "Step 03",
    "quote.selectFlavors": "Flavors & Color Palette:",
    "quote.step4": "Step 04",
    "quote.orderDetails": "Delivery Details:",
    "quote.nameLabel": "Your Full Name:",
    "quote.dateLabel": "Date Needed:",
    "quote.notesLabel": "Dedication Card Message or Special Requests:",

    "summary.eyebrow": "Live Summary",
    "summary.title": "Your Sweet Order",
    "summary.itemProduct": "Creation:",
    "summary.itemSize": "Presentation:",
    "summary.itemFlavors": "Flavors:",
    "summary.itemDate": "Date:",
    "summary.itemLocation": "Destination:",
    "summary.sendWhatsApp": "Send via WhatsApp",

    "footer.desc": "Founded with devotion and vision by Isabella and Adriana in Cali, Colombia. Specialists in bespoke designer donuts, luxury bouquets, authentic Italian tiramisù, and dream event tables.",
    "footer.linksTitle": "Navigation",
    "footer.hoursTitle": "Hours & Orders",
    "footer.contactTitle": "Speak With Us",
    "footer.contactSubtitle": "Planning a special celebration? Reach out to us directly:",

    "theme.btnLabel": "Customize Colors",
    "theme.drawerTitle": "Palettes & Aesthetics",
    "theme.presetsTitle": "Curated Theme Palettes",
    "theme.pickersTitle": "Fine-Tune Hex Colors",
    "theme.copyBtn": "Copy CSS Variables",
    "theme.resetBtn": "Restore Original",

    "modal.eyebrow": "Haute Patisserie",
    "modal.quoteBtn": "Quote This Pastry",
    "modal.closeBtn": "Back"
  }
};

/**
 * Set the current website language (ES or EN)
 */
function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;

  // Update Buttons active state
  document.getElementById("btnLangEs")?.classList.toggle("active", lang === "es");
  document.getElementById("btnLangEn")?.classList.toggle("active", lang === "en");

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang][key]) {
      el.innerHTML = I18N[lang][key];
    }
  });

  // Update active flavor pills label in Cloud Box
  const f1 = SITE_CONFIG.cloudFlavors[1];
  const f2 = SITE_CONFIG.cloudFlavors[2];
  const f3 = SITE_CONFIG.cloudFlavors[3];
  const f4 = SITE_CONFIG.cloudFlavors[4];

  if (document.getElementById("labelFlavor1")) document.getElementById("labelFlavor1").innerText = lang === "es" ? "Glaseado Clásico" : "Classic Glaze";
  if (document.getElementById("labelFlavor2")) document.getElementById("labelFlavor2").innerText = lang === "es" ? "Chocolate Belga" : "Belgian Chocolate";
  if (document.getElementById("labelFlavor3")) document.getElementById("labelFlavor3").innerText = lang === "es" ? "Frutos Rojos & Pistacho" : "Berries & Pistachio";
  if (document.getElementById("labelFlavor4")) document.getElementById("labelFlavor4").innerText = lang === "es" ? "Edición Especial ❤️" : "Special Edition ❤️";

  // Re-render flavor preview text
  const activePill = document.querySelector(".flavor-pill.active");
  const flavorIndex = activePill ? parseInt(activePill.getAttribute("onclick")?.match(/\d+/)?.[0] || "1") : 1;
  const flavorObj = SITE_CONFIG.cloudFlavors[flavorIndex];
  const previewContainer = document.getElementById("flavorPreviewText");
  if (previewContainer && flavorObj) {
    const fName = lang === "es" ? flavorObj.nameEs : flavorObj.nameEn;
    const fDesc = lang === "es" ? flavorObj.descEs : flavorObj.descEn;
    previewContainer.innerHTML = `<span style="font-size: 1.1rem;">✨</span><span><strong>${fName}:</strong> ${fDesc}</span>`;
  }

  // Update Quote Summary labels
  updateQuoteSummary();
}

/* ============================================================================
   3. THEME & COLOR PALETTE CUSTOMIZER
   ============================================================================ */
const THEME_PRESETS = {
  default: {
    "--bg-primary": "#FBF8F6",
    "--primary": "#6E3B68",
    "--accent-soft": "#F2E4EE",
    "--accent-gold": "#D4AF37",
    "--text-dark": "#231922"
  },
  melt: {
    "--bg-primary": "#F8F4EE",
    "--primary": "#3D2314",
    "--accent-soft": "#F4E7D5",
    "--accent-gold": "#D4A359",
    "--text-dark": "#1E120A"
  },
  donutelier: {
    "--bg-primary": "#FAF6F4",
    "--primary": "#3F533E",
    "--accent-soft": "#F9E8E6",
    "--accent-gold": "#C4A753",
    "--text-dark": "#20241F"
  },
  monochrome: {
    "--bg-primary": "#F7F7F7",
    "--primary": "#121212",
    "--accent-soft": "#EBE8E6",
    "--accent-gold": "#C2A264",
    "--text-dark": "#121212"
  }
};

function toggleCustomizerDrawer() {
  const drawer = document.getElementById("customizerDrawer");
  if (drawer) {
    drawer.classList.toggle("open");
  }
}

function applyPreset(themeKey, btnElement) {
  // Update data-theme on html
  document.documentElement.setAttribute("data-theme", themeKey);

  // Update active button state
  document.querySelectorAll(".preset-btn").forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  const preset = THEME_PRESETS[themeKey];
  if (!preset) return;

  // Synchronize CSS custom properties on root
  Object.keys(preset).forEach(varName => {
    document.documentElement.style.setProperty(varName, preset[varName]);
  });

  // Update native color picker inputs and hex text
  syncPickersWithPreset(preset);
  showToast(currentLanguage === "es" ? `Paleta "${themeKey}" aplicada` : `Palette "${themeKey}" applied`);
}

function syncPickersWithPreset(preset) {
  if (preset["--primary"]) {
    document.getElementById("colorPickerPrimary").value = preset["--primary"];
    document.getElementById("hexPrimary").innerText = preset["--primary"];
  }
  if (preset["--accent-soft"]) {
    document.getElementById("colorPickerAccent").value = preset["--accent-soft"];
    document.getElementById("hexAccent").innerText = preset["--accent-soft"];
  }
  if (preset["--accent-gold"]) {
    document.getElementById("colorPickerGold").value = preset["--accent-gold"];
    document.getElementById("hexGold").innerText = preset["--accent-gold"];
  }
  if (preset["--bg-primary"]) {
    document.getElementById("colorPickerBg").value = preset["--bg-primary"];
    document.getElementById("hexBg").innerText = preset["--bg-primary"];
  }
  if (preset["--text-dark"]) {
    document.getElementById("colorPickerText").value = preset["--text-dark"];
    document.getElementById("hexText").innerText = preset["--text-dark"];
  }
}

function updateColorVar(varName, value, hexLabelId) {
  document.documentElement.style.setProperty(varName, value);
  const label = document.getElementById(hexLabelId);
  if (label) label.innerText = value.toUpperCase();

  // If primary changes, update primary-rgb for alpha transparencies
  if (varName === "--primary") {
    const rgb = hexToRgb(value);
    if (rgb) {
      document.documentElement.style.setProperty("--primary-rgb", `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    }
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function copyCssVariables() {
  const rootStyles = getComputedStyle(document.documentElement);
  const cssVars = `/* Dulce Testimonio — Paleta Personalizada */
:root {
  --bg-primary: ${rootStyles.getPropertyValue("--bg-primary").trim()};
  --primary: ${rootStyles.getPropertyValue("--primary").trim()};
  --accent-soft: ${rootStyles.getPropertyValue("--accent-soft").trim()};
  --accent-gold: ${rootStyles.getPropertyValue("--accent-gold").trim()};
  --text-dark: ${rootStyles.getPropertyValue("--text-dark").trim()};
}`;

  navigator.clipboard.writeText(cssVars).then(() => {
    showToast(currentLanguage === "es" ? "¡Variables CSS copiadas al portapapeles!" : "CSS Variables copied to clipboard!");
  }).catch(() => {
    showToast(currentLanguage === "es" ? "No se pudo copiar automáticamente" : "Could not copy to clipboard");
  });
}

function resetThemeDefaults() {
  document.documentElement.removeAttribute("data-theme");
  document.documentElement.removeAttribute("style");
  syncPickersWithPreset(THEME_PRESETS.default);
  document.querySelectorAll(".preset-btn").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === 0);
  });
  showToast(currentLanguage === "es" ? "Tema original restaurado" : "Original theme restored");
}

function showToast(message) {
  const toast = document.getElementById("toastNotice");
  const msgSpan = document.getElementById("toastMessage");
  if (!toast || !msgSpan) return;

  msgSpan.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* ============================================================================
   4. MENU CATEGORY FILTER & CLOUD BOX FLAVOR PICKER
   ============================================================================ */
function filterMenu(category, tabBtn) {
  document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
  if (tabBtn) tabBtn.classList.add("active");

  const cards = document.querySelectorAll(".product-card");
  const spotlight1 = document.getElementById("spotlightCloudBox");
  const spotlight2 = document.getElementById("spotlightTiramisu");

  // Show or hide spotlight 1 (Cajas)
  if (spotlight1) {
    if (category === "all" || category === "cajas") {
      spotlight1.style.display = "block";
    } else {
      spotlight1.style.display = "none";
    }
  }

  // Show or hide spotlight 2 (Tiramisu)
  if (spotlight2) {
    if (category === "all" || category === "tiramisu") {
      spotlight2.style.display = "block";
    } else {
      spotlight2.style.display = "none";
    }
  }

  // Filter grid cards
  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "flex";
      card.style.opacity = "1";
    } else {
      card.style.display = "none";
      card.style.opacity = "0";
    }
  });
}

function selectCloudFlavor(flavorIndex, pillBtn) {
  document.querySelectorAll(".flavor-pill").forEach(p => p.classList.remove("active"));
  if (pillBtn) pillBtn.classList.add("active");

  const flavor = SITE_CONFIG.cloudFlavors[flavorIndex];
  if (!flavor) return;

  const preview = document.getElementById("flavorPreviewText");
  if (preview) {
    const fName = currentLanguage === "es" ? flavor.nameEs : flavor.nameEn;
    const fDesc = currentLanguage === "es" ? flavor.descEs : flavor.descEn;
    preview.innerHTML = `<span style="font-size: 1.1rem;">✨</span><span><strong>${fName}:</strong> ${fDesc}</span>`;
  }
}

function selectTiramisuKilos(kilos, btnElement) {
  document.querySelectorAll(".kilo-btn").forEach(b => b.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  // Also preselect in quote size select
  const quoteSizeSelect = document.getElementById("quoteSizeSelect");
  if (quoteSizeSelect) {
    if (kilos === 1) quoteSizeSelect.value = "Tiramisú 1 Kg (6-8 porciones)";
    else if (kilos === 2) quoteSizeSelect.value = "Tiramisú 2 Kg (12-16 porciones)";
    else quoteSizeSelect.value = "Tiramisú 2 Kg (12-16 porciones)"; // or custom
    updateQuoteSummary();
  }
}

/* ============================================================================
   5. ANATOMY & FLAVORS MODAL (DONUTELIER)
   ============================================================================ */
function openAnatomyModal(productId) {
  const data = SITE_CONFIG.anatomyData[productId];
  if (!data) return;

  const backdrop = document.getElementById("anatomyModalBackdrop");
  const modalImg = document.getElementById("modalProductImage");
  const modalCat = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalSnippet = document.getElementById("modalSnippet");
  const list = document.getElementById("modalAnatomyList");

  if (!backdrop) return;

  modalImg.src = data.img;
  modalCat.innerText = currentLanguage === "es" ? data.categoryEs : data.categoryEn;
  modalTitle.innerText = currentLanguage === "es" ? data.titleEs : data.titleEn;
  modalSnippet.innerText = currentLanguage === "es" ? data.snippetEs : data.snippetEn;

  // Render layers list
  list.innerHTML = "";
  data.layers.forEach(l => {
    const row = document.createElement("div");
    row.className = "anatomy-row";
    const label = currentLanguage === "es" ? l.labelEs : l.labelEn;
    const val = currentLanguage === "es" ? l.valEs : l.valEn;
    row.innerHTML = `
      <div class="anatomy-icon">✦</div>
      <div class="anatomy-content">
        <span class="anatomy-label">${label}</span>
        <span class="anatomy-val">${val}</span>
      </div>
    `;
    list.appendChild(row);
  });

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAnatomyModal() {
  const backdrop = document.getElementById("anatomyModalBackdrop");
  if (backdrop) {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function closeAnatomyModalOnBackdrop(e) {
  if (e.target.id === "anatomyModalBackdrop") {
    closeAnatomyModal();
  }
}

/* ============================================================================
   6. BENTO GALLERY & LIGHTBOX
   ============================================================================ */
function openLightbox(imgSrc, caption) {
  const lb = document.getElementById("galleryLightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbCap = document.getElementById("lightboxCaption");
  if (!lb || !lbImg) return;

  lbImg.src = imgSrc;
  if (lbCap) lbCap.innerText = caption || "";
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox(e) {
  const lb = document.getElementById("galleryLightbox");
  if (lb) {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }
}

/* ============================================================================
   7. INTERACTIVE "COTIZA YA" (WHATSAPP ORDER BUILDER)
   ============================================================================ */
let orderState = {
  product: "Cajas de Donuts",
  size: "Caja x12 Cloud Box con moños y capacillos",
  flavors: ["Glaseado Clásico Vainilla", "Chocolate Belga"],
  name: "",
  date: "",
  notes: ""
};

function selectProductType(typeKey, typeName, cardElement) {
  document.querySelectorAll(".selection-card").forEach(c => c.classList.remove("selected"));
  if (cardElement) cardElement.classList.add("selected");

  orderState.product = typeName;

  // Filter or adjust relevant options in size select
  const select = document.getElementById("quoteSizeSelect");
  if (select) {
    if (typeKey === "caja_donuts") {
      select.value = "Caja x12 Cloud Box (Recomendada)";
    } else if (typeKey === "ramo_donuts") {
      select.value = "Ramo Mediano (7 donuts)";
    } else if (typeKey === "tiramisu") {
      select.value = "Tiramisú 1 Kg (6-8 porciones)";
    } else if (typeKey === "evento_torre") {
      select.value = "Torre de Donuts para Evento (40+ unidades)";
    }
  }

  updateQuoteSummary();
}

function toggleFlavorBadge(badgeElement, flavorName) {
  badgeElement.classList.toggle("checked");
  const index = orderState.flavors.indexOf(flavorName);

  if (badgeElement.classList.contains("checked")) {
    if (index === -1) orderState.flavors.push(flavorName);
  } else {
    if (index > -1) orderState.flavors.splice(index, 1);
  }

  updateQuoteSummary();
}

function updateQuoteSummary() {
  const sizeSelect = document.getElementById("quoteSizeSelect");
  const nameInput = document.getElementById("clientName");
  const dateInput = document.getElementById("orderDate");
  const notesInput = document.getElementById("orderNotes");

  if (sizeSelect) orderState.size = sizeSelect.value;
  if (nameInput) orderState.name = nameInput.value.trim();
  if (dateInput) orderState.date = dateInput.value;
  if (notesInput) orderState.notes = notesInput.value.trim();

  // Update Summary Card
  const sumProduct = document.getElementById("summaryProduct");
  const sumSize = document.getElementById("summarySize");
  const sumFlavors = document.getElementById("summaryFlavors");
  const sumDate = document.getElementById("summaryDate");

  if (sumProduct) sumProduct.innerText = orderState.product;
  if (sumSize) sumSize.innerText = orderState.size;
  if (sumFlavors) {
    sumFlavors.innerText = orderState.flavors.length > 0
      ? orderState.flavors.join(", ")
      : (currentLanguage === "es" ? "A elección de la chef" : "Chef's selection");
  }
  if (sumDate) {
    sumDate.innerText = orderState.date
      ? orderState.date
      : (currentLanguage === "es" ? "Por definir" : "To be decided");
  }
}

function preselectQuote(productName) {
  const quoteSection = document.getElementById("cotizador");
  if (quoteSection) {
    quoteSection.scrollIntoView({ behavior: "smooth" });
  }

  const select = document.getElementById("quoteSizeSelect");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(productName) || select.options[i].value.includes(productName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  updateQuoteSummary();
}

/**
 * Dispatch formatted order to WhatsApp click-to-chat URL
 */
function sendOrderViaWhatsApp() {
  updateQuoteSummary();

  const isEs = currentLanguage === "es";
  const client = orderState.name || (isEs ? "Un cliente apasionado" : "A gourmet client");
  const dateStr = orderState.date || (isEs ? "Fecha a coordinar" : "Date to be confirmed");
  const flavorsStr = orderState.flavors.length > 0 ? orderState.flavors.join(", ") : (isEs ? "Surtido recomendado de la casa" : "House signature assortment");
  const notesStr = orderState.notes ? `\n📝 *${isEs ? "Mensaje / Dedicatoria" : "Notes / Dedication"}:* ${orderState.notes}` : "";

  const messageText = isEs
    ? `🍰 *NUEVA COTIZACIÓN — DULCE TESTIMONIO* 🍰
----------------------------------------
✨ *Creación:* ${orderState.product}
📦 *Presentación:* ${orderState.size}
🍓 *Sabores elegidos:* ${flavorsStr}
📅 *Fecha requerida:* ${dateStr}
👤 *Cliente:* ${client}${notesStr}
📍 *Destino:* Cali, Colombia
----------------------------------------
¡Hola Isabella y Adriana! Me encantaría confirmar disponibilidad y el valor para este pedido. ¡Muchas gracias!`
    : `🍰 *NEW BESPOKE QUOTE — DULCE TESTIMONIO* 🍰
----------------------------------------
✨ *Creation:* ${orderState.product}
📦 *Size / Style:* ${orderState.size}
🍓 *Selected Flavors:* ${flavorsStr}
📅 *Date Needed:* ${dateStr}
👤 *Client Name:* ${client}${notesStr}
📍 *Location:* Cali, Colombia
----------------------------------------
Hello Isabella & Adriana! I would love to check availability and confirm pricing for this sweet creation. Thank you!`;

  const encoded = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
  window.open(whatsappUrl, "_blank", "noopener");
}

/* ============================================================================
   8. MOBILE DRAWER & NAVBAR SCROLL BEHAVIOR
   ============================================================================ */
function toggleMobileNav() {
  const menu = document.getElementById("navMenu");
  if (menu) {
    menu.classList.toggle("open");
  }
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navMenu");
    if (menu && menu.classList.contains("open")) {
      menu.classList.remove("open");
    }
  });
});

// Sticky header shadow & shrink on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Active section spy
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 120;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      if (navLink) navLink.classList.add("active");
    }
  });
});

/* ============================================================================
   9. INITIALIZATION ON DOM READY
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Synchronize links with SITE_CONFIG
  const directWaBtn = document.getElementById("directWhatsAppBtn");
  const directInstaBtn = document.getElementById("directInstagramBtn");
  const footerInstaBtn = document.getElementById("footerInstaBtn");

  if (directWaBtn) directWaBtn.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("¡Hola Isabella y Adriana! Me gustaría consultar sobre sus postres de Dulce Testimonio.")}`;
  if (directInstaBtn) directInstaBtn.href = SITE_CONFIG.instagramUrl;
  if (footerInstaBtn) {
    footerInstaBtn.href = SITE_CONFIG.instagramUrl;
    footerInstaBtn.innerText = SITE_CONFIG.instagramHandle;
  }

  // Set default date input min to tomorrow
  const dateInput = document.getElementById("orderDate");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // Initialize order summary
  updateQuoteSummary();

  // Escape key to close any modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAnatomyModal();
      closeLightbox();
      const drawer = document.getElementById("customizerDrawer");
      if (drawer && drawer.classList.contains("open")) {
        drawer.classList.remove("open");
      }
    }
  });

  console.log("Dulce Testimonio Patisserie System initialized with haute aesthetic standards.");
});
