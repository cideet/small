/**
 * Created by sf on 2017/12/30.
 */

(function () {
    var datepicker = window.datepicker;
    datepicker.buildUi = function (year, month) {
        var monthData = datepicker.getMonthData(year, month);
        console.log(monthData);
        var html = '<div class="ui-datepicker-header">' +
            '<a href="#" class="ui-datepicker-btn ui-datepicker-pre-btn">&lt;</a>' +
            '<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>' +
            '<span class="ui-datepicker-curr-month">' + monthData["year"] + '-' + monthData["month"] + '</span>' +
            '</div>' +
            '<div class="ui-datepicker-body">' +
            '<table>' +
            '<thead>' +
            '<tr>' +
            '<th>一</th>' +
            '<th>二</th>' +
            '<th>三</th>' +
            '<th>四</th>' +
            '<th>五</th>' +
            '<th>六</th>' +
            '<th>日</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>';

        for (var i = 0; i < monthData['days'].length; i++) {
            if (i % 7 === 0) {
                html += '<tr>';
            }
            html += '<td>' + monthData['days'][i]['showDate'] + '</td>';
            if (i % 7 === 6) {
                html += '</tr>';
            }
        }

        html += '</tbody>' +
            '</table>' +
            '</div>';
        return html;
    };

    // datepicker.init = function ($dom) {
    //     $dom.innerHTML = datepicker.buildUi();
    // };

    datepicker.init = function (input) {
        var $wrapper = document.createElement('div');
        $wrapper.className = 'ui-datepicker-wrapper ui-datepicker-wrapper-show';
        $wrapper.innerHTML = datepicker.buildUi();
        document.body.appendChild($wrapper);
        var $input = document.querySelector(input);
        var isOpen = true;
        $input.addEventListener('click', function () {
            if (isOpen) {
                $wrapper.classList.remove('ui-datepicker-wrapper-show');
                isOpen = false;
            } else {
                $wrapper.classList.add('ui-datepicker-wrapper-show');
                isOpen = true;
            }
        }, false);
    };

})();