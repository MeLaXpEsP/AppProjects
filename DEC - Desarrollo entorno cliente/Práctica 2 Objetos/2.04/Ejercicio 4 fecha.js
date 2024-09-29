"use strict";

/*Establece el 3 segundos el temporizador para mostrar la fecha */
setTimeout(() => {
    /*Estable el formato para la fecha*/
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' };
    const fechaActual = new Date().toLocaleDateString('es-ES', opciones);
    console.log(fechaActual);
}, 3000);
