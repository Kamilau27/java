'use strict';



document.addEventListener("DOMContentLoaded", () => {
    obtenerPokemon ('https://pokeapi.co/api/v2/pokemon/');
});

async function obtenerPokemon(url) {
    try {
        switchcargando();
        let pokemons = await fetch(url);
        pokemons = await pokemons.json();
        mostrarPokemons(pokemons.results, pokemons.previous, pokemons.next);
    } catch (error){
    } finally {
        switchcargando();
    }
}
 

function switchcargando() {
    const $switch = document.getElementById("switch");
    $switch.classList.toggle("d-none");
}

function mostarModal(tipo, datos) {
    const $modal = new bootstrap.Modal(document.getElementById('modal'));
    const $titulo = document.querySelector('.modal-title');
    const $contenido = document.querySelector('.modal-body');
    console.log($contenido);

    if (tipo === "error") {
        $titulo.textContent = 'ocurrio un error';
        $contenido.textContent = 'ocurrio un error';
    }
    if (tipo === 'pokemon') {
        $titulo.textContent = `${datos.name}`; 
        $contenido.innerHTML = `<div class="card text-warning mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${datos.sprites.back_default}" class="img-fluid rounded-start" alt="Imagen de ${datos.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Experiencia: ${datos.base_experience}</h5>
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action list-group-item-warning"> Peso de "${datos.name}" : ${datos.weight} </a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-warning"> Altura de ${datos.name} : ${datos.height} </a>
              </div> 
            </div>
          </div>
        </div>
      </div>`;
    }
    $modal.toggle();

}

async function mostrarPokemons(pokemons, previous, next) {
    const $main = document.querySelector('main');
    let contenidoHtml = '';
    for (let i = 0; i< pokemons.length ; i++ ){
        const pokemon = pokemons [i];
        const detallePokemon = await obtenerDetallePokemon(pokemon.url);
        console.log(detallePokemon);
        contenidoHtml = contenidoHtml + `<div class="card";">
        <img src="${detallePokemon.sprites.front_default}" class="card-img-top" alt="Imagen ${pokemon.name}">
        <div class="card-body">
          <h5 class="card-title text-capitalize">${pokemon.name}</h5>
          <button type="button" class="btn btn-outline-warning" id="${detallePokemon.id}">Warning</button>
        </div>
      </div>`;
    }
    contenidoHtml += `<div class="btn-group" role="group" aria-label="Basic outlined example">
    ${
        previous
        ? `<button type="button" class="btn btn-outline-warning" id="left">Left</button>`
        :''
    }
    ${
        next 
        ? `<button type="button" class="btn btn-outline-warning" id="rigth">Right</button>`
        :''
    }
  </div>` 
    $main.innerHTML = contenidoHtml;
    vigilarClick(previous, next);
}

async function obtenerDetallePokemon(url) {
    try {
        switchcargando();
        const pokemon = await fetch(url);
        return await pokemon.json();
    } catch (error){
    } finally {
        switchcargando();
    }
}


function vigilarClick(urlPrevious, urlNext) {
    const $botonesInfo =  document.querySelectorAll(".btn-outline-warning");
    const $botonLeft = document.getElementById("left");
    const $botonRigth = document.getElementById("rigth");
    
    let i = 0 
    while (i < $botonesInfo.length) {
        const $boton = $botonesInfo[i];
        $boton.addEventListener("click", ()=> {
            mostrarPokemon($boton.id);
        })
        i++;
    }

    if ($botonLeft) {
        $botonLeft.addEventListener('click', () => {
            obtenerPokemon(urlPrevious);
        });
    }
    if ($botonRigth) {
        $botonRigth.addEventListener('click', () => {
            obtenerPokemon(urlNext);
        });
    }

}

function mostrarPokemon(id) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id) 
    .then((respuesta) => {
        switchcargando();
        return respuesta.json();
    })
    .then((datos) => {
        mostarModal('pokemon', datos);
        console.log('datos', datos);
    })   
    .catch((error) => {
        console.log(error);
        mostarModal('error');
    })
    .finally(() =>{
        switchcargando();
    })

 
}

