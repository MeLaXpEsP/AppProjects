"use strict";


/*Función para el temporizador */
function temporizador(minutos, segundos) {

    /*Considera si que son segundos si solo recibe un parámetro */
    if (arguments.length === 1) {
        segundos = minutos;
        minutos = 0;
    }
    
    /*Validación de datos para comprobar que sean números y esten dentro de los valores */
    if (typeof minutos !== 'number' || typeof segundos !== 'number' || segundos < 0 || minutos < 0 || segundos > 59) {
        console.error("Los datos introducidos son inválidos");
    }
    /*Convertimos los minutos a segundos para realizar los cálculos */
    let totalSegundos = minutos * 60 + segundos;

    /*Función para actualizar el reloj*/
    function reloj() {
        if (totalSegundos <= 0) {
            clearInterval(id);
            return;
        }

        /*Convertimos a minutos los segundos y  */
        let minutosRestantes = Math.floor(totalSegundos / 60);
        /*Calcula los segundos restantes y los  asocia a la variable */
        let segundosRestantes = totalSegundos % 60;

        /*Convierte los minutos restantes y segudos de manera que añade 0 en la parte de posterior para dar el formato adecuado*/
        let tiempoFormateado = minutosRestantes.toString().padStart(2, '0')+ ":" + segundosRestantes.toString().padStart(2, '0');
        console.log(tiempoFormateado);

        /*Resta un segundo del temporizador */
        totalSegundos--;
    }

    /*Iniciar temporizador*/
    const id = setInterval(reloj, 1000);
}

/*Prueba  */
temporizador(2);
