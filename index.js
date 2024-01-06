'use strict';
// Preguntar nombre y responder hola, si no responder hola desconocido 

/*const nombre = prompt('Por favor ingrese su nombre');
if (nombre) {
    document.write('Hola,' + nombre);
} else {
    document.write('Hola, desconocido'); 
} */

// Preguntar nombre y responder hola, si no responder hola desconocido usando una FUNCION 

function saludar(){
    let nombre = prompt('Ingresar nombre');
    let apellido = prompt('Ingresar Apellido');

    if (nombre && apellido) {
        document.write(`Hola ${nombre} ${apellido}`);
    } else {
        document.write('Hola desconocido');
    }
}

saludar();

//leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol 

function accesoXrol (rol) {
    switch (rol) {
        case 'admin':
            return 'Acceso a la zona de adinistracion';
        case 'venta':
            return 'Acceso a la zona de vendedores';
        case 'cliente':
            return 'Acceso a la zona de clientes';
        default:
            return 'Acceso no autorizado';
        
    }
}

const retornado = accesoXrol(prompt ('Escriba su rol'));
document.write(retornado);

//Pedir un numero y mostrar los numeros pares desde 1 hasta n.
function pares(){
    let numero = prompt('Introduce el numero');
    let n = 1 
    const arr = []
    while (n <= numero) {
        let arr = n % 2 
        if (arr === 0){
            arr.push(n)
        }
    }
    return arr
}

document.write(pares());