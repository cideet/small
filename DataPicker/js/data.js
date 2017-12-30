/**
 * Created by sf on 2017/12/30.
 */

// 为了不污染外部环境，一般我们写的JS，需要包裹在一个匿名函数中
(function () {
    var datepicker = {};
    datepicker.getMonthData = function (year, month) {
        var ret = [];
        if (!year || !month) {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth + 1;
        }
        var firstDay = new Date(year, month - 1, 1);
        var firstDayWeekDay = firstDay.getDay();  //获取当月1号的星期0~6
        if (firstDayWeekDay === 0) {
            firstDayWeekDay = 7;
        }
        var lastDayOfLastMonth = new Date(year, month - 1, 0);  //上个月的最后一天
        var lastDateOfLastMonth = lastDateOfLastMonth.getDate();  //上月最后一天日期1~31
        var preMonthDayCount = firstDayWeekDay - 1;
        var lastDay = new Date(year, month, 0);  //当前的最后一天
        var lastDate = lastDay.getDate();
        for(var i=0; i<7*6;i++){

        }


    };

    window.datepicker = datepicker;  // 所有JS，唯一暴露的对象，就是这个datepicker对象
})();