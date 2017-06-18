
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

node应用程序是如何工作的?
在node应用程序中，执行异步操作的函数将回调函数作为最后一个参数，回调函数接收错误对象作为第一个参数。


第7节 EventEmitter
node.js所有异步I/O操作，在完成时都会发送一个事件到事件队列。
node.js的许多对象都会分发事件，比如net.Server对象会在每次新连接时分发一个事件，比如fs.readStream对象会在文件被打开时发出一个事件，这些产生的事件对象，都是events.EventEmitter的实例。

events模块只提供一个对象：events.EventEmitter。
EventEmitter的核心就是事件触发与事件监听器功能的封装。
EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。


第8节 Buffer


第9节 Stream


第10节 模块系统
为了让node.js的文件可以相互调用，node.js提供了一个简单的模块系统。
模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js文件就是一个模块，这个文件可能是JavaScript代码、JSON等。
node.js提供了exports和require两个对象用于引入文件，exports是模块公开的接口，require是用于从外部获取一个模块的接口，即所获取模的的exports对象。
执行 node r10_main.js
1、require引入r10_hello.js
2、通过r10_hello.js的访问接口exports.world()
3、r10_hello.js通过exports对象把world作为模块的访问接口，在r10_main.js中通过require()加载这个模块，然后就可以直接访问r10_hello.js中的exports对象的成员函数了。

执行 node r10_main2.js

r10_hello2.js的变化：使用“module.exports = Hello”代替了“exports.world = function(){}”。在外部引用该模块时，其接口对象就是要输出的Hello对象本身，而不是原先的exports。


第11节 函数
在JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
执行 node r11.js
匿名函数
我们可以把一个函数作为变量传递。但是我们不一定要绕这个"先定义，再传递"的圈子，我们可以直接在另一个函数的括号中定义和传递这个函数

不使用匿名函数，采取“先定义，再传递”。
运行 node r11_2.js

函数传递是如何让HTTP服务器工作的
运行 node r11_3.js


第12节 路由
路由根据请求的URL和其他需要的GET或POST参数，执行相应的代码。
我们需要的所有数据，都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递。
解析这些数据，需要url和querystring模块。


第13节 全局对象
__filename 表示当前正在执行的脚本的文件名
__dirname 表示当前执行脚本所在的目录


第14节 常用工具


第15节 文件系统


第16节 GET/POST请求
服务器需要跟浏览器打交道，如表单提交。
获取GET请求内容
get请求
运行node r16_get.js
在浏览器中运行http://localhost:3000/?name=zhangsanfeng&height=178看效果

获取POST请求内容
运行node r16_post.js
在浏览器中运行http://localhost:3000看效果


第17节 工具模块


第18节 WEB模块
Web服务器，是指驻留于因特网上某种计算机程序，基本功能是提供Web信息浏览服务。
node.js提供了http模块，主要用于搭建HTTP服务端和客户端。

创建Web服务器，最基本的HTTP服务器架构，参照r18_server.js
node r18_server.js 后
才能打开：http://localhost:8081/r18_index.html

创建Web客户端



第19节 Express框架


第20节 RESTful API


第21节 多进程


第22节 JXcore打包


第23节 mysql








