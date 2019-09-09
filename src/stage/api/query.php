<?php
    include 'conn.php';


        $sql = 'SELECT * FROM stagelist';
            
     //执行语句得到结果集：包含很多信息
        $res = $conn->query($sql);

     //提取信息
        $data = $res->fetch_all(MYSQLI_ASSOC);

        echo json_encode($data,JSON_UNESCAPED_UNICODE);

    
    $conn->set_charset('utf8');

    $res->close();
    $conn->close();
?>