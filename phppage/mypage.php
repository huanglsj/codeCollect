<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        a{
            display: inline-block;
            padding: 5px 8px;
            margin: 0 5px;
            border: 1px solid #ddd;
            color: #333;
            text-decoration: none;
        }
        a.active{
            background-color: #0050ef;
            color: #fff;
        }
        a.disable{
            color: #ddd;
        }
    </style>
</head>
<body>
<?php
header("Content-Type:text/html;   charset=utf-8");
$page = $_GET['p'];
if(!isset($page)){
    $page = 1;
}
if($page<1){
    $page = 1;
}
$host = '192.168.2.6';
$username = 'root';
$password = '312461613';
$db = 'offical';

$pageSize = 10;
$showPage = 5;
$conn = mysql_connect($host,$username,$password);
if(!$conn){
    echo "数据库链接失败";
    exit;
}
mysql_select_db($db);
mysql_query("SET NAMES UTF8");
$total_sql = "select count(*) from offical_article";
$total_result = mysql_fetch_array(mysql_query($total_sql));
$total = $total_result[0];
//计算页数
$total_pages = ceil($total/$pageSize);

if($page > $total_pages){
    $page = $total_pages;
}

$sql = "select * from offical_article limit ".(($page-1)*$pageSize).",".$pageSize;

$result = mysql_query($sql);

while($row = mysql_fetch_array($result)){
    echo $row['id'].'=='.$row['title']."<br>";
}
mysql_free_result($result);
mysql_close($conn);
$page_banner= "";

//就是那偏移量
$pageoffset = ($showPage-1)/2;

if($page > 1){
    $page_banner .= "<a href='".$_SERVER['PHP_SELF']."?p=1'>首页</a>";
    $page_banner .= "<a href='".$_SERVER['PHP_SELF']."?p=".($page-1)."'>上一页</a>";
}else{
    $page_banner .="<a class='disable'>首页</a>";
    $page_banner .="<a class='disable'>上一页</a>";
}
$start = 1;
$end = $total_pages;
if($total_pages > $showPage){
    if($page > ($pageoffset+1)){
        $page_banner .= "...";
    }
    if($page > $pageoffset){
        $start = $page - $pageoffset;
        $end = $total_pages > $page + $pageoffset ? $page+$pageoffset : $total_pages;
    }else{
        $start = 1;
        $end = $total_pages > $showPage ? $showPage : $total_pages;
    }
    if(($page + $pageoffset) > $total_pages){
        $start = $start - ($page + $pageoffset - $end);
    }
}
for($i = $start;$i<=$end;$i++){
    if($page == $i){
        $page_banner .= "<a class='active'>".$i."</a>";
    }else{
        $page_banner .= "<a href='".$_SERVER['PHP_SELF']."?p=".($i)."'>".$i."</a>";
    }
}
if($total_pages > $showPage && $total_pages > $page + $pageoffset){
    $page_banner .= "...";
}
if($page<$total_pages){
    $page_banner .= "<a href='".$_SERVER['PHP_SELF']."?p=".($page+1)."'>下一页</a>";
    $page_banner .= "<a href='".$_SERVER['PHP_SELF']."?p=".$total_pages."'>尾页</a>";
}else{
    $page_banner .="<a class='disable'>下一页</a>";
    $page_banner .="<a class='disable'>尾页</a>";
}

$page_banner .="共".$total_pages."页";

$page_banner .="<form action='".$_SERVER['PHP_SELF']."' method='get'>";
$page_banner .="到第<input type='text' size='2' name='p'>";
$page_banner .="<input type='submit' value='确定'>";
$page_banner .="</form>";
echo $page_banner;
?>
</body>
</html>
