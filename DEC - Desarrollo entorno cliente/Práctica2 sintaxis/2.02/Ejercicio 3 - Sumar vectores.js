"use strict";

/*Generador de numeros aleatorios */
function arrayAleatorio(cantidadNumeros) {
    let array = [];
    for (let i = 0; i < cantidadNumeros; i++) {
        /*Añadimos al array y redondeamos para que los valores se encuentren entre 1 y 100 */
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

/*Recibe dos arrays como parametros y devuelve uno con la suma de sus opuestos */
function sumaOpuestos(array1, array2) {
    let arraySuma = [];
    for (let i = 0; i < array1.length; i++) {
        arraySuma.push(array1[i] + array2[array2.length - 1 - i]);
    }
    return arraySuma;
}

/*Funcion para el formato de impresion */
function imprimir(array) {
    console.log("Array: " + array.join(", "));
}

/*Calcula los arrays utilizando las funciones previamente creadas */
function calcular(funcionGenerar, funcionSumar, funcionImprimir) {
    let array1 = arrayAleatorio(3); 
    let array2 = arrayAleatorio(3);
    let array3 = sumaOpuestos(array1, array2);

    /*Resultado */
    console.log("Array 1:");
    imprimir(array1);
    console.log("Array 2:");
    imprimir(array2);
    console.log("Array Suma:");
    imprimir(array3);
}

calcular(arrayAleatorio, sumaOpuestos, imprimir);
