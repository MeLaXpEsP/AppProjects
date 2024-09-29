"use strict";

function crearCurso(nombreCurso, año, descripcion, alumnado){
    
    return{
        nombreCurso: nombreCurso,
        año: año,
        descripcion: descripcion,
        alumnado: alumnado,
    }

}

var curso = crearCurso("Daw", 2024, "Curso informática", ["Pepe", "Jose", "Nuria"]);
console.log(curso.nombreCurso + " " + curso.año + " " + curso.descripcion + " " + curso.alumnado);