"use strict";
/*Texto para conversion */
var texto = "prueba de texto";


/*Función para alternan mayúsculas */
function cani(texto){

    let nuevaCadena = '';/*Esta variable va almacenar la nueva cadena de texto */
    let alternarCaracteres = true;/*Esta la vamos a utlizar para alternan entre mayúsculas y minúsculas */
    
    /*Recorre los caracteres del texto para convertirlos en mayúscualas/minúsculas según las condiciones */
    for(let valor in texto){
        if(texto.charAt(valor) != ' ' && alternarCaracteres){
            nuevaCadena += texto.charAt(valor).toUpperCase();
            alternarCaracteres = false;
            
        }else if(texto.charAt(valor) != ' ' && !alternarCaracteres){
            nuevaCadena += texto.charAt(valor).toLowerCase();
            alternarCaracteres = true;
        }else{
            nuevaCadena += ' ';
        }
    }

    /*Genera una cantidad de H aleatoriamente entre 2 y 5 */
    function generarH(){
        let caracterAñadir = '';
        let cantidad = 0;
        cantidad = Math.floor(Math.random() * (5-2+1)) + 2;

        for(let i = 0; i < cantidad; i++){
            caracterAñadir += "H";
        }

        return caracterAñadir;

    }

        /*Generamos la cadena de texto añadiendo la cantidad de H aleatoria*/
        console.log(nuevaCadena + generarH());
    


}

cani(texto);