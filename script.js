// A função agora aceita 5 parâmetros
function trocarConteudo(novaImagem, tituloParte1, tituloParte2, novoTexto, novaImagemVertical) {
    
    // 1. Troca a imagem principal (capa)
    const imgPrincipal = document.getElementById('main-img');
    if (imgPrincipal) imgPrincipal.src = novaImagem;

    // 2. Troca a imagem vertical (detalhe)
    const imgVertical = document.getElementById('vertical-img');
    if (imgVertical) imgVertical.src = novaImagemVertical;

    // 3. Troca as duas partes do título
    const span1 = document.querySelector('.first-part');
    const span2 = document.querySelector('.second-part');
    
    if (span1) span1.innerText = tituloParte1;
    if (span2) span2.innerText = tituloParte2;

    // 4. Troca o parágrafo da matéria
    const paragrafo = document.querySelector('.body-text');
    if (paragrafo) paragrafo.innerText = novoTexto;
}
    
    // Adiciona um efeito de fade out (opcional, requer o CSS abaixo)
    imagemPrincipal.style.opacity = 0;

    setTimeout(() => {
        // Troca o caminho da imagem
        imagemPrincipal.src = nomeArquivo;
        // Volta a opacidade
        imagemPrincipal.style.opacity = 1;
    }, 250); // Tempo da piscada em milissegundos
}
function carregarMenu() {
    fetch('index.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        });
}
window.onload = carregarMenu;

// Fecha o dropdown se o usuário clicar fora dele
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
