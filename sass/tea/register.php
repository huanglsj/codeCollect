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
			<div class="nav-name"><a href="javascript:;">注册成为会员，获取更好的服务体验</a></div>			
		</div>
	</div>
	
	<div class="container">
		<div class="login">
			<div class="login-head">欢迎来到XXX，我们将竭诚为你服务。</div>
			<div class="login-con">
				<a href="" class="login-aicon"><img src="img/fx2.png" />使用微信账号注册</a>
				<a href="" class="login-aicon"><img src="img/fx4.png" />使用QQ账号注册</a>
				<a href="" class="login-aicon"><img src="img/fx5.png" />使用微博账号注册</a>
				<div class="divline">或</div>
				<form class="login-form">
					<input type="text" class="login-text" placeholder="手机/邮箱" />
					<input type="text" class="login-yzm" placeholder="验证码" /><a href="javascript:;" class="login-obtain">获取验证码</a>
					<input type="password" class="login-paw" placeholder="密码" />
					<input type="submit" value="注册" class="login-btn" />
				</form>
				<div class="login-bottom">
					已经是茶叶商城的会员？<a href="login.php">登录</a>
				</div>
			</div>	
		</div>
	</div>																
<?php include('footer.php'); ?>	
	</body>
</html>