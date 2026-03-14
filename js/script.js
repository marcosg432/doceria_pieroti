/**
 * Cardápio Digital - Ovos de Páscoa Artesanais
 * Landing page persuasiva para conversão via WhatsApp
 */

// ============================================
// CONFIGURAÇÃO - Altere o número para o seu WhatsApp
// ============================================
const CONFIG = {
    whatsappNumber: '5537988007241',
    defaultMessage: 'Olá! Gostaria de fazer um pedido.',
    floatMessage: 'Olá! Gostaria de mais informações sobre os produtos.',
    encomendaMessage: 'Olá, gostaria de fazer uma encomenda personalizada de Páscoa.'
};

// Dados dos produtos para o modal
const PRODUCT_DATA = {
    'brig-cappuccino': {
        name: 'Brigadeiro de cappuccino',
        description: 'Massa feita com chocolate 50% cacau, café solúvel e canela, passada no açúcar. O sabor do café em um brigadeiro cremoso.',
        ingredients: ['Chocolate 50% cacau', 'Café solúvel', 'Canela', 'Açúcar'],
        peso: 'Unidade',
        price: 'R$ 3,20',
        image: 'images/doces/doce_5.webp',
        whatsappMessage: 'Brigadeiro de cappuccino - R$ 3,20'
    },
    'ninho-nutella': {
        name: 'Brigadeiro de Ninho com Nutella',
        description: 'Massa feita com Leite Ninho, passada no Leite Ninho e finalizada com uma pitada de Nutella. Cremoso e irresistível.',
        ingredients: ['Leite Ninho', 'Nutella', 'Leite condensado'],
        peso: 'Unidade',
        price: 'R$ 6,00',
        image: 'images/doces/doce_17.webp',
        whatsappMessage: 'Brigadeiro de Ninho com Nutella - R$ 6,00'
    },
    'mini-hamburguer': {
        name: 'Mini hambúrguer',
        description: 'Pão brioche com mini hambúrguer de carne, queijo e maionese. Perfeito para um lanche saboroso.',
        ingredients: ['Pão brioche', 'Carne', 'Queijo', 'Maionese'],
        peso: 'Unidade',
        price: 'R$ 6,00',
        image: 'images/salgados/salgado-10.webp',
        whatsappMessage: 'Mini hambúrguer - R$ 6,00'
    },
    'trufa-belga': {
        name: 'Trufas de Chocolate Belga',
        description: 'Chocolate belga 70% cacau com recheio cremoso de trufa. Intensidade e suavidade para os amantes do chocolate amargo.',
        ingredients: ['Chocolate belga 70%', 'Creme de trufa', 'Cacau em pó'],
        peso: '400g',
        price: 'R$ 89,90',
        image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=80',
        whatsappMessage: 'Trufas de Chocolate Belga - R$ 89,90'
    },
    'coco-maracuja': {
        name: 'Macarons Gourmet',
        description: 'Delicados macarons artesanais com recheio cremoso em diversos sabores. A textura crocante por fora e macia por dentro.',
        ingredients: ['Amêndoas', 'Açúcar', 'Recheios diversos'],
        peso: '6 unidades',
        price: 'R$ 79,90',
        image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80',
        whatsappMessage: 'Macarons Gourmet - R$ 79,90'
    },
    'ninho-nutella': {
        name: 'Caixa de Trufas',
        description: 'Seleção de trufas artesanais em sabores variados. Presente perfeito para ocasiões especiais.',
        ingredients: ['Chocolate belga', 'Sabores variados', 'Embalagem presente'],
        peso: '500g',
        price: 'R$ 94,90',
        image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=80',
        whatsappMessage: 'Caixa de Trufas - R$ 94,90'
    },
    'meio-amargo': {
        name: 'Chocolates com Avelã',
        description: 'Chocolates artesanais com avelãs crocantes e toque de flor de sal. Textura e sabor únicos para paladares refinados.',
        ingredients: ['Chocolate 55% cacau', 'Avelãs torradas', 'Flor de sal'],
        peso: '400g',
        price: 'R$ 84,90',
        image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
        whatsappMessage: 'Chocolates com Avelã - R$ 84,90'
    },
    brigadeiro: {
        name: 'Brigadeiro Gourmet',
        description: 'Brigadeiros artesanais feitos com chocolate belga e granulado especial. O clássico brasileiro elevado à excelência.',
        ingredients: ['Chocolate belga', 'Leite condensado', 'Granulado especial'],
        peso: '20 unidades',
        price: 'R$ 69,90',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
        whatsappMessage: 'Brigadeiro Gourmet - R$ 69,90'
    },
    brownie: {
        name: 'Brownie Artesanal',
        description: 'Brownie macio e intenso de chocolate, perfeito para quem ama doces ricos e marcantes. Pode incluir nozes.',
        ingredients: ['Chocolate meio amargo', 'Manteiga', 'Farinha de trigo'],
        peso: 'Fatia 400g',
        price: 'R$ 74,90',
        image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80',
        whatsappMessage: 'Brownie Artesanal - R$ 74,90'
    },
    'dois-amores': {
        name: 'Chocolates Sortidos',
        description: 'Seleção variada de chocolates artesanais em sabores ao leite, branco e meio amargo. Para quem não consegue escolher!',
        ingredients: ['Chocolate ao leite', 'Chocolate branco', 'Chocolate meio amargo'],
        peso: '350g',
        price: 'R$ 72,90',
        image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80',
        whatsappMessage: 'Chocolates Sortidos - R$ 72,90'
    },
    surpresa: {
        name: 'Beijinho Gourmet',
        description: 'Beijinhos artesanais com coco fresco e leite condensado. Cremosos, irresistíveis e o clássico sabor brasileiro.',
        ingredients: ['Leite condensado', 'Coco ralado', 'Manteiga'],
        peso: '20 unidades',
        price: 'R$ 54,90',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
        whatsappMessage: 'Beijinho Gourmet - R$ 54,90'
    },
    'kit-pascoa': {
        name: 'Kit Doces Especial',
        description: 'Kit completo para presentear: 2 caixas de trufas à sua escolha, 12 brigadeiros gourmet e embalagem presenteável.',
        ingredients: ['2 caixas de trufas', '12 brigadeiros gourmet', 'Embalagem presenteável'],
        peso: 'Aproximadamente 1kg',
        price: 'R$ 139,90',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
        whatsappMessage: 'Kit Doces Especial - R$ 139,90'
    },
    'kit-familia': {
        name: 'Kit Família Completo',
        description: 'O kit ideal para a família: 3 caixas de doces de 300g cada, 20 brigadeiros, 12 beijinhos e caixa presente premium.',
        ingredients: ['3 caixas de doces (300g cada)', '20 brigadeiros', '12 beijinhos', 'Caixa presente premium'],
        peso: 'Aproximadamente 1,5kg',
        price: 'R$ 219,90',
        image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80',
        whatsappMessage: 'Kit Família Completo - R$ 219,90'
    }
};

