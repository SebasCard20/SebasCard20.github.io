<?php
$data = json_decode(file_get_contents('php://input'), true);

$fecha = $data['fechaPedido'];
$nombre_usuario = $data['nombre'];
$departamento = $data['departamento'];
$ciudad = $data['ciudad'];
$direccion = $data['direccion'];
$codigo_postal = $data['codigo_postal'];
$telefono = $data['telefono'];
$detalles_adicionales = $data['detalles'];
$color = $data['colorSeleccionado'];
$metodo_de_pago = $data['metodoPagoSeleccionado'];
$cantidad = $data['unidades'];
$total_pago = $data['totalPedido'];

// Conexión a la base de datos
include 'ConexionBD.php';

$sql = "INSERT INTO registro_compras (fecha, nombre_usuario, departamento, ciudad, direccion, codigo_postal, telefono, detalles_adicionales, color, metodo_de_pago, cantidad, total_pago)
VALUES ('$fecha', '$nombre_usuario', '$departamento', '$ciudad', '$direccion', '$codigo_postal', '$telefono', '$detalles_adicionales', '$color', '$metodo_de_pago', '$cantidad', '$total_pago')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
