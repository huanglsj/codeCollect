'use strict';

/*
 * fixed CustomEvent
 * */
//(function (window) {
//  if (typeof window.CustomEvent === 'undefined') {
//      function CustomEvent(event, params) {
//          params = params || {
//                  bubbles: false,
//                  cancelable: false,
//                  detail: undefined
//              };
//          var evt = document.createEvent('Events'), bubbles = true, n;
//          for (n in params) {
//              (n === 'bubbles') ? (bubbles = !!params[n]) : (evt[n] = params[n]);
//          }
//          evt.initEvent(event, bubbles, true);
//          return evt;
//      }
//
//      CustomEvent.prototype = window.Event.prototype;
//      window.CustomEvent = CustomEvent;
//  }
//})(window);


/*
 *分类	    参数	        描述
 *点击	    tap	        单击屏幕
 *          doubletap	双击屏幕
 *长按	    longtap	    长按屏幕
 *          hold	    按住屏幕
 *          release	    离开屏幕
 *滑动	    swipeleft	向左滑动
 *          swiperight	向右滑动
 *          swipeup	    向上滑动
 *          swipedown	向下滑动
 *拖动	    dragstart	开始拖动
 *          drag	    拖动中
 *          dragend	    拖动结束
 * */
(function (window, document) {
    var at = {};
    at.gestures = {
        session: {},
        hooks: {}
    };
    /*
     * gesture配置
     * */
    at.gestureConfig = {
        tap: true,
        doubletap: true,
        longtap: true,
        hold: true,
        flick: true,
        swipe: true,
        drag: true,
        pinch: true
    };
    /*
     * slice
     * */
    at.slice = [].slice;
    /*
     * 时间戳
     * */
    at.now = function () {
        return +new Date();
    };
    /*
     * 遍历方法
     * */
    at.each = function (obj, fn) {
        if (obj) {
            var i = 0;
            if (obj.length) {
                for (var n = obj.length; i < n; i++) {
                    if (fn(i, obj[i]) === false)
                        break
                }
            } else {
                for (i in obj) {
                    if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
                        break
                    }
                }
            }
        }
    };
    /*
     * trigger event
     * */
    at.trigger = function (element, eventType, eventData) {
        element.dispatchEvent(new CustomEvent(eventType, {
            detail: eventData,
            bubbles: true,
            cancelable: true
        }));
    };
    /*
     * 注册gesture(手势)
     * */
    at.addGesture = function (gesture) {
        return at.addAction('gestures', gesture);
    };
    /*
     * 执行手势的hooks方法
     * */
    at.doAction = function (type, callback) {
        if (typeof callback == 'function') {
            // 指定了callback
            at.each(at.gestures.hooks[type], callback);
        } else {
            //未指定callback，直接执行
            at.each(at.gestures.hooks[type], function (index, hook) {
                return !hook.handle();
            });
        }
    };
    at.detect = function (event, touch) {
        if (at.gestures.stoped) {
            return;
        }
        at.doAction('gestures', function (index, gesture) {
            if (!at.gestures.stoped) {
                if (at.gestureConfig[gesture.name] !== false) {
                    gesture.handle(event, touch);
                }
            }
        });
    };
    at.addAction = function (type, hook) {
        var hooks = at.gestures.hooks[type];
        if (!hooks) {
            hooks = [];
        }
        hook.index = hook.index || 1000;
        hooks.push(hook);
        hooks.sort(function (a, b) {
            return a.index - b.index;
        });
        at.gestures.hooks[type] = hooks;
        return at.gestures.hooks[type];
    };

    at.isTouchable = 'ontouchstart' in window;
    at.EVENT_CANCEL = 'touchcancel';
    at.EVENT_START = at.isTouchable ? 'touchstart' : 'mousedown';
    at.EVENT_MOVE = at.isTouchable ? 'touchmove' : 'mousemove';
    at.EVENT_END = at.isTouchable ? 'touchend' : 'mouseup';

    var round = Math.round,
        atan2 = Math.atan2,
        abs = Math.abs,
        sqrt = Math.sqrt,
        CAL_INTERVAL = 25,
        targetIds = {};

    var convertTouches = function (touches) {
        for (var i = 0; i < touches.length; i++) {
            !touches['identifier'] && (touches['identifier'] = 0);
        }
        return touches;
    };

    var uniqueArray = function (src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;

        while (i < src.length) {
            var val = key ? src[i][key] : src[i];
            if (values.indexOf(val) < 0) {
                results.push(src[i]);
            }
            values[i] = val;
            i++;
        }

        if (sort) {
            if (!key) {
                results = results.sort();
            } else {
                results = results.sort(function sortUniqueArray(a, b) {
                    return a[key] > b[key];
                });
            }
        }

        return results;
    };

    var getTouches = function (event, touch) {
        var allTouches = convertTouches(at.slice.call(event.touches || [event]));

        var type = event.type;

        var targetTouches = [];
        var changedTargetTouches = [];

        //当touchstart或touchmove且touches长度为1，直接获得all和changed
        if ((type === at.EVENT_START || type === at.EVENT_MOVE) && allTouches.length === 1) {
            targetIds[allTouches[0].identifier] = true;
            targetTouches = allTouches;
            changedTargetTouches = allTouches;
            touch.target = event.target;
        } else {
            var i = 0;
            var targetTouches = [];
            var changedTargetTouches = [];
            var changedTouches = convertTouches(at.slice.call(event.changedTouches || [event]));

            touch.target = event.target;
            var sessionTarget = at.gestures.session.target || event.target;
            targetTouches = allTouches.filter(function (touch) {
//              return hasParent(touch.target, sessionTarget);
            });

            if (type === at.EVENT_START) {
                i = 0;
                while (i < targetTouches.length) {
                    targetIds[targetTouches[i].identifier] = true;
                    i++;
                }
            }

            i = 0;
            while (i < changedTouches.length) {
                if (targetIds[changedTouches[i].identifier]) {
                    changedTargetTouches.push(changedTouches[i]);
                }
                if (type === at.EVENT_END || type === at.EVENT_CANCEL) {
                    delete targetIds[changedTouches[i].identifier];
                }
                i++;
            }

            if (!changedTargetTouches.length) {
                return false;
            }
        }
        targetTouches = uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true);
        var touchesLength = targetTouches.length;
        var changedTouchesLength = changedTargetTouches.length;
        if (type === at.EVENT_START && touchesLength - changedTouchesLength === 0) { //first
            touch.isFirst = true;
            at.gestures.touch = at.gestures.session = {
                target: event.target
            };
        }
        touch.isFinal = ((type === at.EVENT_END || type === at.EVENT_CANCEL) && (touchesLength - changedTouchesLength === 0));

        touch.touches = targetTouches;
        touch.changedTouches = changedTargetTouches;
        return true;

    };

    var getVelocity = function (deltaTime, x, y) {
        return {
            x: x / deltaTime || 0,
            y: y / deltaTime || 0
        };
    };

    var getDistance = function (p1, p2, props) {
        if (!props) {
            props = ['x', 'y'];
        }
        var x = p2[props[0]] - p1[props[0]];
        var y = p2[props[1]] - p1[props[1]];
        return sqrt((x * x) + (y * y));
    };

    var getDirection = function (x, y) {
        if (x === y) {
            return '';
        }
        if (abs(x) >= abs(y)) {
            return x > 0 ? 'left' : 'right';
        }
        return y > 0 ? 'up' : 'down';
    };

    var calIntervalTouchData = function (touch) {
        var session = at.gestures.session;
        var last = session.lastInterval || touch;
        var deltaTime = touch.timestamp - last.timestamp;
        var velocity;
        var velocityX;
        var velocityY;
        var direction;

        if (touch.gesture.type != at.EVENT_CANCEL && (deltaTime > CAL_INTERVAL || last.velocity === undefined)) {
            var deltaX = last.deltaX - touch.deltaX;
            var deltaY = last.deltaY - touch.deltaY;

            var v = getVelocity(deltaTime, deltaX, deltaY);
            velocityX = v.x;
            velocityY = v.y;
            velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
            direction = getDirection(deltaX, deltaY) || last.direction;

            session.lastInterval = touch;
        } else {
            velocity = last.velocity;
            velocityX = last.velocityX;
            velocityY = last.velocityY;
            direction = last.direction;
        }

        touch.velocity = velocity;
        touch.velocityX = velocityX;
        touch.velocityY = velocityY;
        touch.direction = direction;
    };

    var calDelta = function (touch) {
        var session = at.gestures.session;
        var center = touch.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevTouch = session.prevTouch || {};

        if (touch.gesture.type === at.EVENT_START || touch.gesture.type === at.EVENT_END) {
            prevDelta = session.prevDelta = {
                x: prevTouch.deltaX || 0,
                y: prevTouch.deltaY || 0
            };

            offset = session.offsetDelta = {
                x: center.x,
                y: center.y
            };
        }
        touch.deltaX = prevDelta.x + (center.x - offset.x);
        touch.deltaY = prevDelta.y + (center.y - offset.y);
    };

    var getMultiCenter = function (touches) {
        var touchesLength = touches.length;
        if (touchesLength === 1) {
            return {
                x: round(touches[0].pageX),
                y: round(touches[0].pageY)
            };
        }

        var x = 0;
        var y = 0;
        var i = 0;
        while (i < touchesLength) {
            x += touches[i].pageX;
            y += touches[i].pageY;
            i++;
        }

        return {
            x: round(x / touchesLength),
            y: round(y / touchesLength)
        };
    };

    var copySimpleTouchData = function (touch) {
        var touches = [];
        var i = 0;
        while (i < touch.touches.length) {
            touches[i] = {
                pageX: round(touch.touches[i].pageX),
                pageY: round(touch.touches[i].pageY)
            };
            i++;
        }
        return {
            timestamp: at.now(),
            gesture: touch.gesture,
            touches: touches,
            center: getMultiCenter(touch.touches),
            deltaX: touch.deltaX,
            deltaY: touch.deltaY
        };
    };

    var multiTouch = function () {
        return at.gestureConfig.pinch;
    };

    var getAngle = function (p1, p2, props) {
        if (!props) {
            props = ['x', 'y'];
        }
        var x = p2[props[0]] - p1[props[0]];
        var y = p2[props[1]] - p1[props[1]];
        return atan2(y, x) * 180 / Math.PI;
    };

    var calTouchData = function (touch) {
        var session = at.gestures.session;
        var touches = touch.touches;
        var touchesLength = touches.length;

        if (!session.firstTouch) {
            session.firstTouch = copySimpleTouchData(touch);
        }

        if (multiTouch() && touchesLength > 1 && !session.firstMultiTouch) {
            session.firstMultiTouch = copySimpleTouchData(touch);
        } else if (touchesLength === 1) {
            session.firstMultiTouch = false;
        }

        var firstTouch = session.firstTouch;
        var firstMultiTouch = session.firstMultiTouch;
        var offsetCenter = firstMultiTouch ? firstMultiTouch.center : firstTouch.center;

        var center = touch.center = getMultiCenter(touches);
        touch.timestamp = at.now();
        touch.deltaTime = touch.timestamp - firstTouch.timestamp;

        touch.angle = getAngle(offsetCenter, center);
        touch.distance = getDistance(offsetCenter, center);

        calDelta(touch);

        touch.offsetDirection = getDirection(touch.deltaX, touch.deltaY);

        touch.scale = firstMultiTouch ? getScale(firstMultiTouch.touches, touches) : 1;
        touch.rotation = firstMultiTouch ? getRotation(firstMultiTouch.touches, touches) : 0;

        calIntervalTouchData(touch);

    };

    var handleTouchEvent = function (event) {
        var touch = {
            gesture: event
        };
        var touches = getTouches(event, touch);
        if (!touches) {
            return;
        }
        calTouchData(touch);
        at.detect(event, touch);
        at.gestures.session.prevTouch = touch;
        if (event.type === at.EVENT_END && !at.isTouchable) {
            at.gestures.touch = at.gestures.session = {};
        }
    };

    window.addEventListener(at.EVENT_START, handleTouchEvent);
    window.addEventListener(at.EVENT_MOVE, handleTouchEvent);
    window.addEventListener(at.EVENT_END, handleTouchEvent);
    window.addEventListener(at.EVENT_CANCEL, handleTouchEvent);

    if (typeof exports === 'object') module.exports = at;
    else if (typeof define === 'function' && define.amd) define([], function () {
        return at;
    });
    else window.at = at;
})(window, document);
/*
 * 注册tap事件
 * */
