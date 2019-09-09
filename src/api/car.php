<?php

    header("Content-type:text/html;charset=utf-8");

    include 'conn.php';
    $img = isset($_REQUEST['img']) ? $_REQUEST['img'] : '';
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
    $title = isset($_REQUEST['title']) ? $_REQUEST['title'] : '';
    $price = isset($_REQUEST['price']) ? $_REQUEST['price'] : '';


    // $sql = "UPDATE orderlist SET  num='$num' where  uid='$id' and username='$name'";
    $sql  = "insert into orderlist (id ,username,title  ,price  ,num , img) values('$id','$name', '$title','$price','$num' ,'$img')";
   $res = $conn->query($sql);

   if($res->num_rows) {
       echo 'no';
   }else {
       echo 'yes';
   }

   $conn->set_charset('utf8');

?>