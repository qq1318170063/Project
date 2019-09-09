<?php

    header("Content-type:text/html;charset=utf-8");
    include 'conn.php';

    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $loginfoot = isset($_REQUEST['loginfoot']) ? $_REQUEST['loginfoot'] :'';

    $sql = "UPDATE alogin SET loginfoot='$loginfoot' WHERE username ='$name'";
    
    //2.执行语句
    $res = $conn->query($sql);

    //3.提取数据

    // $arr = $res->fetch_all(MYSQLI_ASSOC);//对象 结果集
    
    // $data = $res->fetch_all(MYSQLI_ASSOC);
     // //4.把对象转成字符串，echo给前端
     echo json_encode($res,JSON_UNESCAPED_UNICODE);

     $conn->set_charset('utf8');
?>