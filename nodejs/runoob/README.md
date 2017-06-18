
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


第6节 node.js事件循环
因为node.js是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
node.js的每一个API都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
node.js使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，再去服务下一个web请求。
此模型非常高效，可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作，这也被称为非阻塞式IO或事件驱动IO。
在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

node r6.js
连接成功。
数据接收成功。
程序执行完毕。




