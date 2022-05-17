<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    $json = file_get_contents('php://input');
    $array = json_decode($json, true);
    $codNota=$array['codNota'];
    try {
        $mbd = new PDO('mysql:host=localhost;dbname=phoneapp', "root", "");
        $sql = "UPDATE nota SET contenido='" . $array['contenido']."', detalles='". $array['detalles']."' , peligrosidad=" . $array['peligrosidad']." , impacto=" . $array['impacto'] ." WHERE codNota=?";
        $stmt= $mbd->prepare($sql);
        $stmt->execute(array($codNota)); //Y ejecutamos la consulta.
        $mbd = null;
    } catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "<br/>";
        die();
    }
?>