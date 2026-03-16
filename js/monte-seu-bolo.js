/**
 * Monte seu Bolo - Seletor interativo e envio via WhatsApp
 * Cada grupo permite apenas uma escolha; resumo atualiza em tempo real.
 */

(function () {
    'use strict';

    const CONFIG = {
        whatsappNumber: '5537988007241'
    };

    const pedido = {
        massa: null,
        recheio: null,
        tamanho: null,
        cobertura: null
    };

    function getWhatsAppUrl(message) {
        return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    }

    function openWhatsApp(message) {
        window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    }

    function buildWhatsAppMessage() {
        if (!isPedidoCompleto()) return '';
        return [
            'Olá! Gostaria de fazer um pedido de bolo.',
            '',
            `Massa: ${pedido.massa}`,
            `Recheio: ${pedido.recheio}`,
            `Tamanho: ${pedido.tamanho}`,
            `Cobertura: ${pedido.cobertura}`
        ].join('\n');
    }

    function isPedidoCompleto() {
        return pedido.massa && pedido.recheio && pedido.tamanho && pedido.cobertura;
    }

    function buildResumoItems() {
        const items = [];
        if (pedido.massa) items.push({ label: 'Massa', valor: pedido.massa });
        if (pedido.recheio) items.push({ label: 'Recheio', valor: pedido.recheio });
        if (pedido.tamanho) items.push({ label: 'Tamanho', valor: pedido.tamanho });
        if (pedido.cobertura) items.push({ label: 'Cobertura', valor: pedido.cobertura });
        return items;
    }

    function updateResumo() {
        const section = document.querySelector('.monte-bolo-section');
        if (!section) return;

        const resumoVazio = section.querySelector('#monte-bolo-resumo-vazio');
        const resumoLista = section.querySelector('#monte-bolo-resumo-lista');
        const btnWhatsapp = section.querySelector('#monte-bolo-whatsapp');

        const items = buildResumoItems();

        if (resumoVazio) {
            resumoVazio.style.display = items.length === 0 ? 'block' : 'none';
        }

        if (resumoLista) {
            resumoLista.style.display = items.length === 0 ? 'none' : 'block';
            resumoLista.innerHTML = items
                .map((i) => `<li><strong>${escapeHtml(i.label)}:</strong> <span>${escapeHtml(i.valor)}</span></li>`)
                .join('');
        }

        if (btnWhatsapp) {
            const completo = isPedidoCompleto();
            btnWhatsapp.style.display = completo ? 'inline-flex' : 'none';
            btnWhatsapp.classList.toggle('monte-bolo-btn-disabled', !completo);
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function selecionarOpcao(opcao, valor) {
        pedido[opcao] = valor;

        const section = document.querySelector('.monte-bolo-section');
        if (!section) return;

        section.querySelectorAll('.monte-bolo-btn').forEach((btn) => {
            const btnOpcao = btn.getAttribute('data-opcao');
            const btnValor = btn.getAttribute('data-valor');
            if (btnOpcao === opcao) {
                btn.classList.toggle('is-selected', btnValor === valor);
            }
        });

        updateResumo();
    }

    function handleOpcaoClick(e) {
        const btn = e.target.closest('.monte-bolo-btn');
        if (!btn) return;

        e.preventDefault();

        const opcao = btn.getAttribute('data-opcao');
        const valor = btn.getAttribute('data-valor');

        if (opcao && valor) {
            selecionarOpcao(opcao, valor);
        }
    }

    function handleWhatsAppClick(e) {
        e.preventDefault();

        if (!isPedidoCompleto()) {
            const section = document.querySelector('.monte-bolo-section');
            const msg = section?.querySelector('.monte-bolo-resumo-vazio');
            if (msg) {
                msg.textContent = 'Selecione todas as opções antes de enviar.';
                msg.style.color = '#c0392b';
                setTimeout(() => {
                    msg.textContent = 'Selecione as opções acima para ver o resumo do seu bolo.';
                    msg.style.color = '';
                }, 3000);
            }
            return;
        }

        const message = buildWhatsAppMessage();
        if (message) {
            openWhatsApp(message);
        }
    }

    function initMonteBolo() {
        const section = document.querySelector('.monte-bolo-section');
        if (!section) return;

        section.addEventListener('click', (e) => {
            if (e.target.closest('.monte-bolo-btn')) {
                handleOpcaoClick(e);
                return;
            }
            if (e.target.closest('#monte-bolo-whatsapp')) {
                handleWhatsAppClick(e);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMonteBolo);
    } else {
        initMonteBolo();
    }
})();
