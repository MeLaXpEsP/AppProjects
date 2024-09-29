"use strict";

var test = {
    nombre: "Miguel",
    edad: 33,
    asignaturas: ["DEC", "DES", "Ingles"]
};

function imprimirObjeto(objeto) {
    /* Creamos una variable y almacenamos los valores de las claves */
    let claves = Object.keys(objeto);
    /* Recorremos las claves y lo almacenamos en las variables clave y valor */
    for (let i = 0; i < claves.length; i++) {
        /*Guarda los valores y las claves en las variables para utilizarlas */
        let clave = claves[i];
        let valor = objeto[clave];
        /*Comprueba el tipo de dato e imprime según el formato indicado */
        if (typeof valor == 'number' || typeof valor == 'string') {
            console.log(clave + " → " + valor + " → " + typeof valor);
        } else if (Array.isArray(valor)) {
            console.log(clave + " → " + valor + " → array");
        } else if (typeof valor === 'object' && valor !== null) {
            console.log(clave + " → objeto:");
            imprimirObjeto(valor); 
        }
    }
}

imprimirObjeto(test);


