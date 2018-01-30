//~function () {
//    //运动方式
//    var zhufengEffect = {
//        // 匀速运动公式
//        Linear: function (t, b, c, d) {
//            return t / d * c + b;
//        },
//        //指数衰减的反弹缓动
//        Bounce: {
//            easeIn: function (t, b, c, d) {
//                return c - zhufengEffect.Bounce.easeOut(d - t, 0, c, d) + b;
//            },
//            easeOut: function (t, b, c, d) {
//                if ((t /= d) < (1 / 2.75)) {
//                    return c * (7.5625 * t * t) + b;
//                } else if (t < (2 / 2.75)) {
//                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
//                } else if (t < (2.5 / 2.75)) {
//                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
//                } else {
//                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
//                }
//            },
//            easeInOut: function (t, b, c, d) {
//                if (t < d / 2) {
//                    return zhufengEffect.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
//                }
//                return zhufengEffect.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
//            }
//        },
//        //二次方的缓动
//        Quad: {
//            easeIn: function (t, b, c, d) {
//                return c * (t /= d) * t + b;
//            },
//            easeOut: function (t, b, c, d) {
//                return -c * (t /= d) * (t - 2) + b;
//            },
//            easeInOut: function (t, b, c, d) {
//                if ((t /= d / 2) < 1) {
//                    return c / 2 * t * t + b;
//                }
//                return -c / 2 * ((--t) * (t - 2) - 1) + b;
//            }
//        },
//        //三次方的缓动
//        Cubic: {
//            easeIn: function (t, b, c, d) {
//                return c * (t /= d) * t * t + b;
//            },
//            easeOut: function (t, b, c, d) {
//                return c * ((t = t / d - 1) * t * t + 1) + b;
//            },
//            easeInOut: function (t, b, c, d) {
//                if ((t /= d / 2) < 1) {
//                    return c / 2 * t * t * t + b;
//                }
//                return c / 2 * ((t -= 2) * t * t + 2) + b;
//            }
//        },
//        //四次方的缓动
//        Quart: {
//            easeIn: function (t, b, c, d) {
//                return c * (t /= d) * t * t * t + b;
//            },
//            easeOut: function (t, b, c, d) {
//                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
//            },
//            easeInOut: function (t, b, c, d) {
//                if ((t /= d / 2) < 1) {
//                    return c / 2 * t * t * t * t + b;
//                }
//                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
//            }
//        },
//        //五次方的缓动
//        Quint: {
//            easeIn: function (t, b, c, d) {
//                return c * (t /= d) * t * t * t * t + b;
//            },
//            easeOut: function (t, b, c, d) {
//                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
//            },
//            easeInOut: function (t, b, c, d) {
//                if ((t /= d / 2) < 1) {
//                    return c / 2 * t * t * t * t * t + b;
//                }
//                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
//            }
//        },
//        //正弦曲线的缓动
//        Sine: {
//            easeIn: function (t, b, c, d) {
//                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
//            },
//            easeOut: function (t, b, c, d) {
//                return c * Math.sin(t / d * (Math.PI / 2)) + b;
//            },
//            easeInOut: function (t, b, c, d) {
//                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
//            }
//        },
//        //指数曲线的缓动
//        Expo: {
//            easeIn: function (t, b, c, d) {
//                return (t == 0)
//                    ? b
//                    : c * Math.pow(2, 10 * (t / d - 1)) + b;
//            },
//            easeOut: function (t, b, c, d) {
//                return (t == d)
//                    ? b + c
//                    : c * (-Math.pow(2, -10 * t / d) + 1) + b;
//            },
//            easeInOut: function (t, b, c, d) {
//                if (t == 0)
//                    return b;
//                if (t == d)
//                    return b + c;
//                if ((t /= d / 2) < 1)
//                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
//                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
//            }
//        },
//        //圆形曲线的缓动
//        Circ: {
//            easeIn: function (t, b, c, d) {
//                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
//            },
//            easeOut: function (t, b, c, d) {
//                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
//            },
//            easeInOut: function (t, b, c, d) {
//                if ((t /= d / 2) < 1) {
//                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
//                }
//                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
//            }
//        },
//        //超过范围的三次方缓动
//        Back: {
//            easeIn: function (t, b, c, d, s) {
//                if (s == undefined)
//                    s = 1.70158;
//                return c * (t /= d) * t * ((s + 1) * t - s) + b;
//            },
//            easeOut: function (t, b, c, d, s) {
//                if (s == undefined)
//                    s = 1.70158;
//                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
//            },
//            easeInOut: function (t, b, c, d, s) {
//                if (s == undefined)
//                    s = 1.70158;
//                if ((t /= d / 2) < 1) {
//                    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
//                }
//                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
//            }
//        },
//        //指数衰减的正弦曲线缓动
//        Elastic: {
//            easeIn: function (t, b, c, d, a, p) {
//                if (t == 0)
//                    return b;
//                if ((t /= d) == 1)
//                    return b + c;
//                if (!p)
//                    p = d * .3;
//                var s;
//                !a || a < Math.abs(c)
//                    ? (a = c, s = p / 4)
//                    : s = p / (2 * Math.PI) * Math.asin(c / a);
//                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
//            },
//            easeOut: function (t, b, c, d, a, p) {
//                if (t == 0)
//                    return b;
//                if ((t /= d) == 1)
//                    return b + c;
//                if (!p)
//                    p = d * .3;
//                var s;
//                !a || a < Math.abs(c)
//                    ? (a = c, s = p / 4)
//                    : s = p / (2 * Math.PI) * Math.asin(c / a);
//                return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
//            },
//            easeInOut: function (t, b, c, d, a, p) {
//                if (t == 0)
//                    return b;
//                if ((t /= d / 2) == 2)
//                    return b + c;
//                if (!p)
//                    p = d * (.3 * 1.5);
//                var s;
//                !a || a < Math.abs(c)
//                    ? (a = c, s = p / 4)
//                    : s = p / (2 * Math.PI) * Math.asin(c / a);
//                if (t < 1)
//                    return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
//                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
//            }
//        }
//    };
//
//    /**
//     *
//     * @param opations
//     * ele  {object} 目标参数（动画元素）
//     * target  {object} 目标参数对象（目标属性集合）
//     * effect  {Number} {Array}运动方式（可以是number方式（0 1 2 3 4 ），也可以是数组方式['Bounce','easeIn']）
//     * duration {Number} 过渡时间（总时间） 单位：ms
//     * callBack  {function} 动画结束的回调
//     */
//    function animate(opations) {
//        //处理参数
//        var curEle = opations.ele;//总距离
//        var target = opations.target;//参数对象
//        var effect = opations.effect || zhufengEffect.Linear;//如果运动方式不传，默认是匀速
//        var duration = opations.duration || 2000;//总时间
//        var callBack = opations.callBack;//回调函数
//        //处理元素 curEle
//        if (!curEle) {//判断是否是是指定的当前的对象如果不是
//            console.warn('未指定动画元素对象： ele属性');
//            return;
//        }
//
//        curEle._timer && clearInterval(curEle._timer);//预防动画累计，每次执行新动画，清除上一次的动画
//        //处理运动方式
//        if (typeof effect === 'number') {//数字方式，指定几种自己常用的运动方式
//            switch (effect) {
//                case 0:
//                    effect = zhufengEffect.Linear;
//                    break;
//                case 1:
//                    effect = zhufengEffect.Bounce.easeIn;
//                    break;
//                case 2:
//                    effect = zhufengEffect.Quint.easeInOut;
//                    break;
//                default :
//                    effect = zhufengEffect.Cubic.easeOut;
//            }
//        } else if (effect instanceof Array) {//处理数组形式，指定具体的运动方式
//            effect = effect.length === 2 ? zhufengEffect[effect[0]][effect[1]] : zhufengEffect.Linear;//判断数组的length，如果传入的参数是2的话就是指定运动方式，如果传入一个或没传，则是匀速运动
//        }
//
//        //处理动画
//        var begin = {};//保存相应属性的起始值
//        var change = {};//保存相应属性的变化值（运动的变化值）
//        for (var k in target) {//for in遍历判断相应的属性是否属
//            if (target.hasOwnProperty(k)) {
//                begin[k] = utils.getCss(curEle, k);//将相应属性的起始值保存到begin里
//                change[k] = target[k] - begin[k];//得到相应的变化值 (相应属性的目标值-相应属性的起始值)
//            }
//        }
//        var timer = null;//记录当前时间
//        var interval = 10;//指定单位时间
//        curEle._timer = setInterval(function () {
//            timer += interval;
//            if (timer >= duration) {//边界结束判断
//                utils.css(curEle, target);//修正为目标值，可以批量设置
//                clearInterval(curEle._timer);//结束动画
//                //执行动画的回调
//                typeof callBack === 'function' ? callBack.call(curEle) : null;//判断是否为函数，并修改this指向为当前元素
//                return;
//            }
//            //遍历target值，看哪些值需要有动画处理
//            for (var k in target) {//计算当前运动状态
//                if (target.hasOwnProperty(k)) {//避免遍历公有属性
//                    //根据当前时间计算出当前属性k的动画属性状态
//                    var curVal = effect(timer, begin[k], change[k], duration);
//                    //将相应属性设置为此时的状态
//                    utils.css(curEle, k, curVal);
//                }
//
//            }
//        }, interval)
//
//    }
//
//    //挂载在全局，方面全局中的元素使用
//    window.$animate = animate;//加个前缀，防止跟其他变量冲突
//}();

