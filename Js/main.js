// DECLARACION DE CONSTANTES PARA MANIPULAR LOS ELEMENTOS HTML
const imagenUno = document.getElementById("img-1");
const imagenDos = document.getElementById("img-2");
const imagenTres = document.getElementById("img-3");
const imagenCuatro = document.getElementById("img-4");
const imagenCinco = document.getElementById("img-5");
const imagenSeis = document.getElementById("img-6");
const listReggaeton = document.querySelector(".lista-reproduccion-reggaeton");
const listElectronica = document.querySelector(".lista-reproduccion-electronica");
const listBachata = document.querySelector(".lista-reproduccion-bachata");
const listvallenato = document.querySelector(".lista-reproduccion-vallenato");
const listSalsa = document.querySelector(".lista-reproduccion-salsa");
const listRock = document.querySelector(".lista-reproduccion-rock");
const cambiaColorCuatro = document.querySelector(".cambiacolor-4")



// BOTONES ATRAS Y ADELANTE DEL CARRUSEL
const atras = document.querySelector(".contenedor-atras");
const siguiente = document.querySelector(".contenedor-siguiente");


// EVENTOS
atras.addEventListener('click', moverAtras);
siguiente.addEventListener('click', moverAdelante);
imagenDos.addEventListener('click', cancionesReggaeton);
imagenUno.addEventListener('click', cancionesElectronica);
imagenTres.addEventListener('click', cancionesBachata);
imagenCuatro.addEventListener('click', cancionesVallenato);
imagenCinco.addEventListener('click', cancionesSalsa);
imagenSeis.addEventListener('click', cancionesRock);




//POSICION ACTUAL DEL CARRUSEL
let posicionActual = 0;


//FUNCIONES
function moverAdelante() {
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

function moverAtras() {
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

function cancionesReggaeton() {
    listReggaeton.classList.toggle("activo");
  }

function cancionesElectronica() {
    listElectronica.classList.toggle("activo");
  }

function cancionesBachata() {
    listBachata.classList.toggle("activo");
  }

function cancionesVallenato() {
    listvallenato.classList.toggle("activo");
}  

function cancionesSalsa() {
    listSalsa.classList.toggle("activo");
}

function cancionesRock() {
    listRock.classList.toggle("activo");
}

// CONEXION POR MEDIO DE AJAX PARA HACER USO DE LOS OBEJTOS JSON
function cargaDatos() {

    var xhr = new XMLHttpRequest();

    const url = "canciones.json";
    
    xhr.open("GET", url, true);
    
    xhr.onload = function () {
        if(xhr.status === 200) {
            var canciones = JSON.parse(xhr.responseText);
            console.log(canciones);
        }else {
            console.error("Error al cargar las canciones");
        }
        
    }
    xhr.send();
}

cargaDatos();
