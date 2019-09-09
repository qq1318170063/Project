<?php

    header("Content-type:text/html;charset=utf-8");
    
    //设置参数，建立连接
    $servername = 'localhost';//主主机名，链接的是wamp里面的数据库，因为安装在本地，所以写localhost,上线后可能改成ip
    $username = 'root';
    $password = 'root';
    $dbname = 'sasa';


    //建立连接
    $conn = new mysqli($servername,$username,$password,$dbname);

    //判断是否成功
    // var_dump($conn);
    //js调取属性和方法： arr.lenght  arr.push()
    //php调取属性和方法：$conn->属性名   $conn->方法名()
    if($conn->connect_error){
        //有数据返回,就证明失败了
        die("连接失败:" . $conn->connect_error);
    }else{
        
    };
?>