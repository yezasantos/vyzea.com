/**
 * Função para trocar todo o conteúdo editorial (Imagens, Textos e Links)
 * Ordem dos parâmetros: Foto Capa, Título Parte 1, Título Parte 2, Texto, Foto Vertical, LINK DA PÁGINA
 */
function trocarConteudo(nomeArquivo, titulo1, titulo2, novoTexto, nomeArquivoVertical, linkDestino) {
    const imagemPrincipal = document.getElementById('main-img');
    const imagemVertical = document.getElementById('vertical-img');
    const span1 = document.querySelector('.first-part');
    const span2 = document.querySelector('.second-part');
    const paragrafo = document.querySelector('.body-text');

    // 1. Seleciona todos os links <a> que envolvem a imagem, título e texto
    // Usamos o seletor 'a' dentro das seções específicas para não afetar o menu
    const linksDaMateria = document.querySelectorAll('.hero-image-container a, .editorial-titles a, .featured-detail a, .editorial-text-content a');

    // Agrupamos os elementos que vão sofrer o efeito de fade
    const elementos = [imagemPrincipal, imagemVertical, span1, span2, paragrafo];

    // 2. Inicia o Fade Out (fica invisível)
    elementos.forEach(el => {
        if (el) el.style.opacity = 0;
    });

    setTimeout(() => {
        // 3. Troca os conteúdos (Imagens e Textos)
        if (imagemPrincipal) imagemPrincipal.src = nomeArquivo;
        if (imagemVertical) imagemVertical.src = nomeArquivoVertical;
        if (span1) span1.innerText = titulo1;
        if (span2) span2.innerText = titulo2;
        if (paragrafo) paragrafo.innerText = novoTexto;

        // 4. Troca o destino de todos os links (href)
        linksDaMateria.forEach(link => {
            if (link) link.href = linkDestino;
        });

        // 5. Volta a opacidade (Fade In)
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
