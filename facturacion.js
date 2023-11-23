// Variable para almacenar el método de pago seleccionado
var metodoPagoSeleccionado;
var ColorSeleccionado;

document.addEventListener('DOMContentLoaded', function() {
    const imagenesPago = document.getElementsByClassName('pagoImg');

    for (var i = 0; i < imagenesPago.length; i++) {
        imagenesPago[i].metodoindex = i;
        imagenesPago[i].addEventListener('click', function() {
            // Eliminar la clase "buttonactive" de todas las imágenes
            for (var j = 0; j < imagenesPago.length; j++) {
                imagenesPago[j].classList.remove("selectorpagoactivo");
            }

            // Agregar la clase "buttonactive" a la imagen seleccionada
            this.classList.add("selectorpagoactivo");

            // Guardar el método de pago seleccionado
            metodoPagoSeleccionado = this.metodoindex; // Aquí usamos el índice del bucle en lugar del nombre de la empresa
        });
    }

    const botonescolores = document.getElementsByClassName('selColor');
    const rutas = ["Imagenes/Render-Verde-Oscuro.jpg", "Imagenes/Render-Verde-Claro.jpg","Imagenes/Render-Gris.jpg", "Imagenes/Render-Blanco.jpg"];
    const imagenProducto = document.getElementById('imgProduct').querySelector("img");

    function cambiarImagenYGuardarColor(rutaImagen) {
        imagenProducto.src = rutaImagen;
        imagenProducto.alt = 'Producto en color ' + rutaImagen.split('-')[1].split('.')[0];
        localStorage.setItem('colorSeleccionado', rutaImagen);
    }

    function aplicarColorSeleccionado() {
        const colorGuardado = localStorage.getItem('colorSeleccionado');
        if (colorGuardado) {
            cambiarImagenYGuardarColor(colorGuardado);
        }
    }

    aplicarColorSeleccionado();

    for (var i = 0; i < botonescolores.length; i++) {
        botonescolores[i].rutaindex = i;
        botonescolores[i].addEventListener('click', function() {
            for (var j = 0; j < botonescolores.length; j++) {
                botonescolores[j].classList.remove("buttonactive");
            }
            cambiarImagenYGuardarColor(rutas[this.rutaindex]);
            this.classList.add("buttonactive");
            ColorSeleccionado = this.rutaindex;
        });
    }

    // Obtén una referencia al elemento select que contiene la cantidad de productos seleccionada
    var selectorUnidades = document.querySelector('.numproductos.selector');

    // Actualiza el total del pedido cuando cambie la cantidad de productos seleccionada
    selectorUnidades.addEventListener('change', function() {
        var cantidad = parseInt(this.value); // Obtiene la cantidad de productos seleccionada
        
        var precioProducto = 240000;
        var costoEnvio = 15000;
        var tasaIVA = 0.19;

        var totalProductos = precioProducto * cantidad;
        var totalSinIVA = totalProductos + costoEnvio;
        var IVA = totalProductos * tasaIVA;
        var totalPedido = totalSinIVA + IVA;

        

        // Actualiza los valores en la página
        document.getElementById('Productos').innerHTML = 'COP $' + totalProductos.toLocaleString();
        document.getElementById('Envio').innerHTML = 'COP $' + costoEnvio.toLocaleString();
        document.getElementById('TotalSinIva').innerHTML = 'COP $' + totalSinIVA.toLocaleString();
        document.getElementById('TotalIVA').innerHTML = 'COP $' + IVA.toLocaleString();
        document.getElementById('TotalCompra').innerHTML = 'COP $' + totalPedido.toLocaleString();
    });

    document.querySelector('.Boton2 button').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
        var formulario = document.querySelector('.formulario');
        var datosFormulario = {};
    
        // Recopilar los datos del formulario
        for (var i = 0; i < formulario.elements.length; i++) {
            var elemento = formulario.elements[i];
            datosFormulario[elemento.name] = elemento.value;
        }
    
        // Agregar el color seleccionado, las unidades y el método de pago seleccionado al objeto de datos del formulario
        datosFormulario['colorSeleccionado'] = ColorSeleccionado;
        datosFormulario['metodoPagoSeleccionado'] = metodoPagoSeleccionado;
        


   
        // Obtener las unidades seleccionadas del menú desplegable
        var selectorUnidades = document.querySelector('.numproductos.selector');
        datosFormulario['unidades'] = selectorUnidades.options[selectorUnidades.selectedIndex].value;
        
        var cantidad = selectorUnidades.options[selectorUnidades.selectedIndex].value;
        var precioProducto = 240000;
        var costoEnvio = 15000;
        var tasaIVA = 0.19;

        var totalProductos = precioProducto * cantidad;
        var totalSinIVA = totalProductos + costoEnvio;
        var IVA = totalProductos * tasaIVA;
        var totalPedido = totalSinIVA + IVA;

        datosFormulario['totalPedido'] = totalPedido;


    
        var fechaActual = new Date();
        var opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        var fechaFormateada = fechaActual.toLocaleDateString('en-US', opciones);
    
        datosFormulario['fechaPedido'] = fechaFormateada;

        console.log(datosFormulario);
    
        // Enviar los datos del formulario a un archivo PHP
        fetch('subir_datos.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosFormulario)
        }).then(function(response) {
            return response.text();
        }).then(function(data) {
            console.log(data); // Imprime la respuesta del servidor en la consola

        }).catch(function(error) {
            console.error('Error:', error);
        });

        // Redirigir a la página "comprasfinal"
        window.location.href = 'resumenfinal.html';

    });
    
    


    
    
});




