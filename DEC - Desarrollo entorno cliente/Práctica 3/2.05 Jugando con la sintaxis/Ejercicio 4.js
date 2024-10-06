function calcularMinas(matriz) {
    /*Obtenemos las filas y columnas de la matriz */
    var filas = tablero.length;
    var columnas = tablero[0].length;

    /*Creamos una nueva matriz para comparar los valores recibidos */
    var resultado = [];
    for (var i = 0; i < filas; i++) {
        /*Inicializamos las filas para evitar errores*/
        resultado[i] = [];
        for (var j = 0; j < columnas; j++) {
            /*Llenamos las filas y columnas de 0*/
            resultado[i][j] = 0; 
        }
    }

    /*comprobamos la matriz recibida */
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            if (matriz[i][j] == -1) {
                /*Añadimos -1 en la nueva matriz*/
                resultado[i][j] = -1;
            } else {
                var contadorMinas = 0;

                // Verificar las celdas adyacentes
                for (var fila = -1; fila <= 1; fila++) { // dx para filas
                    for (var columna = -1; columna <= 1; columna++) { // dy para columnas
                        /*En el caso de que ambas variables sean igual 0 salimos del bucle*/
                        if (fila == 0 && columna == 0) continue;

                        /*Eliminamos una posición por cada lado para poder comprobar las celdas adyacentes*/
                        var nuevaFila = i + fila;
                        var nuevaColumna = j + columna;

                        /* Comprobar si la nueva posición está dentro de los límites*/
                        if (nuevaFila >= 0 && nuevaFila < filas && nuevaColumna >= 0 && nuevaColumna < columnas) {
                            /* Si hay una mina en la celda adyacente*/
                            if (tablero[nuevaFila][nuevaColumna] === -1) {
                                /*Aumenta el contador de minas */
                                contadorMinas++; 
                            }
                        }
                    }
                }
                /*Asignar el contador de minas a la celda en el resultado*/
                resultado[i][j] = contadorMinas;
            }
        }
    }

    return resultado; 
}

