var http = require("http");
// 第一行请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

// 接下来我们调用http模块提供的函数： createServer 。
// 这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。