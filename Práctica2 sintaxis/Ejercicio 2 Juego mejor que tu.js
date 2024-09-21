"use strict";

/*Arrays para almacenar los datos de los equipos*/
var equipoJuan = [89, 120, 103];
var equipoMiguel = [116, 94, 123];

/*Función para ver el nombre y puntos de lo equipos */
function puntosEquipo(equipo, nombreEquipo){
    return "Nombre de equipo:\t" + nombreEquipo + "\nPuntos:\t\t\t" + equipo; /*Imprime los valores del array y el nombre recibido por parametro*/
}

/*Mostramos los valores de los dos equipos llamando a la función puntosEquipo*/
console.log(puntosEquipo(equipoJuan, "Los lechugas"));
console.log("\n" + puntosEquipo(equipoMiguel, "Los berenjenas"));

/*Función para ver el valor promedio de los puntos*/
function promedioPuntos(equipo){
    /*Declaración de variable para almacenar los valores */
    let promedio = 0;
    /*Bucle para recorrer los valores del array y sumarlos en la variable "promedio" */
    for(let i = 0; i < equipo.length ; i++){
        promedio =  promedio + equipo[i];
    }
    /*Devolvemos el valor total dividido entre el total de los valores */
    return promedio/equipo.length;
}

/*Impresión del resulado de la función promedioPuntos*/
console.log("Puntación promedia " + promedioPuntos(equipoJuan));

