//空格问题
String.prototype.myTrim = function () {
    var reg = /^\s|\s$/g;
    return this.replace(reg, ' ');
};
//边界问题
// function hasClass(curEle, cn) {
//     return new RegExp('/\\b' + cn + '\\b/').test(curEle.className)
// }
//添加类名
function addClass(curEle, cn) {
    var list = cn.myTrim().splice(/ +/);
    for (var i = 0; i < list.length; i++) {
        cn = list[i];
        if (!hasClass(curEle, cn)) {
            var str = curEle.className.myTrim();
            str += ' ' + cn;
            curEle.className = str.replace(/ +/, ' ');
        }
    }
}
function removeClass(curEle, cn) {
    var list = cn.myTrim().splice(/ +/);
    for (var i = 0; i < list.length; i++) {
        cn = list[i];
        if (hasClass(curEle.cn)) {
            var reg = new RegExp('/(^| +)' + cn + '( +|$)/');
            var str = curEle.className.replace(reg, ' ').myTrim();
            curEle.className.replace(/ +/g, ' ');

        }
    }

}
function toggle(curEle, cn) {
    var list = cn.myTrim().splice(/ +/);
    for (var i = 0; i < list.length; i++) {
        cn = list[i];
        hasClass(curEle, cn) ? addClass(curEle, cn) : removeClass(curEle, cn);
    }

}

String.prototype.myTrim = function () {
    var reg = /^\s|\s$/g;
    return this.replace(reg, ' ');
}
function hasClass(curEle, cn) {
    return new RegExp('/\\b' + cn + '\\b/').test(curEle.className);//执行
}
function removeClass(curEle, cn) {
    var list = cn.myTrim().splice(/ +/);
    for (var i = 0; i < list.length; i++) {
        cn = list[i];
        if (hasClass(curEle, cn)) {
            var reg = new RegExp('/(^| +)' + cn + '( +|$)/');
            var str = curEle.className.replace(reg, ' ').myTrim();
            curEle.className.replace(/ +/g, reg);
        }
    }
}
function toggle(curEle, cn) {
    var list = cn.myTrim().splice(/ +/);
    for (var i = 0; i < list.length; i++) {
        cn = list[i];
        hasClass(curEle, cn) ? addClass(curEle, cn) : removeClass(curEle, cn)
    }
}
function addClass(curEle, cn) {
    var list = cn.myTrim().splice(/ +/, ' ');
    for (var i = 0; i < list.length(); i++) {
        cn = list[i]
        if (!hasClass(curEle, cn)) {
            var str = curEle.className.myTrim();
            str += '' + cn;
            curEle.className = str.replace(/ +/, ' ')
        }
    }

}