<?php
    include 'conn.php';
    $name =isset( $_REQUEST['name'])? $_REQUEST['name']:'';

   
    $sql = "SELECT * FROM alogin WHERE username='$name'";

    //执行语句得到结果集：包含很多信息
    $res = $conn->query($sql);

    $arr = $res->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

    //防止乱码
    $conn->set_charset('utf8');

    //关闭连接，防止资源浪费
    $conn->close();
    
?>