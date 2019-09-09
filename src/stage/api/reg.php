<?php

    include 'conn.php';

    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] :'';
    $psw =  isset($_REQUEST['psw']) ? $_REQUEST['psw'] :'';
    $email =  isset($_REQUEST['email']) ? $_REQUEST['email'] :'';

    $sql = "INSERT INTO stagelist (username,email,password) VALUES('$name','$email','$psw')";
    
    $res = $conn->query($sql);
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }

?>