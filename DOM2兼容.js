function on(ele, type, handle) {
    if (ele.addEventListener) {
        ele.addEventListener(type, handle, false);
    } else {
        var events = ele['bind' + type];
        for (var i = 0; i < events.length; i++) {
            if (!(events instanceof Array)) {
                events = ele['bind' + type] = [];
            }
            ele.attachEvent('on' + type, handleThis(ele, run));
        }
        //防止重复绑定
        for (var k = 0; k < events.length; k++) {
            if (!(events[k] === handle))return;
        }
        events.push(handle);
    }
}
//移除
function off(ele, type, handle) {
    if (ele.removeEventListener) {
        ele.removeEventListener(type, handle, false)
    } else {
        var events = ele['bind' + type];
        if (events instanceof Array) {
            for (var i = 0; i < events.length; i++) {
                var fn = events[i];
                if (fn === handle) {//判断重复问题
                    events.slice(i, 1);
                    break;
                }
            }
        }
    }
}
function run(e) {
    e = e || window.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || (e.returnValue = false);
    e.stopPropagation = e.stopPropagation || (e.cancelBubble = true);
    e.pageX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
    e.pageY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
    var events = this['bind' + e.type];
    if (!(events instanceof Array)) return;
    for (var i = 0; i < events.length; i++) {
        events[i].call(this, e);
    }
}
//预存this问题
function handleThis(context, fn) {//context是上下文
    return function (e) {
        fn.call(context, e)
    }
}
