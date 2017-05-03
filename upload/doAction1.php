<?php
header('content-type:text/html;charset=utf-8');
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/12/10
 * Time: 15:46
 */
$fileInfo = $_FILES['file'];
$filename = $fileInfo['name'];
$type = $fileInfo['type'];
$tmp_name = $fileInfo['tmp_name'];
$size = $fileInfo['size'];
$error = $fileInfo['error'];

if($error==UPLOAD_ERR_OK){
   if(move_uploaded_file($tmp_name,"uploads/".$filename)){
       echo "文件上传成功";
   }else{
       echo "文件上传失败";
   }
}else{
    switch($error){
        case 1:
            echo "上传文件超过了php配置upload_max_filesize选项的值";
            break;
        case 2:
            echo "上传文件超过了表单max_file_size限制的值";
            break;
        case 3:
            echo "文件部分上传";
            break;
        case 4:
            echo "没有选择上传文件";
            break;
        case 6:
            echo "没有找到临时目录";
            break;
        case 7:
        case 8:
            echo "系统错误";
            break;
    }
}