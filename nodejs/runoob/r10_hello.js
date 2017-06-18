/**
 * Created by sf on 2017/6/18.
 */

exports.world = function () {
    console.log('Hello world');
};


// r10_hello.js通过exports对象把world作为模块的访问接口，在r10_main.js中通过require()加载这个模块，然后就可以直接访问r10_hello.js中的exports对象的成员函数了。