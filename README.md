# Mercería El Pilar

Sitio web estático de **Mercería El Pilar**, un negocio familiar de mercería en Bahía Blanca (Argentina) fundado en junio de 1950 y que hoy lleva adelante la tercera generación de la familia.

## Descripción

Landing page de una sola página que presenta el negocio, sus servicios, productos y datos de contacto. Incluye:

- **Inicio / Hero** con imagen del frente del local.
- **Nosotros** con la historia del negocio.
- **Servicios** (cintas, hilos, accesorios, cierres, puntillas, agujas y alfileres).
- **Productos** con carrusel de imágenes.
- **Galería** del local con lightbox.
- **Horarios** de atención.
- **Ubicación** con mapa de Google Maps incrustado.
- **Contacto** con botones de WhatsApp e Instagram.

## Tecnologías

- HTML5
- CSS (modularizado en archivos por sección)
- JavaScript vanilla
- Google Fonts (Playfair Display, Lato)
- Google Maps embed
- Sin dependencias ni build step

## Estructura del proyecto

```
.
├── index.html              # Página principal (landing page)
├── netlify.toml            # Config de Netlify (headers de cache, minificación)
├── robots.txt              # Directivas para buscadores + referencia al sitemap
├── sitemap.xml             # Sitemap para Google Search Console
├── css/                    # Estilos por sección
│   ├── styles.css          # Punto de entrada (imports)
│   ├── variables.css       # Variables / tokens de diseño
│   ├── base.css            # Estilos base
│   └── ...                 # Resto de secciones
├── js/
│   └── main.js             # Lógica: header, menú móvil, fade-in, lightbox
└── img/                    # Imágenes (logo, fachada, interior, productos)
    └── productos/          # Fotos de productos
```

## Ejecución

Como es un sitio 100% estático, basta con abrir `index.html` en el navegador o servir la carpeta con cualquier servidor local:

```bash
# Opción con Python
python -m http.server

# Opción con Node
npx serve .
```

## Personalización

La información del negocio (dirección, horarios, WhatsApp, Instagram, mapa) está centralizada en `index.html`, en las secciones correspondientes. Los colores y tipografías se gestionan desde `css/variables.css`.

## SEO

El sitio incluye marcas base de SEO on-page:

- **Meta tags** (`title`, `description`, Open Graph, Twitter) en `index.html`.
- **Datos estructurados JSON-LD** de tipo `Store` con dirección, horarios, teléfono, coordenadas y redes.
- **`robots.txt`** y **`sitemap.xml`** para Google.
- **Alt texts descriptivos** en las imágenes.

> **Importante:** la URL canónica del sitio está configurada con el placeholder `https://merceriaelpilar.netlify.app/`. La URL real ya está configurada en el repo; solo actualizala acá si cambiás de dominio:
>
> - `index.html` → `link[rel="canonical"]`, `og:url` y el JSON-LD (`url`, `image`, `logo`).
> - `robots.txt` → directiva `Sitemap`.
> - `sitemap.xml` → elemento `<loc>`.
>
> Idealmente, apuntá un dominio propio (ej. `merceriaelpilar.com.ar`) a Netlify y usá esa URL canónica. Para búsquedas locales en Bahía Blanca, además de este código: creá y verificá el **Google Business Profile**, conectá **Google Search Console**, enviá el `sitemap.xml` y pedí reseñas de clientes. El SEO local tarda en posicionar (semanas/meses), no es automático.

## Licencia

© 2026 El Pilar. Todos los derechos reservados.
