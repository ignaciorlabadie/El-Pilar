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

## Licencia

© 2026 El Pilar. Todos los derechos reservados.
