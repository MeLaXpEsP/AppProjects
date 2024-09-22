function cruz(longitud) {
    /*Compureuba que la longuitud sea multiplo de 3 */
    if (longitud % 3 !== 0) {
        console.error("Error: El longitud debe ser un múltiplo de tres.");
        return;
    }

    /*Variables para crear el dibujo y controlar la cantidad de símbolos*/
    let cruz = "";
    let tercio = longitud / 3;
    /*Controlamos que solo se generen asteriscos dentro el la parte central y almohadillas en el resto */
    for (let i = 0; i < longitud; i++) {
        for (let j = 0; j < longitud; j++) {
            if ((i >= tercio && i < 2 * tercio) || (j >= tercio && j < 2 * tercio)) {
                cruz += "*";
            } else {cruz += "#";}
        }
        cruz += "\n";
    }

    /*Imprime el dibujo generado*/
    console.log(cruz);
}


cruz(18);
