<?php
    //Esto es para que no salten bloqueos de seguridad. TODO: Reducirlo solo a POST, ver si puedo modificar el origen.
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    
    // Porque $_POST no funciona con Angular, se pasa todo por JSON, y debo decodificarlo y asignarlo así. Preguntar a Pablo qué carajo pasa con eso
    $json = file_get_contents('php://input');
    $array = json_decode($json, true);

    
    $tel=$array['tel'];
    
    

   

    try {
    include "nota.php"; //TODO: Reorientar esto a objeto. 
    $mbd = new PDO('mysql:host=localhost;dbname=phoneapp', "root", ""); //TODO: Configurar acceso a BD.
    $sql = "SELECT codNota, creador, fecha, peligrosidad, impacto, completada, tel, contenido, detalles from nota where tel=?";
    $stmt= $mbd->prepare($sql);
    $stmt->execute(array($tel));
    $result = $stmt->fetchAll(PDO::FETCH_DEFAULT);
    print(json_encode($result)) ; //Lo envio en JSON porque por defecto Angular lo recibe en JSON
    }catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "<br/>";
        die();
    }


?>