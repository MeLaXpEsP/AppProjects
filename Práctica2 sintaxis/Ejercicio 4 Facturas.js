"use strict";



function test(nombreProducto = "Producto genérico", precio = 100, impuesto = 21){
    /*Comprobamos que los valores sean números*/
    if (isNaN(precio) || isNaN(impuesto)){
        console.error("Los valores introducidos no son numéricos");
        /*Finaliza la ejeccución*/
        return;
    }

    /*Operacón para devolver el valor si todo va bien*/
    console.log("El precio de " + nombreProducto + " es " + (precio*((impuesto/100)+1)) + "€ impuestos incluidos");




}

test();