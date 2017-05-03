/*
Name: 			DevSolution Animation Content
Written by: 	Sami Maxhuni - (http://www.devsolution.info || http://samimaxhuni.info)
Version: 		1.0
*/

(function($){

	"use strict";

	$.fn.DevSolutionAnime = function(options){
		 // Establish our default settings
        var settings = $.extend({
            parent_class : '.animated-area',
            child_class  : '.animated',
            anime_attr   : 'data-devanime',
            delay_attr   : 'data-devanime-delay',
            anime_hide   : false
        }, options);


		this.each(function(){
        	var $this = this;
		
		if(settings.anime_hide){
			$(settings.parent_class).find(settings.child_class).each(function(){
				$(this).find(".animated").css({'opacity' : 0});
			});
		}
			$(window).scroll(function() {
				$(settings.parent_class).each(function() {
				    if($(window).height() + $(window).scrollTop() - $(this).offset().top > 0) {
						$(this).trigger("dev-anime");
					}
				});
			});
		});


		$(settings.parent_class).live("dev-anime", function() {
				var cf = $(this);
				cf.find(settings.child_class).each(function() {
					$(this).css("-webkit-animation-duration","0.9s");
				    $(this).css("-moz-animation-duration","0.9s");
				    $(this).css("-ms-animation-duration","0.9s");
				    $(this).css("animation-duration","0.9s");
				    $(this).css("-webkit-animation-delay",$(this).attr(settings.delay_attr));
					$(this).css("-moz-animation-delay",$(this).attr(settings.delay_attr));
					$(this).css("-ms-animation-delay",$(this).attr(settings.delay_attr));
				    $(this).css("animation-delay",$(this).attr(settings.delay_attr));
					$(this).addClass($(this).attr(settings.anime_attr));
				});
		});
	}
}(jQuery));
