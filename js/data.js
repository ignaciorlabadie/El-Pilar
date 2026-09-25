const SITE_DATA = {
    nav: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Productos', href: '#productos' },
        { label: 'Galería', href: '#galeria' },
        { label: 'Horarios', href: '#horarios' },
        { label: 'Ubicación', href: '#ubicacion' },
        { label: 'Contacto', href: '#contacto', cta: true }
    ],

    hero: {
        image: 'img/frente-completo.jpeg',
        imageAlt: 'Frente de la mercería El Pilar en Bahía Blanca',
        title: 'Mercería El Pilar',
        subtitle: 'Tres generaciones brindando soluciones y asesoramiento para optimizar y satisfacer las necesidades de nuestros clientes.',
        cta: { label: 'Contactanos', href: '#contacto' }
    },

    about: {
        image: 'img/frente-completo-mejorado.png',
        imageAlt: 'Fachada de la mercería El Pilar en Estomba 211, Bahía Blanca',
        title: 'Sobre Nosotros',
        paragraphs: [
            'Mercería El Pilar es un negocio familiar, que comenzó en el mes de Junio de 1950, siempre situados en la misma dirección emplazados en calle Estomba 211 de la ciudad de Bahía Blanca a 100 metros de la plaza principal de dicha localidad.',
            'Nos dedicamos a la comercializacion de todo tipo de productos y avios requeridos para la confección de prendas y distintos productos que se utilizan para realizar todo tipo de artesanías.',
            'Hoy somos la tercera generación que sigue con el mismo compromiso de brindar asesoramiento y acompañar a nuestros Clientes en lo que necesiten.'
        ]
    },

    services: {
        title: 'Nuestros Servicios',
        items: [
            {
                title: 'Cintas',
                description: 'De tela en todas sus versiones lisas, estampadas o bordadas.',
                icon: '<path d="M20.38 3.46 16 2 12 3.46 8 2 3.62 3.46a2 2 0 0 0-1.34 1.89v13.3a2 2 0 0 0 2.66 1.89L8 19l4-1.46L16 19l4.38-1.46a2 2 0 0 0 1.34-1.89V5.35a2 2 0 0 0-1.34-1.89z"/><line x1="12" y1="2" x2="12" y2="17.54"/>'
            },
            {
                title: 'Hilos',
                description: 'De costura en todas sus variedades para todo tipo de trabajos en tres tamaños disponibles.',
                icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'
            },
            {
                title: 'Accesorios',
                description: 'Aplicaciones termoadhesivos bordadas para prendas en todas sus formas y diseños.',
                icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'
            },
            {
                title: 'Cierres',
                description: 'En todas sus variantes medidas y colores desde invisibles hasta metálicos e impermeables para confección todo tipo de prendas, y marroquineria.',
                icon: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>'
            },
            {
                title: 'Puntillas',
                description: 'De Nylon, Lycra Broderies y de Algodón según la necesidad, en distintos tamaños y colores.',
                icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
            },
            {
                title: 'Agujas y alfileres',
                description: 'De todo tipo, forma y tamaño para costura industrial o familiar, con sus respectivos accesorios.',
                icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
            }
        ]
    },

    products: {
        title: 'Algunos de nuestros Productos',
        items: [
            { src: 'img/productos/producto-01.jpeg', alt: 'Hilos de coser en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-02.jpeg', alt: 'Cintas de tela en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-03.jpeg', alt: 'Cierres de todas las medidas en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-04.jpeg', alt: 'Puntillas y broderíes en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-05.jpeg', alt: 'Agujas y alfileres en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-06.jpeg', alt: 'Accesorios y aplicaciones bordadas en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-07.jpeg', alt: 'Elásticos y cintas elásticas en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-08.jpeg', alt: 'Botones y avíos para costura en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-09.jpeg', alt: 'Hilos y lanas para tejido en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-10.jpeg', alt: 'Herrajes y marroquinería en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-11.jpeg', alt: 'Cosedoras y accesorios de costura en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-12.jpeg', alt: 'Cintas estampadas y bordadas en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-13.jpeg', alt: 'Cierres metálicos e invisibles en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-14.jpeg', alt: 'Puntillas de algodón y nylon en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-15.jpeg', alt: 'Organizadores de hilos en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-16.jpeg', alt: 'Cintas de regalo y moños en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-17.jpeg', alt: 'Insumos para artesanías en Mercería El Pilar Bahía Blanca' },
            { src: 'img/productos/producto-18.jpeg', alt: 'Apliques termoadhesivos bordados en Mercería El Pilar Bahía Blanca' }
        ]
    },

    gallery: {
        title: 'Nuestro Local',
        items: [
            { src: 'img/local-extra-02.jpeg', alt: 'Detalle del local de la mercería El Pilar en Bahía Blanca', lazy: true },
            { src: 'img/interior-negocio.jpeg', alt: 'Interior de la mercería El Pilar en Bahía Blanca' },
            { src: 'img/mostrador-negocio.jpeg', alt: 'Mostrador de atención de la mercería El Pilar en Bahía Blanca' }
        ]
    },

    hours: {
        title: 'Horarios de Atención',
        rows: [
            { day: 'Lunes a Viernes', time: '9:00 - 17:00' },
            { day: 'Sábados', time: '9:00 - 13:00' },
            { day: 'Domingos', time: 'Cerrado', closed: true }
        ]
    },

    location: {
        title: 'Cómo Llegar',
        address: 'Estomba 211',
        reference: 'A una cuadra de la Plaza Rivadavia',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.058895456307!2d-62.27115822387928!3d-38.716456786166596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcae7632fea3%3A0x93c2e16cfe7d37e4!2sEstomba%20211%2C%20B8000AAE%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1787170657781!5m2!1ses-419!2sar'
    },

    contact: {
        title: 'Contactanos',
        cards: [
            {
                title: 'WhatsApp',
                description: 'Escribinos para consultas, pedidos o más información.',
                href: 'https://wa.me/2915235043',
                ctaLabel: 'Enviar mensaje',
                image: 'img/whatsapp.png'
            },
            {
                title: 'Instagram',
                description: 'Seguinos para ver novedades, fotos y más.',
                href: 'https://instagram.com/elpilar_merceria',
                ctaLabel: 'Seguinos',
                icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>'
            }
        ]
    },

    footer: {
        logo: 'img/logo-el-pilar.jpg',
        logoAlt: 'Logo de Mercería El Pilar',
        brand: 'Mercería',
        copy: '&copy; 2026 El Pilar. Todos los derechos reservados.',
        whatsapp: 'https://wa.me/2915235043',
        instagram: 'https://instagram.com/elpilar_merceria',
        instagramIcon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>'
    }
};
