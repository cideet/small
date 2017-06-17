/**
 * Created by sf on 2017/6/17.
 */

// 引入http模块，并实例化赋值给http
var http = require('http');

// 使用http.createServer()方法创建服务器，并绑定到8888端口
// 通过request和responese参数来接收和响应数据
http.createServer(function (request, response) {
    // 发送HTTP头部
    // HTTP状态值：200
    // 内容类型：text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据
    response.end('Hello world');
}).listen(8888);

// 终端打印信息
console.log('Server running at http://127.0.0.1:8888');

// node r2_server.js
// 浏览器 Hello world
// 终端 Server running at http://127.0.0.1:8888