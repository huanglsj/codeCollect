var winHeight = $(document).height()-40;
$(".adminIndex-con").css("min-height",winHeight);

//左边菜单开始
//$(".submenu > li").click(function(){
//	$(".submenu > li > a").css("color","#868686");
//	$(this).children().css("color","#CC0000");
//});
//$(".adminCon-left > ul > li").click(function(){
//	$(".adminCon-left .submenu").hide();
//	$(this).children(".submenu").slideDown();
//	$(this).attr("class","active");
//});
//
//
//$(".adminCon-left > ul > li > .submenu > li").click(function() {
//	var trid = $(this).index();
//	if(trid==0){
//		window.location.href = 'index.php';
//	}
//	if(trid==1){
//		window.location.href = 'ordermanage.php';
//	}
//})
//左边菜单结束

//会员管理开始
$(".vadmin-table .vip-td-a .frozen").click(function(){
	$(".vipindex-fixed").is(":hidden") ? $(".vipindex-fixed").fadeIn() : $(".vipindex-fixed").fadeOut();
});
//会员管理结束

//订单管理开始
$(".orderM-con .release").click(function(){
	$(".order-fixed").is(":hidden") ? $(".order-fixed").fadeIn() : $(".order-fixed").fadeOut();
});
//订单管理结束

//产品管理开始
//$(".product .product-add").click(function(){
//	$(".product-showadd").fadeIn();
//});
$(".product-showadd .product-showadd-close").click(function(){
	$(".product-showadd").fadeOut();
});
//$(".product .seller-head .seller-head-add").click(function(){
//	$("#discounted-fixed1").is(":hidden") ? $("#discounted-fixed1").fadeIn() : $("#discounted-fixed1").fadeOut();
//});
//$(".product-showadd-con .pro-span .pro-showadd-file").change(function(){
//	$(".product-showadd-con .pro-span a").html($(this).val());
//});
//产品管理结束

//优惠管理开始
$(".discount .discount-add").click(function(){
	$("#discount-fixed").fadeIn();
});
$(".discount-fixed .dis-close").click(function(){
	$(".discount-fixed").fadeOut();
});

$(".discount .discount-list .discount-a-edit").click(function(){
	$("#discounted-fixed1").is(":hidden") ? $("#discounted-fixed1").fadeIn() : $("#discounted-fixed1").fadeOut();
});
//优惠管理结束

//活动管理之发布活动开始
$(".activity-head .release").click(function(){
	$(".activity-fixed").fadeIn();
});
$(".activity-fixed .activity-close").click(function(){
	$(".activity-fixed").fadeOut();
});
//活动管理之发布活动结束

//商家管理开始
$(".seller-head .seller-head-add").click(function(){
	$("#seller-fixed").is(":hidden") ? $("#seller-fixed").fadeIn() : $("#seller-fixed").fadeOut();
});

$(".seller-ul .seller-shade-a .seller-a-edit").click(function(){
	$("#sellered-fixed1").is(":hidden") ? $("#sellered-fixed1").fadeIn() : $("#sellered-fixed1").fadeOut();
});
//商家管理结束

//产品类别开始
$(".ttype-ul .seller-shade-a .sellered-a-edit").click(function(){
	$("#ttpye-fixed1").is(":hidden") ? $("#ttpye-fixed1").fadeIn() : $("#ttpye-fixed1").fadeOut();
});
//产品类别结束

//产品品牌开始
$(".brand-ul .seller-shade-a .brand-a-edit").click(function(){
	$("#brand-fixed1").is(":hidden") ? $("#brand-fixed1").fadeIn() : $("#brand-fixed1").fadeOut();
});
//产品品牌结束

//素材管理开始
var materA = $(".material-head a");
var materLine = $(".material-head .material-line");
materA.mouseenter(function(){
	materLine.stop();
	var index = $(this).index();
	materLine.animate({"left":index*160});
	$(this).css("color", "#cc0000").siblings().css("color", "#a1a1a1");	
});
materA.mouseleave(function(){
	materLine.stop();
	for(var i = 0;i < materA.length;i++){
		if(materA.eq(i).hasClass("active")){
			materLine.animate({"left":materA.eq(i).index()*160});
			materA.eq(i).addClass("active");
			materA.eq(i).css("color", "#cc0000").siblings().css("color", "#a1a1a1");
		}
	}
});

$(".matered-fixed .matered-close").click(function(){
	$(".matered-fixed").fadeOut();
});
$(".material-ul li.mater-lastli").click(function(){
	$("#matered-fixed").is(":hidden") ? $("#matered-fixed").fadeIn() : $("#matered-fixed").fadeOut();
});
$(".material-ul .mater-edit").click(function(){
	$("#matered1").is(":hidden") ? $("#matered1").fadeIn() : $("#matered1").fadeOut();
});
//素材管理结束

$(function(){
	materLine.css("left",$(".material-head a.active").index()*160);
})