(function (at, name) {
    var lastTarget;
    var lastTapTime;
    var handle = function (event, touch) {
        var session = at.gestures.session;
        var options = this.options;
        switch (event.type) {
            case at.EVENT_END:
                if (!touch.isFinal) {
                    return;
                }
                var target = session.target;
                if (touch.distance < options.tapMaxDistance && touch.deltaTime < options.tapMaxTime) {
                    if (at.gestureConfig.doubletap && lastTarget && (lastTarget === target)) { //same target
                        if (lastTapTime && (touch.timestamp - lastTapTime) < options.tapMaxInterval) {
                            at.trigger(target, 'doubletap', touch);
                            lastTapTime = at.now();
                            lastTarget = target;
                            return;
                        }
                    }
                    at.trigger(target, name, touch);
                    lastTapTime = at.now();
                    lastTarget = target;
                }
                break;
        }
    };
    at.addGesture({
        name: name,
        index: 30,
        handle: handle,
        options: {
            fingers: 1,
            tapMaxInterval: 300,
            tapMaxDistance: 5,
            tapMaxTime: 250
        }
    });

})(at, 'tap');
/*
 * 注册flick事件
 * */
(function (at, name) {
    var flickStartTime = 0;
    var handle = function (event, touch) {
        var session = at.gestures.session;
        var options = this.options;
        var now = at.now();
        switch (event.type) {
            case at.EVENT_MOVE:
                if (now - flickStartTime > 300) {
                    flickStartTime = now;
                    session.flickStart = touch.center;
                }
                break;
            case at.EVENT_END:
            case at.EVENT_CANCEL:
                touch.flick = false;
                if (session.flickStart && options.flickMaxTime > (now - flickStartTime) && touch.distance > options.flickMinDistince) {
                    touch.flick = true;
                    touch.flickTime = now - flickStartTime;
                    touch.flickDistanceX = touch.center.x - session.flickStart.x;
                    touch.flickDistanceY = touch.center.y - session.flickStart.y;
                    at.trigger(session.target, name, touch);
                    at.trigger(session.target, name + touch.direction, touch);
                }
                break;
        }

    };
    at.addGesture({
        name: name,
        index: 5,
        handle: handle,
        options: {
            flickMaxTime: 200,
            flickMinDistince: 10
        }
    });
})(at, 'flick');
(function (at, name) {
    var timer;
    var handle = function (event, touch) {
        var session = at.gestures.session;
        var options = this.options;
        switch (event.type) {
            case at.EVENT_START:
                if (at.gestureConfig.hold) {
                    timer && clearTimeout(timer);
                    timer = setTimeout(function () {
                        touch.hold = true;
                        at.trigger(session.target, name, touch);
                    }, options.holdTimeout);
                }
                break;
            case at.EVENT_MOVE:
                break;
            case at.EVENT_END:
            case at.EVENT_CANCEL:
                if (timer) {
                    clearTimeout(timer) && (timer = null);
                    at.trigger(session.target, 'release', touch);
                }
                break;
        }
    };
    /**
     * mui gesture hold
     */
    at.addGesture({
        name: name,
        index: 10,
        handle: handle,
        options: {
            fingers: 1,
            holdTimeout: 0
        }
    });
})(at, 'hold');
/*
 * 注册drag事件
 * */
