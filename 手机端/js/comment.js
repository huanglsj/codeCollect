$(function(){
	TouchSlide({slideCell: "#index_banner",effect: "leftLoop",interTime: 4e3,autoPlay: !0,defaultIndex:0});
	
	$(window).resize(function(){
		var lmheight = $(".carousel").height();
	    var hheight = $("header").height();
	});
	
	$(".content").scroll(function(){
		 var lmheight = $(".carousel").height();
	var hheight = $("header").height();
		if($(".content").scrollTop() >= lmheight){
		   $(".news-icon").addClass("active");
		   $(".news-icon").css("top",hheight);
	    }else{
	       $(".news-icon").removeClass("active");
	       $(".news-icon").css("top",initial);
	    }
	});
})	
$(".panel > .panel-body > .reason > span").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});
