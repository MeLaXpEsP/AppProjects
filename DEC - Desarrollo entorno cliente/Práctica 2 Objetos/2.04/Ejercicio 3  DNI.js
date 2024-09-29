
      "use strict";
      /*Funcion para solicitar el dni por el prompt en el navegador */
      function solicitarDNI() {
        var totalDni = [];
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        
        /*Intevalo para lanzar el prompt*/
        const intervalo = setInterval(() => {
          const dni = prompt(
            "Introduce un número de DNI sin la letra o -1 si deseas terminar:"
          );

          if (dni === "-1") {
            clearInterval(intervalo);/*Una vez seleccionado -1 detiene el intervalo del prompt*/
            /*Lee los dni y asocia la letra según la fórmula y lo imprime por pantalla */
            for (let i = 0; i < totalDni.length; i++) {
              const numero = parseInt(totalDni[i], 10);
              const letra = letras[numero % 23];
              console.log("DNI completo: " + totalDni[i] + letra);
            }
          } else {
            /*Añade los DNI a un array para mostrarlos cuando finalize la ejeccución */
            totalDni.push(dni);
          }
        }, 5000);
      }
      /*Prueba */
      solicitarDNI();
