/**
 * Created by sf on 2017/3/18.
 */

$boy = $('#boy');
$container = $("#content");
var swipe = Swipe($container);
function getDataByClass(className) {
    var $element = $('' + className + '');
    return {
        'height': $element.height(),
        'top': $element.get(0).getBoundingClientRect().top
        //'top': $element.position().top
    }
}
//路的Y轴
var pathY = function () {
    var data = getDataByClass(".a-background-middle");
    return data.top + data.height / 2
}();
//修正小男孩的位置
//路的中间位置-小孩的高度，25只是一个修正值
$boy.css({
    top: pathY - $boy.height() + 25
});

//页面可视区域
var visualWidth = $container.width();
var visualHeight = $container.height();

//计算移动距离
function calculateDist(direction, proportion) {
    return (direction == 'x' ? visualWidth : visualHeight) * proportion;
}

////////////////////////////////////////////////////////
//===================动画处理============================ //
////////////////////////////////////////////////////////

//恢复走路
function restorWalk() {
    $boy.removeClass('pause-walk');
}

//小男孩动起来
function slowWalk() {
    $boy.addClass("slow-walk");
}

function startRun(options, runTime) {
    var dfdPlay = $.Deferred();
    restorWalk();
    $boy.transition(options, runTime, 'linear', function () {
    });
    return dfdPlay;
}

//开始走路
function walkRun(time, disX, disY) {
    time = time || 3000;
    slowWalk();
    var d1 = startRun({
        left: disX + 'px',
        top: disY ? disY : undefined
    }, time);
    return d1;
}