(function (at, name) {
    var handle = function (event, touch) {
        var session = at.gestures.session;
        switch (event.type) {
            case at.EVENT_START:
                break;
            case at.EVENT_MOVE:
                if (!touch.direction || !session.target) {
                    return;
                }
                //修正direction,可在session期间自行锁定拖拽方向，方便开发scroll类不同方向拖拽插件嵌套
                if (session.lockDirection && session.startDirection) {
                    if (session.startDirection && session.startDirection !== touch.direction) {
                        if (session.startDirection === 'up' || session.startDirection === 'down') {
                            touch.direction = touch.deltaY < 0 ? 'up' : 'down';
                        } else {
                            touch.direction = touch.deltaX < 0 ? 'left' : 'right';
                        }
                    }
                }

                if (!session.drag) {
                    session.drag = true;
                    at.trigger(session.target, name + 'start', touch);
                }
                at.trigger(session.target, name, touch);
                at.trigger(session.target, name + touch.direction, touch);
                break;
            case at.EVENT_END:
            case at.EVENT_CANCEL:
                if (session.drag && touch.isFinal) {
                    at.trigger(session.target, name + 'end', touch);
                }
                break;
        }
    };
    at.addGesture({
        name: name,
        index: 20,
        handle: handle,
        options: {
            fingers: 1
        }
    });
})(at, 'drag');
/*
 * 注册pinch事件
 * */
