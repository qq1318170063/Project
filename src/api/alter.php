<?php
   include 'conn.php';

   $num = isset($_REQUEST['num'])?$_REQUEST['num']:'';
   $id = isset($_REQUEST['id'])?$_REQUEST['id']:'';
   $name = isset($_REQUEST['name'])?$_REQUEST['name']:'';
    
   $sql = "update orderlist set num ='$num' WHERE id = '$id' and username = '$name'";
   
   $res = $conn->query($sql);

    echo json_encode($res);
    $conn->close();
    
?>