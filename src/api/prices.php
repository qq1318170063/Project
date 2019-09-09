<?php

    header("Content-type:text/html;charset=utf-8");
    include 'conn.php';
    $page = isset($_GET['page'])?$_GET['page']:'';
    $num = isset($_GET['num'])?$_GET['num']:'';
    $price1 = isset($_GET['price1'])?$_GET['price1']:'';
    $price2 = isset($_GET['price2'])?$_GET['price2']:'';
    // $order = isset($_GET['order']) ? $_GET['order'] : '';
    
    //把连接数据库的操作引过来
   

    //页码下标等于 （页面-1）*数量
    $index = ($page - 1) * $num;

    //sql语句
    $sql = "SELECT * FROM sasalist  WHERE price BETWEEN $price1 AND $price2 LIMIT $index,$num";
    $sql2 = "SELECT * FROM sasalist WHERE price BETWEEN $price1 AND $price2 ";

    //执行语句。得到结果集,内容很多，我需要提取部分信息（数组对象）
    // $res = $conn->query($sql);
    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);
    // var_dump($res2);

    //提取数据，得到数组[{},{},{}]
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    
    //吧data变成数组传输
    $data = array(
        'total' => $res2->num_rows,
        'data' => $arr,
        'page' => $page,
        'num' =>$num
    );
    // var_dump($data);
    //把数据转成字符串，传给前端   
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
  
    //防止乱码
    $conn->set_charset('utf8');

    //传输数据后关闭连接，防止资源浪费
    $res->close();
    $conn->close();
?>