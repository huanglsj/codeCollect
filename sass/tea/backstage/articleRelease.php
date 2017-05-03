<!DOCTYPE html>
<html >
	<head>
		<meta charset="utf-8">
		<title>茶叶商城管理系统_文章发布</title>
		<link rel="stylesheet" href="css/reset.css" />		
		<link rel="stylesheet" href="css/admin.css" />
		<link rel="stylesheet" href="css/adminpage.css" />
		<script type="text/javascript" src="js/jquery.min.js" ></script>
		<script type="text/javascript" charset="utf-8" src="ueditor/ueditor.config.js"></script>
        <script type="text/javascript" charset="utf-8" src="ueditor/ueditor.all.min.js"> </script>
        <script type="text/javascript" charset="utf-8" src="ueditor/lang/zh-cn/zh-cn.js"></script>
		<!--[if IE]>  
        <script src="js/html5.js"></script> 
        <script src="js/selectivizr.js"></script> 
        <![endif]--> 
	</head>
	<body>
		<div class="container adminIndex">
			<?php include('adminhead.php'); ?>
			
			<div class="otherpage">
				<div class="articleCon articlefabu">
					<form>
					<table cellpadding="0" cellspacing="0" border="0">
						<tr>
							<td class="fabu-taname">发布人</td>
							<td><input type="text" /></td>
						</tr>
						<tr>
							<td class="fabu-taname">标题</td>
							<td><input type="text" /></td>
						</tr>
						<tr>
							<td class="fabu-taname">关键词</td>
							<td><input type="text" /></td>
						</tr>
						<tr>
							<td class="fabu-taname">是否置顶</td>
							<td class="fabu-tanametop"><input type="checkbox" /></td>
						</tr>
						<tr>
							<td class="fabu-taname">缩略图</td>
							<td class="fabu-namefile"><input type="file" /></td>
						</tr>
						<tr>
							<td class="fabu-taname fabu-tanamejs">简述</td>
							<td class="fabu-tanamejs"><textarea></textarea></td>
						</tr>
						<tr>
							<td class="fabu-taname fabu-tanames">内容</td>
							<td><script id="editor" type="text/plain" style="width:1024px;height:500px;"></script></td>
						</tr>
						<tr>
							<td colspan="2" class="fabu-btn"><input type="submit" value="发布" /></td>
						</tr>
					</table>
					</form>
				</div>
			</div>
		</div>
		
		
		<script type="text/javascript" src="js/admin.js" ></script>
		<script type="text/javascript">	
	       var ue = UE.getEditor('editor',{
	       	 elementPathEnabled: false
	       });
	    </script>
	</body>
</html>