(function (at, name) {
    var handle = function (event, touch) {
        var options = this.options;
        var session = at.gestures.session;
        switch (event.type) {
            case at.EVENT_START:
                break;
            case at.EVENT_MOVE:
                if (at.gestureConfig.pinch) {
                    if (touch.touches.length < 2) {
                        return;
                    }
                    if (!session.pinch) { //start
                        session.pinch = true;
                        at.trigger(session.target, name + 'start', touch);
                    }
                    at.trigger(session.target, name, touch);
                    var scale = touch.scale;
                    var rotation = touch.rotation;
                    var lastScale = typeof touch.lastScale === 'undefined' ? 1 : touch.lastScale;
                    var scaleDiff = 0.000000000001; //防止scale与lastScale相等，不触发事件的情况。
                    if (scale > lastScale) { //out
                        lastScale = scale - scaleDiff;
                        at.trigger(session.target, name + 'out', touch);
                    } //in
                    else if (scale < lastScale) {
                        lastScale = scale + scaleDiff;
                        at.trigger(session.target, name + 'in', touch);
                    }
                    if (Math.abs(rotation) > options.minRotationAngle) {
                        at.trigger(session.target, 'rotate', touch);
                    }
                }
                break;
            case at.EVENT_END:
            case at.EVENT_CANCEL:
                if (at.gestureConfig.pinch && session.pinch && touch.touches.length === 2) {
                    session.pinch = false;
                    at.trigger(session.target, name + 'end', touch);
                }
                break;
        }
    };
    at.addGesture({
        name: name,
        index: 10,
        handle: handle,
        options: {
            minRotationAngle: 0
        }
    });
})(at, 'pinch');
/*
 * 注册longtap事件
 * */
