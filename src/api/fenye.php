<?php
    header("Content-type:text/html;charset=utf-8");

    $page = isset($_GET['page']) ? $_GET['page'] : '';
    $num = isset($_GET['num']) ? $_GET['num'] : '';
    $order = isset($_GET['order']) ? $_GET['order'] : 'asc';

    include 'conn.php';//引入外部文件
    
    //1.写sql语句
    $index = ($page - 1) * $num;
    // $sq = "SELECT * FROM sasalist   LIMIT $index,$num";
    $sql = "SELECT * FROM sasalist ORDER BY price $order LIMIT $index,$num";
    $sql2 = "SELECT * FROM sasalist ";
   
    //2.执行语句
    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);

    
    //3.提取数据

    $arr = $res->fetch_all(MYSQLI_ASSOC);//对象 结果集


    $data = array(
        'total' => $res2->num_rows,
        'data' => $arr,
        'page' => $page,
        'num' => $num,
    );
     // //4.把对象转成字符串，echo给前端
     echo json_encode($data,JSON_UNESCAPED_UNICODE);

     $conn->set_charset('utf8');
 
?>