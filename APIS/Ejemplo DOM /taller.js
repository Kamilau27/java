'use strict';

const $boton1 = document.getElementById("boton1") 
const $resultado = document.getElementById("resultado")

$boton1.addEventListener (
    'click',
    ()=> {
        console.log('click...');
        let contenidoHtml = '';
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                contenidoHtml += `<span>BitIntituto, </span>`;
            } else if (i % 3 === 0) {
                contenidoHtml += `<span>BIT, </span>`;
            } else if (i % 5 === 0) {
                if (i === 100) {
                    contenidoHtml += `<span>Instituto. </span>`;
                }  else {
                    contenidoHtml += `<span>Instituto, </span>`;
                }
            } else {
                contenidoHtml += `<span>${i}, </span>`;
            }
        }
        $resultado.innerHTML = contenidoHtml;
    },
    { once: true}
);