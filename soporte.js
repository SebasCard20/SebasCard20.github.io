document.addEventListener('DOMContentLoaded', (event) => {
    const preguntas = document.querySelectorAll('.selPregunta');
    const respuesta = document.querySelector('.respuesta');
    
    preguntas.forEach((pregunta, index) => {
        pregunta.addEventListener('click', () => {
            resetseleccion();
            switch(index) {
                case 0:
                    respuesta.innerHTML = `<h4>¿Problemas de conexión con la app móvil? </h4>
                    <p>Primero, compruebe que el jardinerito esté encendido. Si el jardinerito se encuentra encendido, 
                        apáguelo y vuelva a encenderlo retirando las baterías. </p>
                    <h4>¿El jardinerito no enciende? </h4>
                    <p> Compruebe que las baterías del jardinerito se encuentran insertadas de forma correcta. 
                        Si lo anterior es correcto, verifique que las baterías tienen carga. Si las baterías se 
                        encuentran descargadas, cámbielas y verifique si el jardinerito encendió.</p>
                    <h4>¿La aplicacion móvil esta disponible para dispositivos iOs y Android?  </h4>
                    <p>De momento solo se encuentra disponible para android, proximamente se espera 
                        que haya una version para iOs.</p>
                    <h4>¿El jardinerito es resistente al agua?  </h4>
                    <p>Si el jardinerito cuenta con un encapsulado hecho expresamente para que 
                        resista la lluvia y salpicadura de agua.</p>`;
                    break;
                case 1:
                    respuesta.innerHTML = `<h4>¿Cuánto tiempo tardará él envió de mi producto?</h4>
                    <p>Si se encuentra dentro de Bogotá, el producto será entregado a más tardar al día siguiente. 
                    En caso de que el producto haya sido comprado antes de las 4 de la tarde, será enviado el mismo día. 
                    En caso de encontrarse por fuera de Bogotá, el tiempo estimado será dado por la transportadora predilecta para el envío del producto. </p>
                    <h4>¿Qué transportadora usan para enviar sus productos?</h4>
                    <p> Nuestros productos siempre serán enviados en transportadoras de alta calidad para así tener la confianza de que lleguen en buen estado, 
                    la transportadora predilecta para el envió será la cual tenga la disponibilidad en el momento de hacer el envió.</p>
                    <h4>¿Qué hago si mi producto llega en mal estado?</h4>
                    <p>En caso de que esto llegue a suceder envíanos un correo anexando evidencia del problema y por medio del correo te daremos solución.</p>`;
                    break;
                case 2:
                    respuesta.innerHTML = `<h4>¿Qué métodos de pago tienen disponible?</h4>
                    <p>Por el momento contamos con dos métodos de pago, estos son mercado pago y nequi.</p>
                    <h4>¿En qué moneda manejan sus productos?</h4>
                    <p> Nosotros al ser una empresa colombiana manejamos el peso colombiano como moneda para el pago de productos.</p>
                    <h4>¿Cuentan con pago a plazos para sus productos?</h4>
                    <p>Si contamos con pago a plazos por el metodo de mercado pago.</p>
                    <h4>¿Qué hago si hice el pago, pero no se ve reflejado en la página?</h4>
                    <p>Contacta con nosotros por medio de correo para poder gestionar este problema de forma efectiva.`;
                    break;
                case 3:
                    respuesta.innerHTML = `<h4>¿Cómo se instala el jardinerito?</h4>
                    <p>El jardinerito está diseñado para que se instale de forma vertical con los sensores de humedad apuntando hacia abajo de modo que la parte cilíndrica este apuntando hacia arriba.</p>
                    <h4>¿Cómo se si el jardinerito este encendido?</h4>
                    <p> El jardinerito cuenta con un led que se enciende avisando que este se encuentra encendido, si al momento de instalarlo el led no se enciende verifica que hayas instalado las baterías bien y que después presiona el botón de encendido.</p>
                    <h4>El jardinerito no se mantiene en pie solo ¿qué hago?</h4>
                    <p>Verifica que enterraste de manera correcta al jardinerito este tiene que ser insertado por lo menos a más de la mitad de los sensores de humedad.</p>
                    <h4>¿Dónde debo ubicar el jardinerito?</h4>
                    <p>La ubicación predilecta del jardinerito es en la misma maceta de la planta que se quiere monitorear, evitando que la planta tape el sensor de luminosidad del jardinerito para que los datos sean más precisos.</p>`;
                    break;
                case 4:
                    respuesta.innerHTML = `<h4>¿Problemas de conexión con la app móvil? </h4>
                    <p>Primero, compruebe que el jardinerito esté encendido. Si el jardinerito se encuentra encendido, 
                        apáguelo y vuelva a encenderlo retirando las baterías. </p>
                    <h4>La app móvil no se instala en mi dispositivo</h4>
                    <p> En ese caso verifique que cuenta con conexión a internet y tiene el espacio de almacenamiento suficiente para instalar la aplicación en su dispositivo.</p>
                    <h4>¿La aplicación móvil está disponible para dispositivos iOs y Android?</h4>
                    <p>De momento solo se encuentra disponible para android, proximamente se espera 
                        que haya una version para iOs.</p>
                    <h4>La aplicación me muestra datos erróneos fuera de lo comun</h4>
                    <p>Esto puede suceder por múltiples factores. Para empezar, cierre y vuelva a abrir la aplicación. Si todavía sigue mostrando datos erráticos, verifique que el jardinerito esté instalado correctamente y reinícielo con el botón de encendido.</p>`;
                    break;
                default:
                    respuesta.innerHTML = '';
            }
            preguntas[index].classList.add("buttonactivesoporte");
        });
    });

    function resetseleccion() {
        for (var i = 0; i < preguntas.length; i++) {
            preguntas[i].classList.remove("buttonactivesoporte");
          }

        /*botonVerde[0].classList.remove("buttonactive");
        botonGris[0].classList.remove("buttonactive");
        botonBlanco[0].classList.remove("buttonactive");
        botonTurquesa[0].classList.remove("buttonactive");*/
    }
});
