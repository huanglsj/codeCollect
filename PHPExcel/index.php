<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/13
 * Time: 10:52
 */
include("conn.php");

require_once 'PHPExcel.php';

require_once 'PHPExcel/IOFactory.php';

require_once 'PHPExcel/Reader/Excel5.php';

$objReader = PHPExcel_IOFactory::createReader('excel2007'); //use Excel5 for 2003 format

$excelpath='test.xlsx';

$objPHPExcel = $objReader->load($excelpath);

$sheet = $objPHPExcel->getSheet(0);

$highestRow = $sheet->getHighestRow();           //取得总行数

$highestColumn = $sheet->getHighestColumn(); //取得总列数

for ($j = 1; $j <= $highestRow; $j++)                        //从第二行开始读取数据
{
    $str = "";
    for ($k = 'A'; $k <= $highestColumn; $k++)            //从A列读取数据
    {
        $str .= $objPHPExcel->getActiveSheet()->getCell("$k$j")->getValue() . '|*|';//读取单元格
    }
    $str = mb_convert_encoding($str, 'utf-8', 'auto');//根据自己编码修改
    $strs = explode("|*|", $str);

    $sql = "insert into offical_article (title,description,content,fid,istop,source,thumbnail,create_time,status) values ('{$strs[0]}','{$strs[1]}','{$strs[2]}','{$strs[3]}','{$strs[4]}','{$strs[5]}','{$strs[6]}','{$strs[7]}','{$strs[8]}')";
    if (!mysql_query($sql, $conn)) {
        echo 'excel err';
    }
}