/**
 * Created by sf on 2017/3/14.
 */
$(function () {
    var container = $("#content");
    var element = container.find(":first");     // 获取第一个子节点
    var slides = element.find("li");            // li页面数量
    var width = container.width();              // 获取容器尺寸
    var height = container.height();
    element.css({
        width: (slides.length * width) + 'px',  // 设置li页面总宽度
        height: height + 'px'
    });
    // 设置每一个页面li的宽度
    $.each(slides, function (index) {
        var slide = slides.eq(index); //获取到每一个li元素
        slide.css({
            width: width + 'px',
            height: height + 'px'
        });
    });

    // 绑定一个事件，触发通过
    $('button').click(function () {
        // 在5秒的时间内，移动X的位置，为2个页面单位
        element.css({
            // 'transition-timing-function': 'linear',
            // 'transition-duration': '5000ms',
            // 'transform': 'translate3d(-' + (width * 2) + 'px,0px,0px)' //设置页面X轴移动
            'transform': 'translate3d(-' + (width * 2) + 'px,0px,0px)',
            'transition': 'transform 5000ms linear'
        });
    });
});
