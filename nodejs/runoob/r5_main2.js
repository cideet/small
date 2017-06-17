/**
 * Created by sf on 2017/6/15.
 */

// 非阻塞代码实例
var fs = require('fs');
fs.readFile('r5_input.txt', function (err, data) {
    if (err) {
        return console.log(err);
    } else {
        console.log(data.toString());
    }
});
console.log('程序执行结束');