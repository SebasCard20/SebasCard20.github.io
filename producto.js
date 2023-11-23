document.addEventListener('DOMContentLoaded', function() {
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
            localStorage.setItem('rutaindex', this.rutaindex);
        });
    }
});


