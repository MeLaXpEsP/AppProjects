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

// Crea un objeto curso con los valores proporcionados
var curso = crearCurso("Daw", 2024, "Curso informática", ["Pepe", "Jose", "Nuria"]);

// Imprime las propiedades del curso en la consola
console.log(curso.nombreCurso + " " + curso.año + " " + curso.descripcion + " " + curso.alumnado);
