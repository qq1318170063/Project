<?php
   include 'conn.php';

//    $num = isset($_REQUEST['num'])?$_REQUEST['num']:'';
   $id = isset($_REQUEST['id'])?$_REQUEST['id']:'';
//    $name = isset($_REQUEST['name'])?$_REQUEST['name']:'';
    
   $sql = "select * from orderlist where  id = '$id'";
   
   $res = $conn->query($sql);
//    if($res->num_rows) {
//     echo 'no';
//     }else {
//         echo 'yes';
//     };
    $data = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
    $conn->close();
    
?>