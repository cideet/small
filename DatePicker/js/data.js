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
            month = today.getMonth() + 1;
        }
        var firstDay = new Date(year, month - 1, 1);
        var firstDayWeekDay = firstDay.getDay();  //获取当月1号的星期0~6
        if (firstDayWeekDay === 0) {
            firstDayWeekDay = 7;
        }
        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;
        var lastDayOfLastMonth = new Date(year, month - 1, 0);  //上个月的最后一天
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();  //上月最后一天日期1~31
        var preMonthDayCount = firstDayWeekDay;
        var lastDay = new Date(year, month, 0);  //当前的最后一天
        var lastDate = lastDay.getDate();
        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            if (date <= 0) {
                //上一个月
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                //下一个月
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }
            if (thisMonth == 0) {
                thisMonth = 12;
            }
            if (thisMonth == 13) {
                thisMonth = 1;
            }
            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            })
        }
        return {
            year: year,
            month: month,
            days: ret
        };
    };

    window.datepicker = datepicker;  // 所有JS，唯一暴露的对象，就是这个datepicker对象
})();