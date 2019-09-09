<?php

    include 'conn.php';

    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] :'';
    $psw =  isset($_REQUEST['psw']) ? $_REQUEST['psw'] :'';

    $sql = "SELECT * from areglist where name='$name' and psw='$psw'";
    
    $res = $conn->query($sql);

    if($res->num_rows){
        echo 'yes';
    }else{
        echo 'no';
    }
?>