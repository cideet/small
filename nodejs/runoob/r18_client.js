/**
 * Created by sf on 2017/6/18.
 */

var http = require('http');

// 用于请求的选项
var options = {
    'host': 'localhost',
    'port': '8081',
    'path': '/r18_index.html'
};

// 处理响应的回调函数
var callback = function (response) {
    // 不断更新数据
    var body = '';
    response.on('data', function (data) {
        body += data;
    });
    response.on('end', function () {
        // 数据接收完成
        console.log(body);
    });
}

// 向服务端发送请求
var request = http.request(options, callback);
request.end();