// ============================================
// WHATSAPP
// ============================================
function getWhatsAppUrl(message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

function openWhatsApp(message) {
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
}

function initWhatsAppButtons() {
    const buttons = document.querySelectorAll('[data-whatsapp]');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            let message = CONFIG.defaultMessage;

            if (button.classList.contains('whatsapp-float')) {
                message = CONFIG.floatMessage;
            } else if (button.hasAttribute('data-message')) {
                const msg = button.getAttribute('data-message');
                if (msg === 'personalizada') {
                    message = CONFIG.encomendaMessage;
                } else {
                    message = msg;
                }
            } else {
                const product = button.getAttribute('data-product');
                if (product) {
                    message = `Olá! Gostaria de pedir: ${product}`;
                }
            }

            openWhatsApp(message);
        });
    });
}

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-menu');

    /* Navbar sempre visível no topo */
    navbar?.classList.add('navbar--scrolled');

    function toggleMenu() {
        const isOpening = !menu?.classList.contains('is-open');
        toggle?.classList.toggle('is-active');
        menu?.classList.toggle('is-open');
        navbar?.classList.toggle('navbar--menu-open', isOpening);
        document.body.style.overflow = isOpening ? 'hidden' : '';
    }

    function closeMenu() {
        toggle?.classList.remove('is-active');
        menu?.classList.remove('is-open');
        navbar?.classList.remove('navbar--menu-open');
        document.body.style.overflow = '';
    }

    toggle?.addEventListener('click', toggleMenu);

    menu?.querySelectorAll('.navbar-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            if (link.classList.contains('navbar-link--has-submenu') && window.innerWidth <= 900) {
                e.preventDefault();
                const menuCardapio = link.closest('.menu-cardapio');
                menuCardapio?.classList.toggle('is-open');
                return;
            }
            closeMenu();
        });
    });

    menu?.querySelectorAll('.submenu-link').forEach((link) => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    menu?.querySelector('.btn-navbar')?.addEventListener('click', closeMenu);
}

