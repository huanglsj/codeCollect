/**
 * Lightswipe 1.0.1
 *
 * https://github.com/jenkiHuang/lightswipe
 *
 * Copyright 2016, jenkiHuang
 * http://www.jenkiHuang.com
 *
 * Licensed under MIT
 *
 * Released on: Jan 05, 2015
 */
(function($) {

    $.fn.lightswipe = function(options) {
        $.fn.lightswipe.defaults = {
            left: $.noop,
            right: $.noop,
            up: $.noop,
            down: $.noop,
            startX:0,
            startY:0,
            endX:0,
            endY:0,
            dis:60 //滑动距离
        };

        return this.each(function() {

            var opts = $.extend({},$.fn.lightswipe.defaults, options),that = $(this);
            var methon = {
                _touchstart:function(e){
                    var ev=e.type=='touchstart'?e.originalEvent.touches[0]:e;
                    opts.startX = ev.pageX,
                        opts.startY = ev.pageY;
                    e.preventDefault();
                },
                _touchmove:function(e){
                    e.preventDefault();
                },
                _touchend:function(e){
                    var ev=e.type=='touchend'?e.originalEvent.changedTouches[0]:e, x,y;
                    opts.endX = ev.pageX;
                    opts.endY = ev.pageY;
                    x = Math.abs(opts.endX - opts.startX);
                    y = Math.abs(opts.endY - opts.startY);
                    methon._direction(x,y);
                },
                _direction:function(x,y){
                    var direction = x >= y ?
                        (opts.endX < opts.startX ? (Math.abs(opts.endX - opts.startX) > opts.dis ? 'left' : null) : (Math.abs(opts.endX - opts.startX) > opts.dis ? 'right' : null))
                        : (opts.endY < opts.startY ? (Math.abs(opts.endY - opts.startY) > opts.dis ? 'up' : null) : (Math.abs(opts.endY - opts.startY) > opts.dis ? 'down' : null));
                    switch (direction) {
                        case 'left':
                            if (opts.left && $.isFunction(opts.left)) {
                                opts.left.call(this);
                            }
                            break;
                        case 'right':
                            if (opts.right && $.isFunction(opts.right)) {
                                opts.right.call(this);
                            }
                            break;
                        case 'up':
                            if (opts.up && $.isFunction(opts.up)) {
                                opts.up.call(this);
                            }
                            break;
                        case 'down':
                            if (opts.down && $.isFunction(opts.down)) {
                                opts.down.call(this);
                            }
                            break;
                    }
                },
                init:function(){

                    that.on('touchstart mousedown',function(e){
                        methon._touchstart(e);
                    });
                    that.on('touchmove.swipe.founder mousemove.swipe.founder',function(e){
                        methon._touchmove(e);
                    })
                    that.on('touchend.swipe.founder mouseup.swipe.founder',function(e){
                        methon._touchend(e);
                    });
                }
            }
            methon.init();
        });
    }

})(jQuery);