(function (at, name) {
    var timer;
    var handle = function (event, touch) {
        var session = at.gestures.session;
        var options = this.options;
        switch (event.type) {
            case at.EVENT_START:
                clearTimeout(timer);
                timer = setTimeout(function () {
                    at.trigger(session.target, name, touch);
                }, options.holdTimeout);
                break;
            case at.EVENT_MOVE:
                if (touch.distance > options.holdThreshold) {
                    clearTimeout(timer);
                }
                break;
            case at.EVENT_END:
            case at.EVENT_CANCEL:
                clearTimeout(timer);
                break;
        }
    };
    at.addGesture({
        name: name,
        index: 10,
        handle: handle,
        options: {
            fingers: 1,
            holdTimeout: 500,
            holdThreshold: 2
        }
    });
})(at, 'longtap');
/*
 * 注册swipe事件
 * */
(function (at, name) {
    var handle = function (event, touch) {
        var session = at.gestures.session;
        if (event.type === at.EVENT_END || event.type === at.EVENT_CANCEL) {
            var options = this.options;
            touch.swipe = false;
            // TODO 后续根据velocity计算
            if (touch.direction && options.swipeMaxTime > touch.deltaTime && touch.distance > options.swipeMinDistince) {
                touch.swipe = true;
                at.trigger(session.target, name, touch);
                at.trigger(session.target, name + touch.direction, touch);
            }
        }
    };
    at.addGesture({
        name: name,
        index: 10,
        handle: handle,
        options: {
            swipeMaxTime: 300,
            swipeMinDistince: 18
        }
    });
})(at, 'swipe');