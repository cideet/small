/**
 * Created by sf on 2017/6/8.
 */

// 图片预加载

// 一般来说，我们将插件写在一个局部的作用域中，
// 是为了让它和外部的内容互不干涉，互不影响
// 但是JS中是没有局部作用域的
// 我们一般使用闭包，来模拟局部作用域
// 后面传递jQuery变量，参数中用$符号来接收，所以在闭包就可以使用jQuery了
(function ($) {
    function PreLoad(imgs, options) {
        this.imgs = (typeof imgs == 'string') ? [imgs] : imgs;
        this.options = $.extend({}, PreLoad.DEFAULTS, options);
        // options覆盖DEFAULTS，再赋值给options
        // this._unorder();
        // 加下划线是表示内部执行，不在外部调用
        if (this.options.order == 'order') {
            this._order();
        } else {
            this._unorder();
        }
    }

    PreLoad.DEFAULTS = {
        order: 'unorder',       // 默认无序预加载
        each: null,     //每一张加载完毕后执行
        all: null       //所有图片加载完毕后执行
    };

    // 有序加载
    PreLoad.prototype._order = function () {
        var imgs = this.imgs;
        var options = this.options;
        var count = 0;
        var len = imgs.length;
        load();
        function load() {
            var imgObj = new Image();
            $(imgObj).on('load error', function () {
                options.each && options.each(count);
                if (count >= len) {
                    // 所有图片已加载完毕
                    options.all && options.all();
                } else {
                    load();
                }
                count++;
            })
            imgObj.src = imgs[count];
        }
    };

    // 无序加载
    PreLoad.prototype._unorder = function () {
        var imgs = this.imgs;
        var options = this.options;
        var count = 0;
        var len = imgs.length;
        $.each(imgs, function (index, src) {
            if (typeof src != 'string') {
                return false;
            }
            var imgObj = new Image();
            $(imgObj).on('load error', function () {
                // $('i').html(Math.round((count + 1) / len * 100) + '%');
                options.each && options.each(count);
                // 直接执行有可能报错，所以先判断一下
                if (count >= len - 1) {
                    // $('.loading').hide();$('h3').html("1/" + len);
                    options.all && options.all();
                }
                count++;
            });
            imgObj.src = src;
        });
    };

    $.extend({
        preload: function (imgs, opts) {
            new PreLoad(imgs, opts);
        }
    });
})(jQuery);






