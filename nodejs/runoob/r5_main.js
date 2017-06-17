/**
 * Created by sf on 2017/6/15.
 */

// 阻塞代码实例
var fs = require('fs');
var data = fs.readFileSync('r5_input.txt');
console.log(data.toString());
console.log('程序执行结束');