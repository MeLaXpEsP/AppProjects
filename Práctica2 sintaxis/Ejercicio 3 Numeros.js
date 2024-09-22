function imprimir(vecesImpreso, numeroMultiplicado){
    for(let i = 0; i < vecesImpreso ; i++){
        console.log(numeroMultiplicado);
        numeroMultiplicado *= 2;
    }
}

imprimir(4, 6);