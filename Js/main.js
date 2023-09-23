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
let cancionUno = document.querySelector("#id1");
let cancionDos = document.querySelector("#id2");
let cancionTres = document.querySelector("#id3");
let cancionCuatro = document.querySelector("#id4");
let cancionCinco = document.querySelector("#id5");
let cancionSeis = document.querySelector("#id6");
let cancionSiete = document.querySelector("#id7");
let cancionOcho = document.querySelector("#id8");
let cancionNueve = document.querySelector("#id9");
let cancionDiez = document.querySelector("#id10");
let cancionOnce = document.querySelector("#id11");
let cancionDoce = document.querySelector("#id12");
let cancionTrece = document.querySelector("#id13");
let cancionCatorce = document.querySelector("#id14");
let cancionQuince = document.querySelector("#id15");
let cancionDiezYSeis = document.querySelector("#id16");
let cancionDiezYSiete = document.querySelector("#id17");
let cancionDiezYOcho = document.querySelector("#id18");
let cancionDiezYNueve = document.querySelector("#id19");
let cancionVeinte = document.querySelector("#id20");
let cancionVeintiUno = document.querySelector("#id21");
let cancionVeintiDos = document.querySelector("#id22");
let cancionVeintiTres = document.querySelector("#id23");
let cancionVeintiCuatro = document.querySelector("#id24");
const pagInicio = document.getElementById("inicio");
const titulo = document.querySelector(".titulo");
const generoElectronica = document.getElementById("electronica");
const generoReggaeton = document.getElementById("reggaeton");
const generoBachata = document.getElementById("bachata");
const generoVallenato = document.getElementById("vallenato");
const generoSalsa = document.getElementById("salsa");
const generoRock = document.getElementById("rock");







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
pagInicio.addEventListener('click', volverInicio);
titulo.addEventListener('click', volverInicio);
generoElectronica.addEventListener('click', cancionesElectronica);
generoReggaeton.addEventListener('click', cancionesReggaeton);
generoBachata.addEventListener('click', cancionesBachata);
generoVallenato.addEventListener('click', cancionesVallenato);
generoSalsa.addEventListener('click', cancionesSalsa);
generoRock.addEventListener('click', cancionesRock);




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

function volverInicio() {
    listReggaeton.classList.remove("activo");
    listElectronica.classList.remove("activo");
    listBachata.classList.remove("activo");
    listvallenato.classList.remove("activo");
    listSalsa.classList.remove("activo");
    listRock.classList.remove("activo");
}


// CONEXION POR MEDIO DE AJAX PARA HACER USO DE LOS OBEJTOS JSON
window.onload = function() {

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
        cancionUno.addEventListener('click', playPista);
        cancionDos.addEventListener('click', playPista);
        cancionTres.addEventListener('click', playPista);
        cancionCuatro.addEventListener('click', playPista);
        cancionCinco.addEventListener('click', playPista);
        cancionSeis.addEventListener('click', playPista);
        cancionSiete.addEventListener('click', playPista);
        cancionOcho.addEventListener('click', playPista);
        cancionNueve.addEventListener('click', playPista);
        cancionDiez.addEventListener('click', playPista);
        cancionOnce.addEventListener('click', playPista);
        cancionDoce.addEventListener('click', playPista);
        cancionTrece.addEventListener('click', playPista);
        cancionCatorce.addEventListener('click', playPista);
        cancionQuince.addEventListener('click', playPista);
        cancionDiezYSeis.addEventListener('click', playPista);
        cancionDiezYSiete.addEventListener('click', playPista);
        cancionDiezYOcho.addEventListener('click', playPista);
        cancionDiezYNueve.addEventListener('click', playPista);
        cancionVeinte.addEventListener('click', playPista);
        cancionVeintiUno.addEventListener('click', playPista);
        cancionVeintiDos.addEventListener('click', playPista);
        cancionVeintiTres.addEventListener('click', playPista);
        cancionVeintiCuatro.addEventListener('click', playPista);
        this.audio.controls.backgrounColor = "#00b0ff";

        function playPista() {
            let audio = document.getElementById("sonido");
            let source = audio.querySelector("source");
        
            // DETERMINA EN CUAL CANCION SE HIZO CLICK
            let playCancion;

            if (this.id === "id1") {
                playCancion = canciones[0];
            } else if (this.id === "id2") {
                playCancion = canciones[1];
            } else if (this.id === "id3") {
                playCancion = canciones[2];
            } else if (this.id === "id4") {
                playCancion = canciones[3];
            } else if (this.id === "id5") {
                playCancion = canciones[4];
            } else if (this.id === "id6") {
                playCancion = canciones[5];
            } else if (this.id === "id7") {
                playCancion = canciones[6];
            } else if (this.id === "id8") {
                playCancion = canciones[7];
            } else if (this.id === "id9") {
                playCancion = canciones[8];
            } else if (this.id === "id10") {
                playCancion = canciones[9];
            } else if (this.id === "id11") {
                playCancion = canciones[10];
            } else if (this.id === "id12") {
                playCancion = canciones[11];
            } else if (this.id === "id13") {
                playCancion = canciones[12];
            } else if (this.id === "id14") {
                playCancion = canciones[13];
            } else if (this.id === "id15") {
                playCancion = canciones[14];
            }  else if (this.id === "id16") {
                playCancion = canciones[15];
            } else if (this.id === "id17") {
                playCancion = canciones[16];
            } else if (this.id === "id18") {
                playCancion = canciones[17];
            } else if (this.id === "id19") {
                playCancion = canciones[18];
            } else if (this.id === "id20") {
                playCancion = canciones[19];
            } else if (this.id === "id21") {
                playCancion = canciones[20];
            } else if (this.id === "id22") {
                playCancion = canciones[21];
            } else if (this.id === "id23") {
                playCancion = canciones[22];
            } else if (this.id === "id24") {
                playCancion = canciones[23];
            }
            if (playCancion) {
                source.src = playCancion.url;
                audio.load();
                audio.play();
            }
        } 
    }

    xhr.send();
}


 /*function playPista() {
            for (var index = 0; index < canciones.length; index++) {
                //console.log(element);   
                /*cancionDos = canciones[1];
                cancionTres = canciones[2];
                cancionCuatro = canciones[3];

            /*console.log(cancionDos);
            console.log(cancionTres);
            console.log(cancionCuatro);

            var audio2 = document.getElementById("sonido2");
            var source2 = audio2.querySelector("#sourceDos");

            
            
            }
            source2.src = canciones[index].url;
            audio2.load();*/
            
            

            
            //audio2.play();
