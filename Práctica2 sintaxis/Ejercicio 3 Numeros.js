var vecesImpreso = 5;
var numeroMultiplicado = 10;


function imprimir(vecesImpreso, numeroMultiplicado){
    for(let i = 0; i < vecesImpreso ; i++){
        console.log(numeroMultiplicado);
        numeroMultiplicado *= 2;
    }
}