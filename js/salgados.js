/**
 * Página Salgados - Cardápio digital
 * Modal e interações - mesmo padrão dos doces
 */

document.addEventListener('DOMContentLoaded', () => {
    initSalgadosModal();
    initSalgadosCardClick();
});

// ============================================
// MODAL SALGADOS
// ============================================
const SALGADOS_DATA = {};

function initSalgadosModal() {
    document.querySelectorAll('.salgados-card').forEach((card) => {
        const id = card.getAttribute('data-salgados-id');
        const imagesJson = card.getAttribute('data-images');
        const images = imagesJson ? JSON.parse(imagesJson) : [];
        const title = card.querySelector('h3')?.textContent || '';
        const description = card.querySelector('.produto-info p')?.textContent || '';
        const price = card.querySelector('.produto-price')?.textContent || '';
        const whatsappProduct = card.querySelector('[data-product]')?.getAttribute('data-product') || `${title} - ${price}`;

        SALGADOS_DATA[id] = { id, images, title, description, price, whatsappProduct };
    });

    const overlay = document.getElementById('salgados-modal-overlay');
    const closeBtn = document.getElementById('salgados-modal-close');
    const carouselEl = document.getElementById('salgados-modal-carousel');
    const prevBtn = document.getElementById('salgados-modal-prev');
    const nextBtn = document.getElementById('salgados-modal-next');
    const whatsappBtn = document.getElementById('salgados-modal-whatsapp-btn');

    let modalImages = [];
    let modalIndex = 0;

    function openModal(salgadosId) {
        const data = SALGADOS_DATA[salgadosId];
        if (!data) return;

        modalImages = data.images;
        modalIndex = 0;

        carouselEl.innerHTML = modalImages
            .map((src) => `<img src="${src}" alt="${data.title}">`)
            .join('');

        document.getElementById('salgados-modal-title').textContent = data.title;
        document.getElementById('salgados-modal-description').textContent = data.description;
        document.getElementById('salgados-modal-price').textContent = data.price;
        whatsappBtn?.setAttribute('data-product', data.whatsappProduct);

        const showNav = modalImages.length > 1;
        prevBtn.style.display = showNav ? 'flex' : 'none';
        nextBtn.style.display = showNav ? 'flex' : 'none';
        carouselEl.style.transform = `translateX(0)`;

        overlay?.classList.add('is-open');
        overlay?.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay?.classList.remove('is-open');
        overlay?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function updateModalCarousel() {
        if (!carouselEl) return;
        carouselEl.style.transform = `translateX(-${modalIndex * 100}%)`;
    }

    prevBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (modalImages.length <= 1) return;
        modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
        updateModalCarousel();
    });

    nextBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (modalImages.length <= 1) return;
        modalIndex = (modalIndex + 1) % modalImages.length;
        updateModalCarousel();
    });

    window.openSalgadosModal = openModal;
    window.closeSalgadosModal = closeModal;

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
// CLIQUE NO CARD ABRE MODAL
// ============================================
function initSalgadosCardClick() {
    document.querySelectorAll('.salgados-card').forEach((card) => {
        card.addEventListener('click', (e) => {
            const isLink = e.target.closest('a') || e.target.closest('button');
            if (isLink && !e.target.closest('[data-open-salgados-modal]')) return;

            const salgadosId = card.getAttribute('data-salgados-id');
            if (salgadosId) {
                window.openSalgadosModal?.(salgadosId);
            }
        });
    });

    document.querySelectorAll('[data-open-salgados-modal]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.salgados-card');
            const salgadosId = card?.getAttribute('data-salgados-id');
            if (salgadosId) {
                window.openSalgadosModal?.(salgadosId);
            }
        });
    });
}
