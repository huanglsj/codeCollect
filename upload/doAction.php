<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/12/10
 * Time: 14:10
 */
print_r($_FILES);
$filename = $_FILES['file']['name'];
$type = $_FILES['file']['type'];
$tmp_name = $_FILES['file']['tmp_name'];
$size = $_FILES['file']['size'];
$error = $_FILES['file']['error'];

//move_upload_file($tmp_name,$destination):将服务器上的临时文件移到指定目录之下
//move_uploaded_file($tmp_name,"uploads/".$filename);

//copy($src,$dst):将文件拷贝到指定目录之下
copy($tmp_name,"uploads/".$filename);