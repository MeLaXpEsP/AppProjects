"use strict";
/*Variables */
var acomulongitudr = 0;


function suma(){

    /*Coprueba si han valores suficinetes para sumar */
    if(arguments.length < 2){
        console.error("Debe de haber mínimo dos valores");
        return;
    }

    /*Recorre los parámetros*/
    for(let i = 0; i < arguments.length; i++){
       
        /*Verifica que sean valores numéricos*/
        if(typeof arguments[i] !== 'number'){
            console.error("Error, valor no númerico detectado");
            return;
        }
    }

    /*Suma de los valores */

    for(let i = 0; i < arguments.length; i++){
        acomulongitudr += arguments[i];
        console.log("\t" + arguments[i] );
        if(i === (arguments.length-1)){
            console.log("+")
        }
    }
    
    console.log("---------\n\t" + acomulongitudr);

    
}

suma(1,5);