"use strict";

let discente = {
    id: 4545,
    nombre: "Miguel",
    apellidos: "Alchapar",
    aficiones: ["Correr", "Nadar", "Motociclismo"],
    notas:{
        primera: 9,
        segunda: 5,
        tercera: 8,
    },

    calcularMedia : function(){
        return (this.notas.primera + this.notas.segunda + this.notas.tercera)/3;
    },

    imprimirAficiones : function(){
        for(let i = 0; i < this.aficiones.length ; i ++){
            console.log("Aficion " + (i+1) + ": " + this.aficiones[i]);
        }
    },

    imprimirInforme : function(){
        console.log("ID: " + this.id);
        console.log("Nombre: " + this.nombre + " " + this.apellidos);
        this.imprimirAficiones();
        console.log("Notas: \nPrimera evaluación -> " + this.notas.primera + "\nSegunda evaluación -> " + this.notas.segunda + "\nTercera evaluación -> " + this.notas.tercera);
        console.log("Nota media: " + this.calcularMedia());
    }


}

discente.imprimirInforme();