"use strict";


var facturas = [124, 48, 268];

/*Calcula la propina según los valores dados*/
function calcularPropina(factura) {
    if (factura < 50) {
        return factura * 0.20;
    } else if (factura >= 50 && factura <= 200) {
        return factura * 0.15;
    } else {
        return factura * 0.10;
    }
}

/*Variables para almacenar los datos*/
var propinas = [];
var totales = [];

/*Recorre el array y almacena los valores en la variables*/
for (let i = 0; i < facturas.length; i++) {
    let propina = calcularPropina(facturas[i]);
    /*Método para añadir valores a un array */
    propinas.push(propina);
    totales.push(facturas[i] + propina);
}

/*Funcion para mostrar todos los resultados*/
function mostrarResultados(facturas, propinas, totales) {
    console.log("Factura  Propina  Total");
    for (let i = 0; i < facturas.length; i++) {
        console.log(facturas[i] + "       " + propinas[i].toFixed(2) + "     " + totales[i].toFixed(2));
    }
}

// Llamada a la función para mostrar los resultados
mostrarResultados(facturas, propinas, totales);
