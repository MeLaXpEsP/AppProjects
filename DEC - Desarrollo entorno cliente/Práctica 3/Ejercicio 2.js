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
    return numeros;
}

function crearMatriz(){
    /*Variable para crear la matriz*/
    let matriz = [];

    let vector = llenarArray();

    /*Recorremos el vector y añadimos los 3 primeros valores, luego sumamos 3 para poder separar de 3 en 3*/
    for(let i = 0; i < vector.length; i += 3){
        /*Guardamos los valores en nuevos arrays con slice, dentro de la matriz, de esta manera lo convertimos en bidimensional */
        matriz.push(vector.slice(i, i + 3));
    }

    return matriz;
    
}

/*Convierto en JSON para poder ver los valores por consola aunque esto no es necesario */
console.log(JSON.stringify(crearMatriz()));

