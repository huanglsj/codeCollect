/**
 * mousewheel事件缓动效果
 * @param elemId 目标ID
 * @param distance 移动距离
 * @param duration 动画时长
 */
function inchingAnim(elemId, distance, duration) {
    if(!document.getElementById(elemId) || !distance) {
        throw new Error('Function "inchingAnim" 缺少必须定义的参数值！');
        return;
    }
    duration = duration || '3s';
    var lemall = {
        inViewport: function (Elem, InFactor) {
            var elemHeigth = Elem.offsetHeight, //标签高度
                scrolledTop = this.getScrollTop(), //滚动条位置
                viewed = scrolledTop + this.getViewportHeight(), //滑动条 + 窗口可见高度
                elemTop = this.getDocOffset(Elem).top; //标签距离顶端距离
            // if 0,   目标进入视窗即执行;
            // if 0.5, 目标进入视窗一半即执行;
            // if 1,   目标完全进入视窗即执行;
            var inH = 0;
            if(InFactor > 0 && InFactor < 1) {
                inH = InFactor;
            } else if(InFactor === 0) {
                inH = 0;
            }else {
                inH = 1;
            }
            return {
                isDownIn: (elemTop + elemHeigth * inH) <= viewed, //容器从下面移入
                isDownOut: (elemTop + this.getViewportHeight() + elemHeigth * inH) <= viewed, //容器从上面移出
                isUpIn: (elemTop + this.getViewportHeight() + elemHeigth * inH) >= viewed, //容器从上面移入
                isUpOut: (elemTop + elemHeigth * inH) >= viewed //容器从下面移出
            };
        },
        getScrollTop: function() {
            return document.documentElement.scrollTop || document.body.scrollTop;
        },
        getViewportHeight: function() {
            return document.documentElement.clientHeight || document.body.clientHeight;
        },
        getDocOffset: function(TargetElem) {
            var rect = TargetElem.getBoundingClientRect(),
                body = document.body,
                docElem = document.documentElement,
            //for ie
                clientTop = docElem.clientTop || body.clientTop || 0,
                clientLeft = docElem.clientLeft || body.clientLeft || 0,
                zoom = 1;
            if(body.getBoundingClientRect) {
                var bound = body.getBoundingClientRect();
                zoom = (bound.right - bound.left) / body.clientWidth;
            }
            if(zoom > 1) {
                clientTop = 0;
                clientLeft = 0;
            }
            var top = rect.top / zoom + (window.pageYOffset || docElem && docElem.scrollTop / zoom || body.scrollTop / zoom) - clientTop,
                left = rect.left / zoom + (window.pageXOffset || docElem && docElem.scrollLeft / zoom || body.scrollLeft / zoom) - clientLeft;
            return {
                top: parseInt(top, 10),
                left: parseInt(left, 10)
            };
        },
        wheelBind: (function() {
            var eventCompat = function(e) {
                //兼容处理
                e = e || window.event;
                var type = e.type;
                if(type === 'DOMMouseScroll' || type === 'mousewheel') {
                    e.delta = (e.wheelDelta) ? e.wheelDelta / 120 : -(e.detail) / 3;
                }
                e.target = e.target || e.srcElement;
                //如果 Elem === window 注释掉下行代码
                //e.preventDefault ? e.preventDefault() : e.returnValue = !!0;
                return e;
            };
            if(window.addEventListener) {
                return function(Elem, Type, Fn) {
                    if(Type === "mousewheel" && document.mozHidden !== undefined) { //Firefox
                        Type = "DOMMouseScroll";
                    }
                    Elem.addEventListener(Type, function(e) {
                        Fn.call(this, eventCompat(e));
                    }, false);
                }
            } else if(window.attachEvent) {
                return function(Elem, Type, Fn) {
                    Elem.attachEvent("on" + Type, function(e) {
                        Fn.call(this, eventCompat(e));
                    });
                }
            }
            return function() {};
        }()),
        animCss3: function(TargetElem, StyleObj, CallBack) {
            var newDiv = document.createElement('div');
            //适配各浏览器CSS3私有属性名称
            var _fitAttrName = function(attrName) {
                if(attrName in newDiv.style) {
                    return attrName;
                }
                var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
                var noramlProp = attrName.charAt(0).toLocaleUpperCase() + attrName.substr(1);
                for(var i = 0; i < prefixes.length; ++i) {
                    var vendorProp = prefixes[i] + noramlProp;
                    if(vendorProp in newDiv.style) {
                        return vendorProp;
                    }
                }
            };
            //经过适配的CSS3私有属性名称
            var _support = {
                transition: _fitAttrName('transition'),
                transitionProperty: _fitAttrName('transitionProperty'),
                transitionDuration: _fitAttrName('transitionDuration'),
                transitionTimingFunction: _fitAttrName('transitionTimingFunction'),
                transitionDelay: _fitAttrName('transitionDelay'),
                transform: _fitAttrName('transform'),
                transformOrigin: _fitAttrName('transformOrigin'),
                filter: (function() {
                    return /chrome/.test(window.navigator.userAgent.toLowerCase()) ? 'webkitFilter' : 'filter';
                }())
            };
            var eventNames = {
                'transition': 'transitionend',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'WebkitTransition': 'webkitTransitionEnd',
                'msTransition': 'MSTransitionEnd'
            };
            //Transition动画结束监听
            var transitionEnd = eventNames[_support.transition] || null;
            bind(TargetElem, transitionEnd, function() {
                TargetElem.style[_support.transition] = '';
                if(!!CallBack) {
                    CallBack();
                }
            });
            //样式写入
            if(StyleObj instanceof Object) {
                for(var attr in StyleObj) {
                    if(StyleObj.hasOwnProperty(attr)) {
                        if(attr === 'filter') {
                            TargetElem.style[_support.filter] = StyleObj[attr];
                        } else {
                            var newAttr = _fitAttrName(attr);
                            TargetElem.style[newAttr] = StyleObj[attr];
                        }
                    }
                }
            }
            //事件监听Fn
            function bind(TargetElem, Type, Fn) {
                return TargetElem.addEventListener ? TargetElem.addEventListener(Type, Fn, false) : TargetElem.attachEvent('on' + Type, Fn);
            }
            //避免IE内存泄露
            newDiv = null;
        }
    };
    //入口
    function init() {
        var targetElem = document.getElementById(elemId);
        var viewPortsHeight = lemall.getViewportHeight(); //视口可见高度
        var totalScrollTop = 0; //页面总滑动长度
        var styleReset = false; //CSS3样式重置

        //视窗改变重新计算滑动总长度
        function resizeFn() {
            totalScrollTop = document.body.scrollHeight - lemall.getViewportHeight();
        }
        resizeFn();
        window.onresize = resizeFn;
        //滑动交互
        function wheelFn() {
            var scrollTop = lemall.getScrollTop(); //当前滑动距离
            if(scrollTop <= 0 || scrollTop >= totalScrollTop) {
                lemall.animCss3(targetElem, {
                    'transform': 'translateY(0px)'
                });
                return;
            }
            var isDownIn = lemall.inViewport(targetElem, 0).isDownIn;
            var isUpOut = lemall.inViewport(targetElem, 0).isUpOut;
            if(isDownIn) {
                styleReset = true;
                var targetTop = lemall.getDocOffset(targetElem).top;
                var targetScrollTop = scrollTop + viewPortsHeight - targetTop;
                var totalY = (distance * targetScrollTop) / (viewPortsHeight + targetElem.offsetHeight);
                if(distance > 0 && totalY >= distance || distance < 0 && totalY <= distance) {
                    totalY = distance;
                }
                lemall.animCss3(targetElem, {
                    'transform': 'translateY(' + totalY + 'px)',
                    'transition': 'all ' + duration + ' linear'
                });
            }
            if(isUpOut && styleReset) {
                lemall.animCss3(targetElem, {
                    'transform': 'translateY(0px)'
                });
                styleReset = false;
            }
        }
        lemall.wheelBind(window, 'mousewheel', wheelFn);
    }
    init();
}