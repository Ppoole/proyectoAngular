<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    $json = file_get_contents('php://input');
    $array = json_decode($json, true);
    try {
        $mbd = new PDO('mysql:host=localhost;dbname=phoneapp', "root", "");
        $sql = "UPDATE nota SET contenido, detalles, peligrosidad, impacto WHERE codNota=".$array['codNota'];
        $stmt= $mbd->prepare($sql);
        $stmt->execute($contenido); //Y ejecutamos la consulta.
        $mbd = null;
    } catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "<br/>";
        die();
    }
?>