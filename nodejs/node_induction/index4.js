/**
 * Created by sf on 2017/6/14.
 */


var server = require("./server4.js");
var router = require("./router4.js");
server.start(router.route);