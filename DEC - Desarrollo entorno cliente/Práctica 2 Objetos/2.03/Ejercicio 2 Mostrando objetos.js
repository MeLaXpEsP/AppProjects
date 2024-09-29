"use strict"; // Activa el modo estricto

// Define la función para crear un curso
function crearCurso(nombreCurso, año, descripcion, alumnado) {
    // Retorna un objeto con las propiedades del curso
    return {
        nombreCurso: nombreCurso,
        año: año,
        descripcion: descripcion,
        alumnado: alumnado,
    };
}

// Define la función para mostrar los datos del curso
function mostrarDatos(objeto) {
    // Imprime el tipo de dato, el nombre de la propiedad y su valor
    console.log("Tipo\t\tNombre\t\tValor\n---------------------------------------\n" + typeof objeto.nombreCurso + "\t\t" + Object.keys(objeto)[0] + "\t" + objeto.nombreCurso);
    console.log(typeof objeto.año + "\t\t" + Object.keys(objeto)[1] + "\t\t" + objeto.año);
    console.log(typeof objeto.descripcion + "\t\t" + Object.keys(objeto)[2] + "\t" + objeto.descripcion);
    console.log(typeof objeto.alumnado + "\t\t" + Object.keys(objeto)[3] + "\t" + objeto.alumnado);
}

// Crea un objeto curso con los valores proporcionados
var curso = crearCurso("Daw", 2024, "Curso informática", ["Pepe", "Jose", "Nuria"]);

// Muestra los datos del curso en la consola
mostrarDatos(curso);
