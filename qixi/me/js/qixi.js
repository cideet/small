/**
 * Created by sf on 2017/3/18.
 */

function BoyWalk() {
    $container = $("#content");

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
    $boy = $('#boy');
    $boy.css({
        top: pathY - $boy.height() + 25
    });

    //页面可视区域
    var visualWidth = $container.width();
    var visualHeight = $container.height();
    console.log("页面宽度：" + visualWidth + " | 页面高度：" + visualHeight);

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
        $boy.removeClass('pause-walk').addClass("slow-walk");
    }

    //小男孩的脚停止运行
    function pauseWalk() {
        $boy.addClass('pause-walk');
    }

    //用transition做运动
    function startRun(options, runTime) {
        var dfdPlay = $.Deferred();
        restorWalk();
        $boy.transition(options, runTime, 'linear', function () {
            dfdPlay.resolve();
        });
        return dfdPlay;
    }

    //开始走路
    function walkRun(time1, disX, disY) {
        var time = time1 || 3000;
        slowWalk();
        var dc = startRun({
            'left': disX + 'px',
            'top': disY ? disY : undefined
        }, time);
        return dc;
    }

    return {

        //小孩的脚动起来
        boySlowWalk: function () {
            slowWalk();
        },
        //开始走路
        walkTo: function (time, proportionX, proportionY) {
            var disX = calculateDist('x', proportionX);
            var disY = calculateDist('y', proportionY);
            return walkRun(time, disX, disY);
        },
        //停止走路
        stopWalk: function () {
            pauseWalk();
        },
        setColoer:function(value){
            $boy.css('background-color',value)
        }
    }
}
