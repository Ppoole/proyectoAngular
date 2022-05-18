<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    $json = file_get_contents('php://input');
    $array = json_decode($json, true);



    function sacarPersona($tel){
        try {
        
        $mbd = new PDO('mysql:host=localhost;dbname=phoneapp', "root", "");
            
        
    
        $sql = "SELECT codPer, nombre, detalles from persona where codPer=(SELECT codPer from telefono where tel=?)";
        $stmt= $mbd->prepare($sql);
        $stmt->execute(array($tel));
    
        $result = $stmt->fetchAll(PDO::FETCH_DEFAULT, "Persona");
        return $result;
        }catch (PDOException $e) {
            print "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
sacarPersona($array['tel']);
?>