// ============================================
// SCROLL SUAVE
// ============================================
function initSmoothScroll() {
    const scrollToSection = (selector) => {
        const target = document.querySelector(selector);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    document.querySelectorAll('a[href^="#"]:not([data-whatsapp])').forEach((anchor) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        anchor.addEventListener('click', (e) => {
            const targetEl = document.querySelector(href);
            if (targetEl) {
                e.preventDefault();
                scrollToSection(href);
            }
        });
    });

    const heroScroll = document.querySelector('[data-scroll-to]');
    if (heroScroll) {
        const targetId = heroScroll.getAttribute('data-scroll-to');
        heroScroll.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(`#${targetId}`);
        });
    }
}

// ============================================
// ANIMAÇÕES NO SCROLL
// ============================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
}

// ============================================
// HERO CARROSSEL
// ============================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let currentIndex = 0;
    const interval = 3000; // 3 segundos

    function nextSlide() {
        slides[currentIndex].classList.remove('hero-slide--active');
        slides[currentIndex].setAttribute('aria-hidden', 'true');

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add('hero-slide--active');
        slides[currentIndex].setAttribute('aria-hidden', 'false');
    }

    setInterval(nextSlide, interval);
}

// ============================================
// BOTÃO VOLTAR AO TOPO
// ============================================
function initBackToTop() {
    const button = document.getElementById('back-to-top');
    const scrollThreshold = 400;

    function updateVisibility() {
        if (window.scrollY > scrollThreshold) {
            button?.classList.add('is-visible');
        } else {
            button?.classList.remove('is-visible');
        }
    }

    window.addEventListener('scroll', updateVisibility);
    updateVisibility();
}

// ============================================
// MODAL PRODUTO
// ============================================
function initProductModal() {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('product-modal');
    const closeBtn = document.getElementById('modal-close');
    const whatsappBtn = document.getElementById('modal-whatsapp-btn');

    function openModal(productId) {
        const product = PRODUCT_DATA[productId];
        if (!product) return;

        document.getElementById('modal-img').src = product.image;
        document.getElementById('modal-img').alt = product.name;
        document.getElementById('modal-title').textContent = product.name;
        document.getElementById('modal-description').textContent = product.description;

        const ingredientsList = document.getElementById('modal-ingredients');
        ingredientsList.innerHTML = product.ingredients
            .map((ing) => `<li>${ing}</li>`)
            .join('');

        document.getElementById('modal-peso').textContent = `Peso aproximado: ${product.peso}`;
        document.getElementById('modal-price').textContent = product.price;

        whatsappBtn?.setAttribute('data-product', product.whatsappMessage);

        overlay?.classList.add('is-open');
        overlay?.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay?.classList.remove('is-open');
        overlay?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-open-modal]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const card = btn.closest('[data-product-id]');
            const productId = card?.getAttribute('data-product-id');
            if (productId) openModal(productId);
        });
    });

    closeBtn?.addEventListener('click', closeModal);

    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay?.classList.contains('is-open')) {
            closeModal();
        }
    });
}

// ============================================
// LAZY LOAD IMAGES
// ============================================
function initLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[src]:not([loading])').forEach((img) => {
            if (!img.closest('.hero')) {
                img.loading = 'lazy';
            }
        });
    }
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initBackToTop();
    initHeroSlider();
    initWhatsAppButtons();
    initSmoothScroll();
    initScrollAnimations();
    initProductModal();
    initLazyLoad();
});
