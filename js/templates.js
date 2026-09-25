const icon = (content, className = '') =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"${className ? ` class="${className}"` : ''}>${content}</svg>`;

const Templates = {

    header: (data) => `
        <header class="header" id="header">
            <div class="header__container">
                <a href="#inicio" class="header__logo">
                    <img src="img/logo-el-pilar.jpg" alt="Logo de Mercería El Pilar" class="header__logo-img">
                </a>
                <button class="header__menu-toggle" id="menuToggle" aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav class="header__nav" id="mainNav">
                    ${data.nav.map(item => `
                        <a href="${item.href}" class="header__nav-link${item.cta ? ' header__nav-link--cta' : ''}">${item.label}</a>
                    `).join('')}
                </nav>
            </div>
        </header>
    `,

    hero: (data) => `
        <section class="hero" id="inicio">
            <div class="hero__overlay"></div>
            <img src="${data.image}" alt="${data.imageAlt}" class="hero__bg">
            <div class="hero__content fade-in">
                <h1 class="hero__title">${data.title}</h1>
                <p class="hero__subtitle">${data.subtitle}</p>
                <a href="${data.cta.href}" class="btn btn--primary">${data.cta.label}</a>
            </div>
        </section>
    `,

    about: (data) => `
        <section class="about" id="nosotros">
            <div class="container">
                <div class="about__grid">
                    <div class="about__image fade-in">
                        <img src="${data.image}" alt="${data.imageAlt}">
                    </div>
                    <div class="about__text fade-in">
                        <h2 class="section-title">${data.title}</h2>
                        ${data.paragraphs.map(text => `<p>${text}</p>`).join('')}
                    </div>
                </div>
            </div>
        </section>
    `,

    services: (data) => `
        <section class="services" id="servicios">
            <div class="container">
                <h2 class="section-title section-title--center fade-in">${data.title}</h2>
                <div class="services__grid">
                    ${data.items.map(item => `
                        <div class="services__card fade-in">
                            <div class="services__icon">${icon(item.icon)}</div>
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `,

    products: (data) => `
        <section class="products" id="productos">
            <div class="container">
                <h2 class="section-title section-title--center fade-in">${data.title}</h2>
            </div>
            <div class="products__carousel">
                <div class="products__track">
                    ${data.items.map(item => `
                        <div class="products__item">
                            <img src="${item.src}" alt="${item.alt}" loading="lazy">
                        </div>
                    `).join('')}
                    ${data.items.map(item => `
                        <div class="products__item" aria-hidden="true">
                            <img src="${item.src}" alt="" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `,

    gallery: (data) => `
        <section class="gallery" id="galeria">
            <div class="container">
                <h2 class="section-title section-title--center fade-in">${data.title}</h2>
                <div class="gallery__grid">
                    ${data.items.map(item => `
                        <div class="gallery__item fade-in">
                            <img src="${item.src}" alt="${item.alt}"${item.lazy ? ' loading="lazy"' : ''}>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `,

    hours: (data) => `
        <section class="hours" id="horarios">
            <div class="container">
                <h2 class="section-title section-title--center fade-in">${data.title}</h2>
                <div class="hours__card fade-in">
                    ${data.rows.map(row => `
                        <div class="hours__row${row.closed ? ' hours__row--closed' : ''}">
                            <span class="hours__day">${row.day}</span>
                            <span class="hours__time">${row.time}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `,

    location: (data) => `
        <section class="location" id="ubicacion">
            <div class="container">
                <h2 class="section-title section-title--center fade-in">${data.title}</h2>
                <div class="location__wrapper fade-in">
                    <div class="location__info">
                        <p class="location__address">
                            ${icon('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', 'location__icon')}
                            <strong>Dirección:</strong> <span>${data.address}</span>
                        </p>
                        <p class="location__ref">
                            ${icon('<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>', 'location__icon')}
                            <strong>Referencia:</strong> <span>${data.reference}</span>
                        </p>
                    </div>
                    <div class="location__map">
                        <iframe
                            src="${data.mapSrc}"
                            width="100%"
                            height="350"
                            style="border:0;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    `,

    contact: (data) => `
        <section class="contact" id="contacto">
            <div class="container">
                <h2 class="section-title section-title--center fade-in">${data.title}</h2>
                <div class="contact__grid">
                    ${data.cards.map(card => `
                        <div class="contact__card fade-in">
                            ${card.image
                                ? `<img src="${card.image}" alt="${card.title}" class="contact__icon-img">`
                                : icon(card.icon, 'contact__icon')}
                            <h3>${card.title}</h3>
                            <p>${card.description}</p>
                            <a href="${card.href}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">${card.ctaLabel}</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `,

    footer: (data) => `
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__brand">
                    <img src="${data.logo}" alt="${data.logoAlt}" class="footer__logo">
                    <span>${data.brand}</span>
                </div>
                <div class="footer__social">
                    <a href="${data.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <img src="img/whatsapp.png" alt="WhatsApp" class="footer__social-icon">
                    </a>
                    <a href="${data.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        ${icon(data.instagramIcon, 'footer__social-svg')}
                    </a>
                </div>
                <p class="footer__copy">${data.copy}</p>
            </div>
        </footer>
    `,

    page: (data) => `
        ${Templates.header(data)}
        <main>
            ${Templates.hero(data.hero)}
            ${Templates.about(data.about)}
            ${Templates.services(data.services)}
            ${Templates.products(data.products)}
            ${Templates.gallery(data.gallery)}
            ${Templates.hours(data.hours)}
            ${Templates.location(data.location)}
            ${Templates.contact(data.contact)}
        </main>
        ${Templates.footer(data.footer)}
    `
};
