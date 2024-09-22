"use strict";

/*VARIABLES GLOBALES */

/*Arrays para almacenar los datos de los equipos*/
var equipoJuan = [89, 120, 103, "Juan 'los lechugas'"];
var equipoMiguel = [116, 94, 123, "Miguel 'los berenjenas'"];
var equipoMaria = [7, 134, 105, "María 'los cuervos de las verduras'"]

/*FUNCIONES */

/*Función para ver el nombre y puntos de lo equipos */
function puntosEquipo(equipo){
    return "Nombre de equipo:\t" + equipo[3] + "\nPuntos:\t\t\t" + equipo[0] + " - " + equipo[1] + " - " +equipo[2]; /*Imprime los valores del array y el nombre recibido por parametro*/
}

/*Función para ver el valor promedio de los puntos*/
function promedioPuntos(equipo){
    /*Declaración de variable para almacenar los valores */
    let promedio = 0;
    /*Bucle para recorrer los valores del array y sumarlos en la variable "promedio" */
    for(let i = 0; i < (equipo.length-1) ; i++){
        promedio =  promedio + equipo[i];
    }
    /*Devolvemos el valor total dividido entre el total de los valores */
    return equipo[3] + " con una puntuación promedia de " + promedio/(equipo.length-1);
}

/*Equipo con mejor puntuación media */
function mejorPuntuaciónPromedia(equipo1, equipo2, equipo3){/*Recibe los dos equipos a comparar */
    let mejorPuntuacion;
    /*Comprueba que equipo es el que mas puntos promedios tiene y devuelve un impresión con el equipo con mayour puntuación */
    if(promedioPuntos(equipo1)>promedioPuntos(equipo2) && promedioPuntos(equipo1)>promedioPuntos(equipo3)){
        mejorPuntuacion=promedioPuntos(equipo1);
        return console.log("\nEl ganador con un total de puntos es " + mejorPuntuacion + " promedios");
    }else if(promedioPuntos(equipo2)>promedioPuntos(equipo1) && promedioPuntos(equipo2)>promedioPuntos(equipo3)){
        mejorPuntuacion=promedioPuntos(equipo2);
         return console.log("\nEl ganador con un total de puntos es " + mejorPuntuacion + " promedios");
    }else if(promedioPuntos(equipo3)>promedioPuntos(equipo1) && promedioPuntos(equipo3)>promedioPuntos(equipo2)){
        mejorPuntuacion=promedioPuntos(equipo3);
         return console.log("\nEl ganador con un total de puntos es " + mejorPuntuacion + " promedios");
    }    else{"\nTodos los equipos estan empatados"}
}

/*RESULTADOS */

/*Mostramos los valores de los dos equipos llamando a la función puntosEquipo*/
console.log(puntosEquipo(equipoJuan));
console.log("\n" + puntosEquipo(equipoMiguel));

/*Impresión del resulado de la función promedioPuntos*/
console.log("\n"+promedioPuntos(equipoMaria));



mejorPuntuaciónPromedia(equipoJuan,equipoMiguel,equipoMaria);

