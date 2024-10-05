"use strict";

/*Funcion para llenar array con 9 numeros*/
function llenarArray() {

    let numeros = [];

    /*Genera los 9 númeoros mediante un bucle for y un do while por si se repite algun número no avanzar y volver a generarlo*/
    for (let i = 0; i < 9; i++) {
        let numeroGenerado;
        do {
            numeroGenerado = Math.floor(Math.random() * 9) + 1;
        } while (numeros.includes(numeroGenerado));
        numeros.push(numeroGenerado);
    }
    console.log(numeros);
    return numeros;
}

function comprobarNumeros(array) {
    var contador = {};
    for (var i = 0; i < array.length; i++) {
        /*Comprueba si en "contador" existe el numero de array[i], si es si, devuelve true*/
        if (contador[array[i]]) {
            return true; 
        }
        /*Almacena el valor */
        contador[array[i]] = true; 
    }

    /*Si no encuentra coincidencias devuelve false */
    return false;
}



console.log(comprobarNumeros(llenarArray()));
