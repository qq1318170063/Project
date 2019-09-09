<?php
    header("Content-type:text/html;charset=utf-8");

    $type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
    include 'conn.php';//引入外部文件
    
    //1.写sql语句
    if($type == 'getlist'){
        $sql = "SELECT * FROM sasalist ";
    }else if($type == 'good'){
        $sql = "SELECT * FROM sasalist where id=$id";
    };
   
    //2.执行语句
    $res = $conn->query($sql);
 
    //3.提取数据

    // $arr = $res->fetch_all(MYSQLI_ASSOC);//对象 结果集
    
    $data = $res->fetch_all(MYSQLI_ASSOC);
     // //4.把对象转成字符串，echo给前端
     echo json_encode($data,JSON_UNESCAPED_UNICODE);

     $conn->set_charset('utf8');
 
?>