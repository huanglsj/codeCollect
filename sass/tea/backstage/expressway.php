<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>茶叶商城管理系统_首页</title>
		<link rel="stylesheet" href="css/reset.css" />
		<link rel="stylesheet" href="css/admin.css" />
		<script type="text/javascript" src="js/jquery.min.js" ></script>
		<!--[if IE]>  
        <script src="js/html5.js"></script> 
        <script src="js/selectivizr.js"></script> 
        <![endif]--> 
	</head>
	<body>
		<div class="container adminIndex">
			<?php include('adminhead.php'); ?>
			
			<div class="adminIndex-con">
				<div class="adminCon-left">
				   <?php $admin_cur="express"; include('adminLeftMenu.php'); ?>
				</div>
				<div class="adminCon-right">
					
					<div class="seller">
						<div class="seller-head">							
							
						</div>
						
						<div class="express">
							<table cellpadding="0" cellspacing="0" border="0">
								<tr>
									<td>序号</td>
									<td>快递名称</td>
									<td>快递编码</td>
									<td>快递客服电话</td>
									<td>状态</td>
									<td>省内邮费</td>
									<td>省外邮费</td>
								</tr>
								<tr>
									<td>1</td>
									<td>11111111111</td>
									<td>12</td>
									<td>123456</td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>1</td>
									<td>11111111111</td>
									<td>12</td>
									<td>1</td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</table>
						</div>
					</div>
					
					<ul class="adminpage">
						<li class="adminpage-first"><a href=""><img src="img/u107.png" /></a></li>
						<li class="adminpage-prev"><a href=""><img src="img/u105.png" /></a></li>
						<li><a href="">1</a></li>
						<li class="active"><a href="">2</a></li>
						<li class="adminpage-point"><a href="">...</a></li>
						<li><a href="">45</a></li>
						<li><a href="">46</a></li>
						<li class="adminpage-next"><a href=""><img src="img/u111.png" /></a></li>
						<li class="adminpage-last"><a href=""><img src="img/u109.png" /></a></li>
						<li class="adminpage-search"><input type="text" /><a href="">GO</a></li>	
					</ul>
				</div>
			</div>
		</div>
		
		<div class="discount-fixed seller-fixed" id="seller-fixed">
			<div class="dis-close">×</div>
			<div class="dis-head">添加管理员</div>
			<div class="dis-con">
				<form>
					<input type="text" placeholder="用户名" />
					<input type="password" placeholder="密码" />
					<input type="text" placeholder="手机号码" />
					<input type="text" placeholder="角色" />
					<input type="submit" value="确定" class="dis-btn" />
				</form>				
			</div>
		</div>

		<script type="text/javascript" src="js/admin.js" ></script>
	</body>
</html>