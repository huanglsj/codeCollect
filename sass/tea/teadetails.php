<!DOCTYPE html>
<html>
	<head>
		<?php include('keywords.php'); ?>
		<link rel="stylesheet" href="css/otherpage.css" />
		<script type="text/javascript" src="js/jquery.min.js" ></script>
<!--		<script type="text/javascript" src="js/jquery.fullPage.min.js" ></script>-->
		<!--[if IE]>  
        <script src="js/html5.js"></script> 
        <script src="js/selectivizr.js"></script> 
        <![endif]-->
             <!--<script>
$(function(){
	$('#teadetails').fullpage({
		menu:'.pagenavBar',	
		resize:false,	
		anchors:['section1','section2','section3','section4','section5']
	});
});
</script>-->
	</head>
	<body>
    <div class="teadetails" id="teadetails">
	<div class="section section-head">
		    <div class="header">
				<div class="container">
					<div class="nav-logo">
						<a href="index.php">
							<img src="img/index_06.png" class="img-responsive" />
						</a>
					</div>
					<ul class="nav-menu">
						<li>
							<a href="index.php" <?echo $cur_nav=="index" ? "class='active'": ""?>>
								茶市
							</a>
						</li>
						<li>
							<a href="teagarden.php" <?echo $cur_nav=="teagarden" ? "class='active'": ""?>>
								到茶园逛逛
							</a>
						</li>
						<li>
							<a href="technology.php" <?echo $cur_nav=="teatempered" ? "class='active'": ""?>>
								好茶是这样炼成的
							</a>
						</li>
						<li>
							<a href="teaceremony.php" <?echo $cur_nav=="teaceremony" ? "class='active'": ""?>>
								茶道
							</a>
						</li>
						<li class="hot">
							<a href="teadiscount.php" <?echo $cur_nav=="teadiscount" ? "class='active'": ""?>>
								满200减50
								<img src="img/index_03.png" class="header-hot" />
							</a>
						</li>
					</ul>
					<ul class="nav-userinfo">
						    <li class="mycart"><a href="">购物车(311111)</a>
						    	<div class="mycart-rrow"></div>
						    	<ul class="mycart-ul">
								<li>
									<div class="mycart-img"><img src="img/index_11.png" /></div>
									<div class="mycart-tex">日照名坡绿茶</div>
									<div class="mycart-tex">3包 ￥298.00</div>
									<div class="mycart-del">×</div>
								</li>
								<li>
									<div class="mycart-img"><img src="img/index_11.png" /></div>
									<div class="mycart-tex">日照名坡绿茶</div>
									<div class="mycart-tex">3包 ￥298.00</div>
									<div class="mycart-del">×</div>
								</li>
								<li>
									<div class="mycart-img"><img src="img/index_11.png" /></div>
									<div class="mycart-tex">日照名坡绿茶</div>
									<div class="mycart-tex">3包 ￥298.00</div>
									<div class="mycart-del">×</div>
								</li>
								<li class="mycart-ul-lastli">
									<div class="cart-lastlitit">
										<p>共3件商品</p>
										<p class="money">￥298.00</p>
									</div>
									<div class="cart-lastlia"><a href="">去购物车结算</a></div>
								</li>
							</ul>
						    </li>
						    <li class="mycart-name"><a href="">哈哈哈哈哈哈哈哈</a></li>
						    <li class="mycart-out"><a href="">退出</a></li>
					</ul>
				</div>
			</div>
			<div class="teaDet container">
				<p class="teaDet-share">喜大奔普：<a href=""><img src="img/fx2.png" /></a><a href=""><img src="img/fx1.png" /></a><a href=""><img src="img/u109.png" /></a><a href=""><img src="img/fx3.png" /></a><a href=""><img src="img/fx5.png" /></a></p>
				
				<div class="teaDet-con">
					<div class="teaDet-con-left">
						<div class="bigimg"><img src="img/index_11.png" class="img-responsive" /></div>
						<div class="smallimg cl">
							<div><img src="img/index_11.png" class="img-responsive" /></div>
							<div><img src="img/index_11.png" class="img-responsive" /></div>
							<div><img src="img/index_11.png" class="img-responsive" /></div>
							<div><img src="img/index_11.png" class="img-responsive" /></div>
						</div>
					</div>
					<div class="teaDet-con-right">
						<h2 class="teaDet-right-name">日照名坡春茶</h2>
						<div class="teaDet-list">
							<div>
								<div class="teaDet-list-name"><b>产</b>地：</div>
								<div class="teaDet-list-con"><span class="active">山东日照</span><span>山东日照</span><span>山东日照</span><span>山东日照</span></div>
							</div>
							<div>
								<div class="teaDet-list-name"><b>工</b>艺：</div>
								<div class="teaDet-list-con"><span class="active">山东日照</span><span>山东日照</span><span>山东日照</span><span>山东日照</span></div>
							</div>
							<div>
								<div class="teaDet-list-name">外包装：</div>
								<div class="teaDet-list-con"><span class="active">山东日照</span><span>山东日照</span><span>山东日照</span><span>山东日照</span></div>
							</div>
							<div>
								<div class="teaDet-list-name">内包装：</div>
								<div class="teaDet-list-con"><span class="active">山东日照</span><span>山东日照</span><span>山东日照</span><span>山东日照</span></div>
							</div>
							
							<div class="teaDet-right-price">
								<div class="teaDet-list-name"><b>售</b>价：</div>
								<div class="teaDet-list-con">¥99.00 / 1包 / 9g，折合¥11.00 / 1g</div>
							</div>
							
							<div class="teaDet-right-number">
								<div class="teaDet-list-name"><b>数</b>量：</div>
								<div class="teaDet-list-con">
									<span class="active">10包<br />￥298.00</span>
									<span>10包<br />￥298.00</span>
									<span>10包<br />￥298.00</span>
									<span>10包<br />￥298.00</span>
									<span class="last-span"><b class="last-span-cut">-</b><input type="text" class="teaDet-text" value="4" /><b class="last-span-plus">+</b><br />￥298.00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="teaDet-bottom">
					你选购了一下产品：日照名坡春茶 日照名坡 深度加工 简单稳重+绿色心情 3包。 共需支付：<span>￥268.00</span>
					<a href="">立即购买</a>
				</div>
			</div>		
	</div>

	<div class="section container">
		
			<p class="page-txt">景阳青茶园地处鲁东南风景秀丽的磴山脚下，茶园北依世界五大太阳崇拜起源地日照天台山，西邻黄海九寨沟，原生态环境保护极好，公司下设栗香茶叶专业合作社、茶厂、茶业研究所、网络营销中心,是山东省较早导入CIS战略的现代化茶叶生产、加工、销售和茶文化传播企业，是山东省茶叶生产加工技术研究推广中心和山东省茶叶工程技术研究中心实验点,现有高级农艺师2名</p>
			<p class="page-img"><img src="img/1.jpg" class="img-responsive" /></p>
		
	</div>

	<div class="section container">
		
			<p class="page-txt">景阳青茶园地处鲁东南风景秀丽的磴山脚下，茶园北依世界五大太阳崇拜起源地日照天台山，西邻黄海九寨沟，原生态环境保护极好，公司下设栗香茶叶专业合作社、茶厂、茶业研究所、网络营销中心,是山东省较早导入CIS战略的现代化茶叶生产、加工、销售和茶文化传播企业，是山东省茶叶生产加工技术研究推广中心和山东省茶叶工程技术研究中心实验点,现有高级农艺师2名</p>
			<p class="page-img"><img src="img/3.jpg" class="img-responsive" /></p>
	
	</div>

	<div class="section container">
		
			<p class="page-txt">景阳青茶园地处鲁东南风景秀丽的磴山脚下，茶园北依世界五大太阳崇拜起源地日照天台山，西邻黄海九寨沟，原生态环境保护极好，公司下设栗香茶叶专业合作社、茶厂、茶业研究所、网络营销中心,是山东省较早导入CIS战略的现代化茶叶生产、加工、销售和茶文化传播企业，是山东省茶叶生产加工技术研究推广中心和山东省茶叶工程技术研究中心实验点,现有高级农艺师2名</p>
			<p class="page-img"><img src="img/2.jpg" class="img-responsive" /></p>
		
	</div>
	
	<div class="section section-foot">
		  <div class="container">
		  	<p class="page-txt">景阳青茶园地处鲁东南风景秀丽的磴山脚下，茶园北依世界五大太阳崇拜起源地日照天台山，西邻黄海九寨沟，原生态环境保护极好，公司下设栗香茶叶专业合作社、茶厂、茶业研究所、网络营销中心,是山东省较早导入CIS战略的现代化茶叶生产、加工、销售和茶文化传播企业，是山东省茶叶生产加工技术研究推广中心和山东省茶叶工程技术研究中心实验点,现有高级农艺师2名</p>
			<p class="page-img"><img src="img/2.jpg" class="img-responsive" /></p>
		  </div>
			
		
	</div>
</div>


<?php include('footer.php'); ?>	
<script type="text/javascript" src="js/comment.js" ></script>
	</body>
</html>