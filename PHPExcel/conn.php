<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/13
 * Time: 10:53
 */
$conn=mysql_connect("192.168.2.6","root","312461613") or die("数据库服务器连接错误".mysql_error());

mysql_select_db("offical",$conn) or die("数据库访问错误".mysql_error());

mysql_query("set character set utf-8");

mysql_query("set names utf-8");