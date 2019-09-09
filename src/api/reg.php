<?php

    include 'conn.php';

    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] :'';
    $psw =  isset($_REQUEST['psw']) ? $_REQUEST['psw'] :'';

    $sql = "INSERT INTO areglist(name,psw) VALUES('$name','$psw')";
    $sql2 = "INSERT INTO alogin(username) VALUES('$name')";

    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);
   
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }

?>