<?php


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$json = file_get_contents('php://input');
$array = json_decode($json, true);


function entradaDB($valores){
try {
    $mbd = new PDO('mysql:host=localhost;dbname=phoneapp', "root", ""); //Un login, evidentemente necesitaré mejorar la seguridad.
    $extraInter = "";
    for($i=1;$i<count($valores);$i++){ //Creamos un array con tantas ',?' como valores por encima de uno haya en el array.
        $extraInter=$extraInter.',?';
    }
    $campos="";
    $contenido=[];
    foreach($valores as $campo=>$valor){ //llenamos un array simple con los valores a insertar
        $campos=$campos .',' . $campo;
        
        array_push($contenido,$valor);
    }
    $campos=ltrim($campos,',');
    $sql = "INSERT INTO persona" ."(". $campos .")". "VALUES (?".$extraInter.")";
    
    $stmt= $mbd->prepare($sql);
    $stmt->execute($contenido); //ejecutamos la consulta.
    $mbd = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}}
?>