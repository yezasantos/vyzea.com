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
