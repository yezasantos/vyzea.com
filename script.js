function mudarConteudo(id) {
    const mainImg = document.getElementById('main-img');
    const detailImg = document.getElementById('detail-img');
    const titulo1 = document.getElementById('txt-titulo1');
    const titulo2 = document.getElementById('txt-titulo2');
    const corpo = document.getElementById('txt-corpo');
    const container = document.getElementById('content-area');

    // Banco de dados das suas histórias
    const historias = {
        1: {
            main: 'capa2.png',
            detail: 'vertical2.png',
            t1: "Met Gala 2023:",
            t2: "looks que marcaram o 'Oscar' da moda",
            txt: "O tapete vermelho agitou a noite com produções em homenagem ao saudoso estilista Karl Largerfeld."
        },
        2: {
            main: 'capa3.png', // Substitua pelo nome da sua imagem de capa 2
            detail: 'vertical2.png', // Substitua pelo nome da sua imagem vertical 2
            t1: "Victoria's Secret",
            t2: "anuncia volta com novidades",
            txt: "Agora a diversidade deve tomar conta das passarelas levando um tom de realidade necessário."
        },
        3: {
            main: 'capa4.jpg', 
            detail: 'vertical3.png',
            t1: "6 álbuns pra quem quer conhecer",
            t2: "o R&B contemporâneo",
            txt: "O R&B é um estilo clássico que já passou por inúmeras transformações desde que esse termo de fato foi oficializado, na década de 40, ao substitui o que chamavam de Race Music."
        }
    };

    // Efeito suave: diminui a opacidade, troca o texto e volta a opacidade
    container.style.opacity = 0;

    setTimeout(() => {
        const h = historias[id];
        mainImg.src = h.main;
        detailImg.src = h.detail;
        titulo1.innerText = h.t1;
        titulo2.innerText = h.t2;
        corpo.innerText = h.txt;
        
        container.style.opacity = 1;
    }, 400); // Tempo da transição
}
