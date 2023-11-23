document.addEventListener('DOMContentLoaded', (event) => {
    fetch('leer_datos.php')
        .then(response => response.json())
        .then(data => {
            var fecha = data[0].fecha;
            var nombre_usuario = data[0].nombre_usuario;
            var departamento = data[0].departamento;
            var ciudad = data[0].ciudad;
            var direccion = data[0].direccion;
            var codigo_postal = data[0].codigo_postal;
            var telefono = data[0].telefono;
            var detalles_adicionales = data[0].detalles_adicionales;
            var color = data[0].color;
            var metodo_de_pago = data[0].metodo_de_pago;
            var cantidad = data[0].cantidad;
            var total_pago = data[0].total_pago;

            // Mapeo de colores
            var colores = {
                '0': 'Verde',
                '1': 'Lima',
                '2': 'Gris',
                '3': 'Blanco'
            };

            // Mapeo de métodos de pago
            var metodosPago = {
                '0': 'Mercado Pago',
                '1': 'Nequi',
                '2': 'DaviPlata'
            };

            // Asignar los datos a los elementos HTML
            document.getElementById('fechapedido').innerHTML = fecha;
            document.getElementById('nombreUsu').innerHTML = nombre_usuario;
            document.getElementById('departamentoUsu').innerHTML = departamento;
            document.getElementById('ciudadUsu').innerHTML = ciudad;
            document.getElementById('direccionUsu').innerHTML = direccion;
            document.getElementById('codigopostalUsu').innerHTML = codigo_postal;
            document.getElementById('telefonoUsu').innerHTML = telefono;
            document.getElementById('detallesadiUsu').innerHTML = detalles_adicionales;
            document.getElementById('colorpedido').innerHTML = colores[color]; // Usar el mapeo de colores
            document.getElementById('metododepago').innerHTML = metodosPago[metodo_de_pago]; // Usar el mapeo de métodos de pago
            document.getElementById('cantidadpedido').innerHTML = cantidad;
            document.getElementById('totalpago').innerHTML = 'COP $' + total_pago;
        })
        .catch(error => console.error('Error:', error));


});