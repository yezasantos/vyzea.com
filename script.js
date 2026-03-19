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

const conteudos = [
    {
        hero: 'capa2.png',
        detail: 'vertical2.png',
        titulo: "Met Gala 2023: looks que marcaram o "Oscar" da moda",
        texto: "O tapete vermelho agitou a noite com produções em homenagem ao saudoso Karl Largerfeld."
    },
    {
        hero: 'capa3.png', // Substitua pelos seus arquivos reais
        detail: 'vertical3.png',
        titulo: "Victoria's Secret anuncia volta com novidades",
        texto: "Agora a diversidade deve tomar conta das passarelas levando um tom de realidade necessário."
    },
    {
        hero: 'capa4.jpg',
        detail: 'vertical4.png',
        titulo: "6 álbuns para quem quer conhecer o R&B contemporâneo",
        texto: "O R&B é um estilo clássico que já passou por inúmeras transformações desde que esse termo de fato foi oficializado, na década de 40, ao substituir o que chamavam de Race Music."
    }
];

function atualizarPagina(indice) {
    const mainContent = document.getElementById('main-content');
    const heroImg = document.getElementById('hero-img');
    const detailImg = document.getElementById('detail-img');
    const titulo = document.getElementById('titulo-principal');
    const texto = document.getElementById('texto-corpo');

    // Efeito de saída
    mainContent.style.opacity = 0;

    setTimeout(() => {
        const data = conteudos[indice];
        
        heroImg.src = data.hero;
        detailImg.src = data.detail;
        titulo.innerText = data.titulo;
        texto.innerText = data.texto;

        // Efeito de entrada
        mainContent.style.opacity = 1;
    }, 300);
}
