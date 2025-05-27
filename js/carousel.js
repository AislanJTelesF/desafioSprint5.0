

//carousel

//class Carousel
class Carousel {

    constructor(imagem, texto, link) {
        this.imagem = imagem;
        this.texto = texto;
        this.link = link;
    }
      
    // static Start(arr){
    //     if(arr){

    //         if(arr.length > 0){
    //             Carousel._sequence = 0;
    //             Carousel._size = arr.length;
    //             Carousel.Next(); //start
    //             Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
    //         }
            
    //     } else {
    //         throw "Method Start need a Array Variable.";
    //     }
    // }

    // static Next(){
        
    // }
};

//Array storage class
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
    setInterval(nextSlide, 2000); // mudar a cada 2 segundos
};