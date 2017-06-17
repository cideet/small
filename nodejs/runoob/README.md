
第1节 Node.js安装
Node.js安装包及源码下载地址为：https://nodejs.org/en/download/

第2节 创建第一个应用
node r2_server.js
浏览器 Hello world
终端 Server running at http://127.0.0.1:8888
1、引入http模块：通过require指令载入node.js的http模块；
2、创建服务器：http.createServer()方法创建服务器，服务器可以监听客户端的请求，类似apache
3、接收请求和响应请求：通过request和responese参数来接收和响应数据

第3节 npm介绍
比如安装express命令 npm install express
全局安装 npm install ** -g
本地安装 npm install ** 可以通过require()来引入本地安装的包
查看安装信息（全局） npm list -g 或 npm ls -g
卸载某个模块 npm uninstall **
更新某个模块 npm update **

第5节 回调函数
Node.js异步编程的直接体现就是回调。
我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。
这样在执行代码就没有阻塞，提升性能，可以处理大并发请求。

// 阻塞代码实例
node r5_main.js
zhangsanfengWeb:vdouw.com
程序执行结束

// 非阻塞代码实例
程序执行结束
zhangsanfengWeb:vdouw.com

注意顺序




