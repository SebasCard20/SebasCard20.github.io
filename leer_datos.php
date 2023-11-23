<?php
// Tu archivo de conexión
include 'ConexionBD.php';

// Consulta SQL para obtener los datos del último usuario
$sql = "SELECT fecha, nombre_usuario, departamento, ciudad, direccion, codigo_postal, telefono, detalles_adicionales, color, metodo_de_pago, cantidad, total_pago FROM registro_compras ORDER BY id DESC LIMIT 1";
$resultado = $conn->query($sql);

// Crear un array para almacenar los datos
$datos = array();

// Recorrer los resultados y añadirlos al array
while ($fila = $resultado->fetch_assoc()) {
    $datos[] = $fila;
}

// Codificar los datos en formato JSON
$datos_json = json_encode($datos);

// Imprimir los datos en formato JSON
echo $datos_json;
?>