"use strict";

/*Calculamos la letra del DNI */
function calcularLetraDNI(numero) {

    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letras[numero % 23];
}

/*Devuleve los dni que pueden tener la letra introducida por parametro */
function contarDNIsConLetra(letras) {

    let contador = 0;
    let resultado = '';

    /*Calcula la cantidad todas las letras de todos los dni y solo nos quedamos con los que coinciden con la letra introducida*/
    for (let dni = 48357001; dni <= 48360000; dni++) {
        let letra = calcularLetraDNI(dni);
        if (letra === letras) {
            contador++;
            resultado += "DNI: " + dni + letra + "\t";
        }
    }

    console.log("Número de documentos encontrados entre 48357001 y 48357999: " + contador);
    console.log(resultado);
}

/*Prueba */
contarDNIsConLetra('J');
