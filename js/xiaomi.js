$(function() {
	var $onavmenu = $(".nav_menu");
	var $onavmenuItem = $onavmenu.find(".menu_item");
	var $onavlable = $onavmenu.find(".nav_lable");
	var top = $onavmenu.find(".current").position().top;
	$onavlable.css({
		top: parseInt(top)
	});
	$onavmenu.on({
		mouseleave: function() {
			$onavlable.animate({
				top: parseInt(top)
			}, 200)
		}
	});
	$onavmenuItem.on({
		mouseenter: function() {
			var top = $(this).position().top;
			$onavlable.animate({
				top: parseInt(top)
			}, 200)
		},
		mouseleave: function() {
			$onavlable.stop()
		}
	})
});