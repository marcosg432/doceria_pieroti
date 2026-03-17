/**
 * Cardápio Completo - Categorias dinâmicas
 * Dados centralizados para Doces e Bolos
 * Uso: renderCardapioCategorias()
 */

const CARDAPIO_CATEGORIAS = {
    doces: {
        titulo: 'Doces',
        emoji: '🍫',
        categorias: [
            {
                nome: 'Tradicionais',
                imagem: 'images/doces/tradicionais/tradicional-1.webp',
                descricao: 'Brigadeiros, beijinhos e delícias clássicas feitas com carinho.',
                link: 'pages/doces.html',
                alt: 'Doces tradicionais'
            },
            {
                nome: 'Gourmet',
                imagem: 'images/doces/gourmet/gourmet-01.webp',
                descricao: 'Doces especiais com ingredientes selecionados e sabores únicos.',
                link: 'pages/gourmet.html',
                alt: 'Doces gourmet'
            },
            {
                nome: 'Bombons Tradicionais',
                imagem: 'images/bombons-tradicionais/bombom-tradicional-01.webp',
                descricao: 'Bombons artesanais com os sabores que você já conhece e ama.',
                link: 'pages/bombons-tradicionais.html',
                alt: 'Bombons tradicionais'
            },
            {
                nome: 'Bombons Finos',
                imagem: 'images/bombons-finos/bombom-fino-01.webp',
                descricao: 'Bombons refinados para paladares exigentes.',
                link: 'pages/bombons-finos.html',
                alt: 'Bombons finos'
            },
            {
                nome: 'Bombons Gourmet',
                imagem: 'images/bombons-gourmet/bombom-gourmet-01.webp',
                descricao: 'Bombons especiais com combinações sofisticadas de sabores.',
                link: 'pages/bombons-gourmet.html',
                alt: 'Bombons gourmet'
            },
            {
                nome: 'Bem Casados',
                imagem: 'images/bem-casados/bem-casados-01.webp',
                descricao: 'Bem casados artesanais para celebrar o amor.',
                link: 'pages/bem-casados.html',
                alt: 'Bem casados'
            }
        ]
    },
    bolos: {
        titulo: 'Bolos',
        emoji: '🎂',
        categorias: [
            {
                nome: 'Monte seu bolo',
                imagem: 'images/monte-seu-bolo/monte-seu-bolo.png',
                descricao: 'Monte seu bolo personalizado: massa, recheio, tamanho e cobertura.',
                link: 'pages/monte-seu-bolo.html',
                alt: 'Monte seu bolo'
            },
            {
                nome: 'Kit Kat e Naked Cake',
                imagem: 'images/bolos-kit-kat-naked-cake/bolo-01.webp',
                descricao: 'Bolos com cobertura Kit Kat ou estilo Naked Cake.',
                link: 'pages/bolos-kit-kat-naked-cake.html',
                alt: 'Bolos Kit Kat e Naked Cake'
            },
            {
                nome: 'Pasta Americana',
                imagem: 'images/bolos-pasta-americana/bolo-01.webp',
                descricao: 'Bolos decorados com pasta americana para festas especiais.',
                link: 'pages/bolos-pasta-americana.html',
                alt: 'Bolos pasta americana'
            },
            {
                nome: 'Chantininho',
                imagem: 'images/bolos-chantininho/bolo-01.webp',
                descricao: 'Bolos com cobertura de acetato (chantininho) ou lascas de chocolate.',
                link: 'pages/bolos-chantininho.html',
                alt: 'Bolos Chantininho'
            },
            {
                nome: 'Caixa Bentô Cake',
                imagem: 'images/caixa-bento-cake/bento-01.webp',
                descricao: 'Bolos em formato bentô, práticos e deliciosos.',
                link: 'pages/caixa-bento-cake.html',
                alt: 'Caixa Bentô Cake'
            },
            {
                nome: 'Bolo Vulcão',
                imagem: 'images/bolos-vulcao/vulcao-01.webp',
                descricao: 'Bolos vulcão com recheio cremoso derramando.',
                link: 'pages/bolos-vulcao.html',
                alt: 'Bolo Vulcão'
            }
        ]
    },
    personalizados: {
        titulo: 'Personalizados',
        emoji: '🎁',
        categorias: [
            {
                nome: 'Personalizados',
                imagem: 'images/personalizados/doces-personalizados-01.webp',
                descricao: 'Doces e bolos personalizados para sua data especial. Encomendas sob medida com todo o carinho.',
                link: 'pages/personalizados.html',
                alt: 'Doces personalizados'
            }
        ]
    }
};

/**
 * Renderiza os cards de categorias do cardápio
 * @param {Object} options - { docesContainerId, bolosContainerId }
 */
function renderCardapioCategorias(options = {}) {
    const docesId = options.docesContainerId || 'cardapio-doces-grid';
    const bolosId = options.bolosContainerId || 'cardapio-bolos-grid';
    const personalizadosId = options.personalizadosContainerId || 'cardapio-personalizados-grid';

    const renderGrupo = (grupo, containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const { titulo, emoji, categorias } = grupo;

        categorias.forEach((cat, i) => {
            const card = document.createElement('a');
            card.href = cat.link;
            card.className = 'cardapio-categoria-card';
            card.setAttribute('data-aos', '');
            if (cat.nome === 'Pasta Americana') card.setAttribute('data-categoria', 'pasta-americana');
            card.innerHTML = `
                <div class="cardapio-categoria-card-image">
                    <img src="${cat.imagem}" alt="${cat.alt}" loading="${i < 4 ? 'eager' : 'lazy'}" width="400" height="400">
                </div>
                <div class="cardapio-categoria-card-info">
                    <h3 class="cardapio-categoria-card-titulo">${cat.nome}</h3>
                    ${cat.descricao ? `<p class="cardapio-categoria-card-desc">${cat.descricao}</p>` : ''}
                    <span class="btn btn-primary btn-sm cardapio-categoria-card-btn">Ver mais</span>
                </div>
            `;
            container.appendChild(card);
        });
    };

    renderGrupo(CARDAPIO_CATEGORIAS.doces, docesId);
    renderGrupo(CARDAPIO_CATEGORIAS.bolos, bolosId);
    renderGrupo(CARDAPIO_CATEGORIAS.personalizados, personalizadosId);

    /* Inicializa animações nos cards dinâmicos (AOS) */
    const cards = document.querySelectorAll('.cardapio-categoria-card[data-aos]');
    if (cards.length && typeof IntersectionObserver !== 'undefined') {
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
        cards.forEach((el) => observer.observe(el));
    }
}
