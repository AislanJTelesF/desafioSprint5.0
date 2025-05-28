class Carousel {

    constructor(imagem, texto, link) {
        this.imagem = imagem;
        this.texto = texto;
        this.link = link;
    }
      
};

const carouselArr = [];

let currentIndex = 0;

function mostrarSlide(index) {
    const item = carouselArr[index];
    document.getElementById('carousel__imagem').src = item.imagem; 
    document.getElementById('carousel__paragrafo').innerText = item.texto;
    document.getElementById('carousel__link').href = item.link;
}

function slideProximo() {
    currentIndex = (currentIndex + 1) % carouselArr.length;
    mostrarSlide(currentIndex);
}

function slideAnterior() {
    currentIndex = (currentIndex - 1 +carouselArr.length) % carouselArr.length;
    mostrarSlide(currentIndex);
}

window.onload = () => {
    mostrarSlide(currentIndex);
    setInterval(slideProximo, 3000); // mudar a cada 3 segundos
};