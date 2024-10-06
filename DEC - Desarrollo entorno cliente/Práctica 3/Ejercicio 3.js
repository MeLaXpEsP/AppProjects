"use strict";

/* Función para llenar array con 9 números únicos */
function llenarArray() {
    let numeros = [];

    /* Genera los 9 números mediante un bucle for y un do while por si se repite algún número no avanzar y volver a generarlo */
    for (let i = 0; i < 9; i++) {
        let numeroGenerado;
        do {
            numeroGenerado = Math.floor(Math.random() * 9) + 1;
        } while (numeros.includes(numeroGenerado));
        numeros.push(numeroGenerado);
    }
    return numeros;
}

function crearMatriz() {
    /* Variable para crear la matriz */
    let matriz = [];

    /* Creamos un vector cada vez que entramos en el ciclo y lo añadimos a la matriz */
    for (let i = 0; i < 9; i++) {
        let vector = llenarArray();
        matriz.push(vector);
    }

    // Imprimir la matriz
    matriz.forEach(vector => {
        console.log(vector);
    });

    return matriz; 
}

function comprobarNumeros(array) {
    var contador = {};
    for (var i = 0; i < array.length; i++) {
        
        /* Comprueba si en "contador" existe el número de array[i], si es sí, devuelve true */
        if (contador[array[i]]) {
            return true; 
        }
        /* Almacena el valor */
        contador[array[i]] = true; 
    }

    /* Si no encuentra coincidencias devuelve false */
    return false; 
}

function comprobarSudoku(sudoku) {
    /* Comprueba la fila mediante la función comprobarNumeros */
    for (var i = 0; i < 9; i++) {
        if (comprobarNumeros(sudoku[i])) { 
            return false;
        }
    }

    /* Comprueba la columna mediante la función comprobarNúmero */
    for (var j = 0; j < 9; j++) {
        var columna = [];
        for (var i = 0; i < 9; i++) {
            columna.push(sudoku[i][j]);
        }
        if (comprobarNumeros(columna)) { 
            return false;
        }
    }
    /* Si todo es correcto devuelve true */
    return true; 
}

var matriz = crearMatriz();
var esVálido = comprobarSudoku(matriz);
console.log("¿El Sudoku es válido?", esVálido);
