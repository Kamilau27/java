'use strict';
const urlApi = 
const $botton1 = document.getElementById('btn1');
const $botton2 = document.getElementById('btn2');

$botton1.addEventListener('click' , obtenerPato1);
$botton2.addEventListener('click' , obtenerPato2);

function obtenerPato1(){
    fetch (urlApi)
    .then((respuesta) => respuesta.json())
    .then((objeto) => console.log('camino exitoso' , objeto))
    .catch((error) => console.log('camino fallido' , error));
}

//botton 2

async function obtenerPato2 (){
    try {
        const respuesta = await fetch(urlApi);
        const objeto = await respuesta.json();
        console.log('camino feliz' , objeto);
    } catch (error) {
        console.log('camino triste' , error);
    }
}