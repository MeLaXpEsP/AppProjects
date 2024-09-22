"use strict";


function marco(exterior, interior) {
    /*Comprobacion de datos */
    if (exterior <= interior || exterior % 2 === 0 || interior % 2 === 0) {
        console.error("El tamaño exterior es inferior al interior");
        return;
    }

    let marco = "";
    let margen = (exterior - interior) / 2;
    /*Creacion de dibujo  */
    for (let i = 0; i < exterior; i++) {
        for (let j = 0; j < exterior; j++) {
            /*Establece el simbolo a introducir dependiendo de los valores del tamaño */
            if (i < margen || i >= exterior - margen || j < margen || j >= exterior - margen) {
                marco += "*";
            } else {
                marco += ".";
            }
        }
        marco += "\n";
    }

    console.log(marco);
}

marco(21, 7);