~function () {
    //运动方式
    var zhufengEffect = {
        // 匀速运动公式
        Linear: function (t, b, c, d) {
            return t / d * c + b;
        },
        //指数衰减的反弹缓动
        Bounce: {
            easeIn: function (t, b, c, d) {
                return c - zhufengEffect.Bounce.easeOut(d - t, 0, c, d) + b;
            },
            easeOut: function (t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOut: function (t, b, c, d) {
                if (t < d / 2) {
                    return zhufengEffect.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                }
                return zhufengEffect.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        },
        //二次方的缓动
        Quad: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOut: function (t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t + b;
                }
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            }
        },
        //三次方的缓动
        Cubic: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOut: function (t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
        },
        //四次方的缓动
        Quart: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOut: function (t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t + b;
                }
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            }
        },
        //五次方的缓动
        Quint: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOut: function (t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            }
        },
        //正弦曲线的缓动
        Sine: {
            easeIn: function (t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOut: function (t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOut: function (t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            }
        },
        //指数曲线的缓动
        Expo: {
            easeIn: function (t, b, c, d) {
                return (t == 0)
                    ? b
                    : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOut: function (t, b, c, d) {
                return (t == d)
                    ? b + c
                    : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if (t == 0)
                    return b;
                if (t == d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        },
        //圆形曲线的缓动
        Circ: {
            easeIn: function (t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOut: function (t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                }
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
        },
        //超过范围的三次方缓动
        Back: {
            easeIn: function (t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOut: function (t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOut: function (t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                if ((t /= d / 2) < 1) {
                    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                }
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            }
        },
        //指数衰减的正弦曲线缓动
        Elastic: {
            easeIn: function (t, b, c, d, a, p) {
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (!p)
                    p = d * .3;
                var s;
                !a || a < Math.abs(c)
                    ? (a = c, s = p / 4)
                    : s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOut: function (t, b, c, d, a, p) {
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (!p)
                    p = d * .3;
                var s;
                !a || a < Math.abs(c)
                    ? (a = c, s = p / 4)
                    : s = p / (2 * Math.PI) * Math.asin(c / a);
                return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
            },
            easeInOut: function (t, b, c, d, a, p) {
                if (t == 0)
                    return b;
                if ((t /= d / 2) == 2)
                    return b + c;
                if (!p)
                    p = d * (.3 * 1.5);
                var s;
                !a || a < Math.abs(c)
                    ? (a = c, s = p / 4)
                    : s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1)
                    return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            }
        }
    };

    /**
     *
     * @param opations
     * ele  {object} 目标参数（动画元素）
     * target  {object} 目标参数对象（目标属性集合）
     * effect  {Number} {Array}运动方式（可以是number方式（0 1 2 3 4 ），也可以是数组方式['Bounce','easeIn']）
     * duration {Number} 过渡时间（总时间） 单位：ms
     * callBack  {function} 动画结束的回调
     */
    function animate(opations) {
        //处理参数
        var curEle = opations.ele;//总距离
        var target = opations.target;//参数对象
        var effect = opations.effect || zhufengEffect.Linear;//如果运动方式不传，默认是匀速
        var duration = opations.duration || 2000;//总时间
        var callBack = opations.callBack;//回调函数
        //处理元素 curEle
        if (!curEle) {//判断是否是是指定的当前的对象如果不是
            console.warn('未指定动画元素对象： ele属性');
            return;
        }

        curEle._timer && clearInterval(curEle._timer);//预防动画累计，每次执行新动画，清除上一次的动画
        //处理运动方式
        if (typeof effect === 'number') {//数字方式，指定几种自己常用的运动方式
            switch (effect) {
                case 0:
                    effect = zhufengEffect.Linear;
                    break;
                case 1:
                    effect = zhufengEffect.Bounce.easeIn;
                    break;
                case 2:
                    effect = zhufengEffect.Quint.easeInOut;
                    break;
                default :
                    effect = zhufengEffect.Cubic.easeOut;
            }
        } else if (effect instanceof Array) {//处理数组形式，指定具体的运动方式
            effect = effect.length === 2 ? zhufengEffect[effect[0]][effect[1]] : zhufengEffect.Linear;//判断数组的length，如果传入的参数是2的话就是指定运动方式，如果传入一个或没传，则是匀速运动
        }

        //处理动画
        var begin = {};//保存相应属性的起始值
        var change = {};//保存相应属性的变化值（运动的变化值）
        for (var k in target) {//for in遍历判断相应的属性是否属
            if (target.hasOwnProperty(k)) {
                begin[k] = utils.getCss(curEle, k);//将相应属性的起始值保存到begin里
                change[k] = target[k] - begin[k];//得到相应的变化值 (相应属性的目标值-相应属性的起始值)
            }
        }
        var timer = null;//记录当前时间
        var interval = 10;//指定单位时间
        curEle._timer = setInterval(function () {
            timer += interval;
            if (timer >= duration) {//边界结束判断
                utils.css(curEle, target);//修正为目标值，可以批量设置
                clearInterval(curEle._timer);//结束动画
                //执行动画的回调
                typeof callBack === 'function' ? callBack.call(curEle) : null;//判断是否为函数，并修改this指向为当前元素
                return;
            }
            //遍历target值，看哪些值需要有动画处理
            for (var k in target) {//计算当前运动状态
                if (target.hasOwnProperty(k)) {//避免遍历公有属性
                    //根据当前时间计算出当前属性k的动画属性状态
                    var curVal = effect(timer, begin[k], change[k], duration);
                    //将相应属性设置为此时的状态
                    utils.css(curEle, k, curVal);
                }
            }
        }, interval)
    }

    //挂载在全局，方面全局中的元素使用
    window.$animate = animate;//加个前缀，防止跟其他变量冲突
}();

