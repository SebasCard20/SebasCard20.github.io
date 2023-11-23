<?php
// Archivo para la conexión a la base de datos

$servername = "sql307.infinityfree.com";
$username = "if0_35432041";
$password = "KmJIXG8ssLl";
$dbname = "if0_35432041_registro_compras";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>