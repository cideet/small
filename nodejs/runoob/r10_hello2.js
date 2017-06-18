/**
 * Created by sf on 2017/6/18.
 */

// 把一个对象封装到模块中

function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
}

module.exports = Hello;



// r10_hello.js
// exports.world = function () {
//     console.log('Hello world');
// };