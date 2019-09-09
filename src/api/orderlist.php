<?php

header("Content-type:text/html;charset=utf-8");

include 'conn.php';
$type =isset( $_REQUEST['type'])? $_REQUEST['type']:'';
$username =isset( $_REQUEST['username'])? $_REQUEST['username']:'';

//判断，查询某个商品信息还是获取整个订单表
if($type == 'getlist'){
    $sql = 'SELECT * FROM orderlist';
}else if($type == 'good'){
    // 用用户名找某个人的订单
    $sql = "SELECT * FROM orderlist WHERE username='$username'";
};
// $sql  = "insert into orderlist (id  ,title  ,price  ,num  ) values('$id','$title','$price','$num')";
//执行语句得到结果集：包含很多信息
$res = $conn->query($sql);

//提取信息
$data = $res->fetch_all(MYSQLI_ASSOC);

echo json_encode($data,JSON_UNESCAPED_UNICODE);

//防止乱码
$conn->set_charset('utf8');

//关闭连接，防止资源浪费
$res->close();
$conn->close();


?>