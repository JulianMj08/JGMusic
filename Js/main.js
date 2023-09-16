// DECLARACION DE CONSTANTES PARA MANIPULAR LOS ELEMENTOS HTML
const imagenUno = document.getElementById("img-1");
const imagenDos = document.getElementById("img-2");
const imagenTres = document.getElementById("img-3");
const imagenCuatro = document.getElementById("img-4");
const imagenCinco = document.getElementById("img-5");
const imagenSeis = document.getElementById("img-6");



// BOTONES ATRAS Y ADELANTE DEL CARRUSEL
const atras = document.querySelector(".contenedor-atras");
const siguiente = document.querySelector(".contenedor-siguiente");


// EVENTOS
atras.addEventListener('click', moverAtras);
siguiente.addEventListener('click', moverAdelante);

//POSICION ACTUAL DEL CARRUSEL
let posicionActual = 0;


//FUNCIONES

function moverAtras() {
    // RESTA 50% A LA POSICION ACTUAL 
    if (posicionActual > -300){
        posicionActual -= 50;
        // APLICA LA TRANSFORMACION DE LAS IMAGENES
    imagenUno.style.transform = `translateX(${posicionActual}%)`;
    imagenDos.style.transform = `translateX(${posicionActual}%)`;
    imagenTres.style.transform = `translateX(${posicionActual}%)`;
    imagenCuatro.style.transform = `translateX(${posicionActual}%)`;
    imagenCinco.style.transform = `translateX(${posicionActual}%)`;
    imagenSeis.style.transform = `translateX(${posicionActual}%)`;
    };
};

function moverAdelante() {
    if(posicionActual < 0){
        posicionActual += 50;
        imagenUno.style.transform = `translateX(${posicionActual}%)`;
        imagenDos.style.transform = `translateX(${posicionActual}%)`;
        imagenTres.style.transform = `translateX(${posicionActual}%)`;
        imagenCuatro.style.transform = `translateX(${posicionActual}%)`;
        imagenCinco.style.transform = `translateX(${posicionActual}%)`;
        imagenSeis.style.transform = `translateX(${posicionActual}%)`;
    };
};
