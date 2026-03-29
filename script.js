/**
 * Função para trocar todo o conteúdo editorial (Imagens e Textos)
 * Ordem dos parâmetros: Foto Capa, Título Parte 1, Título Parte 2, Texto, Foto Vertical
 */
function trocarConteudo(nomeArquivo, titulo1, titulo2, novoTexto, nomeArquivoVertical) {
    const imagemPrincipal = document.getElementById('main-img');
    const imagemVertical = document.getElementById('vertical-img');
    const span1 = document.querySelector('.first-part');
    const span2 = document.querySelector('.second-part');
    const paragrafo = document.querySelector('.body-text');

    // Agrupamos os elementos que vão sofrer o efeito de fade
    const elementos = [imagemPrincipal, imagemVertical, span1, span2, paragrafo];

    // 1. Inicia o Fade Out (fica invisível)
    elementos.forEach(el => {
        if (el) el.style.opacity = 0;
    });

    setTimeout(() => {
        // 2. Troca os conteúdos durante a "piscada"
        if (imagemPrincipal) imagemPrincipal.src = nomeArquivo;
        if (imagemVertical) imagemVertical.src = nomeArquivoVertical;
        if (span1) span1.innerText = titulo1;
        if (span2) span2.innerText = titulo2;
        if (paragrafo) paragrafo.innerText = novoTexto;

        // 3. Volta a opacidade (Fade In)
        elementos.forEach(el => {
            if (el) el.style.opacity = 1;
        });
    }, 250); // Tempo da transição
}

/**
 * Função para carregar o menu (Mantida conforme seu original)
 */
function carregarMenu() {
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        fetch('index.html')
            .then(response => response.text())
            .then(data => {
                menuContainer.innerHTML = data;
            });
    }
}

window.onload = carregarMenu;

/**
 * Lógica para fechar o dropdown (Mantida conforme seu original)
 */
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon') && !event.target.closest('.menu-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
