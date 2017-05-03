<!DOCTYPE html>
<html>
	<head>
		<?php include('keywords.php'); ?>
		<script type="text/javascript" src="js/jquery.min.js" ></script>
		<!--[if IE]>  
        <script src="js/html5.js"></script> 
        <script src="js/selectivizr.js"></script> 
        <![endif]-->
	</head>
	<body>
    <div class="header">
		<div class="container">
			<div class="nav-logo">
				<a href="index.php">
					<img src="img/index_06.png" class="img-responsive" />
				</a>
			</div>
			<div class="nav-name"><a href="javascript:;">重新设置你的密码</a></div>			
		</div>
	</div>
	
	<div class="container">
		<div class="login">
			<div class="login-head">欢迎来到XXX，我们将竭诚为你服务。</div>
			<div class="login-con">				
				<form class="login-form">
					<input type="text" class="login-text" placeholder="手机/邮箱" />
					<input type="text" class="login-yzm" placeholder="验证码" /><a href="javascript:;" class="login-obtain">获取验证码</a>
					<input type="password" class="login-paw" placeholder="新密码" />
					<input type="submit" value="提交" class="login-btn" />
				</form>				
			</div>	
		</div>
	</div>																
<?php include('footer.php'); ?>	
	</body>
</html>