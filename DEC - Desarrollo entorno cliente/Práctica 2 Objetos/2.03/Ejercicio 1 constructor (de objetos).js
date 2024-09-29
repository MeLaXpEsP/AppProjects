"use strict";

/*Funcion para crear curso */
function crearCurso(nombreCurso, año, descripcion, alumnado) {
    
    return {
        nombreCurso: nombreCurso,
        año: año,
        descripcion: descripcion,
        alumnado: alumnado,
    };
}

/*Creación de objeto */
var curso = crearCurso("Daw", 2024, "Curso informática", ["Pepe", "Jose", "Nuria"]);

console.log(curso.nombreCurso + " " + curso.año + " " + curso.descripcion + " " + curso.alumnado);
