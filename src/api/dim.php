<?php
    include 'conn.php';//引入外部文件

    $page = isset($_GET['page']) ? $_GET['page'] : '1';
    $num = isset($_GET['num']) ? $_GET['num'] : '20';
    $tex = isset($_GET['tex']) ? $_GET['tex'] : '';

    //1.写查询语句
    $index = ($page - 1) * $num;
    $sql = "SELECT * FROM sasalist where name like '%$tex%' LIMIT $index,$num";
    $sql2 = "SELECT * FROM sasalist where name like '%$tex%'";
    //2.执行语句
    $res = $conn->query($sql);//结果集：包含很多信息，其中数据部分就是我想要的，要特意用方法才能提取出来
    $res2 = $conn->query($sql2);
    //3.提取数据

    $arr = $res->fetch_all(MYSQLI_ASSOC);  

    $data = array(
        'total' => $res2->num_rows,
        'data' => $arr,
        'page' => $page,
        'num' => $num,
    );
    //4.把数组转成字符串，传给前端,一个接口文件只能有一个输出：echo '[{},{},{}]'
    echo json_encode($data,JSON_UNESCAPED_UNICODE);//把对象转成字符串 JSON_UNESCAPED_UNICODE防止转义

 
    //防止乱码
    $conn->set_charset('utf8');
    
    //关闭连接，防止资源浪费
    $res->close();
    $conn->close();
?>




