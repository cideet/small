/**
 * Created by sf on 2017/3/18.
 */

$boy = $('#boy');
var swipe = Swipe($("#content"));
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