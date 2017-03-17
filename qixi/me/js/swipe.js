/**
 * Created by sf on 2017/3/17.
 */

function Swipe(container) {
    var element = container.find(':first');
    var slides = element.find('>');
    var width = container.width();
    var height = container.height();
    console.log(width + "" + height);
    //设置UL的高度和宽度
    element.css({
        width: width * slides.length + 'px',
        height: height + 'px'
    });
    //设置每个LI的高度和宽度
    $.each(slides, function (index) {
        var slide = slides.eq(index);
        slide.css({
            width: width + 'px',
            height: height + 'px'
        });
    });
    var swipe = {};
    //监控完成与移动
    swipe.scrollTo = function (x, speed) {
        element.css({
            'transition': 'transform ' + speed + 's linear',
            'transform': 'translate3d(-' + x + 'px,0,0)'
        });
    };
    //监控鼠标滚轮事件
    swipe.mousewheel = function (event, distance) {
        //console.log(event.deltaX, event.deltaY, event.deltaFactor);
        //console.log(element.offset().left);
        //console.log(element.get(0).getBoundingClientRect().left);
        console.log(element.get(0).getBoundingClientRect());
        var elementLeft = element.get(0).getBoundingClientRect().left;
        if (event.deltaY == '-1') {
            console.log('左滑');
            element.animate({'left': elementLeft - distance}, 50);
        } else {
            element.animate({'left': elementLeft + distance}, 50);
        }
    };
    return swipe;
}

