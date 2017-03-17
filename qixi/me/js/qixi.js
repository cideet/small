/**
 * Created by sf on 2017/3/17.
 */

var container = $('#content');
var element = container.find(':first');
var slides = element.find('>');
var width = container.width();
var height = container.height();
console.log(width + "" + height);

element.css({
    width: width * slides.length + 'px',
    height: height + 'px'
});

$.each(slides, function (index) {
    var slide = slides.eq(index);
    slide.css({
        width: width + 'px',
        height: height + 'px'
    });
});

//点击页面向左运动2个画面
$("button").eq(0).click(function () {
    element.css({
        'transition': 'transform 5s linear',
        'transform': 'translate3d(-' + (width * 2) + 'px,0,0)'
    });
});
