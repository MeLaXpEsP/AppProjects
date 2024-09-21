"use strict";

/*Variables para almacenar los datos*/
var masaJuan = 65;
var masaMarcos = 82;
var alturaJuan = 1.70;
var alturaMarcos = 1.86;

/*Variable booleana para comprobar si el índice el es mayor que el otro*/

var imcMenor;

/*Función para calcular el índice de masa corporal IMC*/
function calculoIMC(masa, altura){
    let IMC;
    return IMC = (masa/(Math.pow(altura,2))).toFixed(2);/*Redondeo a dos decimales con el método toFixed()*/
    
}


imcMenor = calculoIMC(masaJuan,alturaJuan) > calculoIMC(masaMarcos,alturaMarcos);

console.log("Indice de masa de Juan = " + calculoIMC(masaJuan,alturaJuan));
console.log("Indice de masa de Marcos = " +calculoIMC(masaMarcos,alturaMarcos));
console.log("¿Es el IMC de Marcos menor que el de Juan? " + imcMenor);
