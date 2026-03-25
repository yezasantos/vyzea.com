function trocarImagem(nomeArquivo) {
    const imagemPrincipal = document.getElementById('main-img');
    
    // Adiciona um efeito de fade out (opcional, requer o CSS abaixo)
    imagemPrincipal.style.opacity = 0;

    setTimeout(() => {
        // Troca o caminho da imagem
        imagemPrincipal.src = nomeArquivo;
        // Volta a opacidade
        imagemPrincipal.style.opacity = 1;
    }, 250); // Tempo da piscada em milissegundos
}
function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

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
