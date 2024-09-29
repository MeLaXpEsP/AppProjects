"use strict";

/*Funcion para calcular la tabla de multiplicar */
function calcularTabla(numero) {
    console.log("Tabla de multiplicar del " + numero);
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero*i);
    }
}

/*Funcion para imprimir las tablas hasta 2*/
function imprimirTablas(numero) {
    /*Comprueba que la tabla se multiplique como mínimo con el valor 2*/
    if (numero <= 2) {
        console.error("Error: El número debe ser mayor a dos.");
        return;
    }
    /*Imprime el numero de tablas necesarios mediante la función imprimir tabla */
    for (let i = numero; i >= 2; i--) {
        calcularTabla(i);
    }
}

/*Resultado */
imprimirTablas(5);

