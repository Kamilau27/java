'use strict';
const urlApi = "https://random-d.uk/api/v2/random"
const $boton1 = document.getElementById('btn1');
const $boton2 = document.getElementById('btn2');
const $imagen = document.querySelector("img");

$boton1.addEventListener('click' , obtenerPato1);
$boton2.addEventListener('click' , obtenerPato2);

function obtenerPato1(){
    fetch (urlApi)
    .then((respuesta) => respuesta.json())
    .then((objeto) => console.log('camino exitoso' , objeto))
    .catch((error) => console.log('camino fallido' , error));
}

//botton 2

async function obtenerPato2 (){
    try {
        let respuesta = await fetch(urlApi);
        respuesta = await respuesta.json();
        $imagen.src = respuesta.url;
    } catch (error) {
        alert ('camino triste' , error);
    }
}

