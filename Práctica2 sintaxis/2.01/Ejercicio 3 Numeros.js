"use strict";

/*Imprime el valor del número recibido en el segundo parametro las veces indicadas en el primero */
function imprimir(vecesImpreso, numeroMultiplicado){
    for(let i = 0; i < vecesImpreso ; i++){
        console.log(numeroMultiplicado);
        /*Una vez impreso lo multiplica por dos*/
        numeroMultiplicado *= 2;
    }
}

imprimir(4, 6);