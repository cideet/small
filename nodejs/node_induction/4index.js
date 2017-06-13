/**
 * Created by sf on 2017/6/14.
 */


var server = require("./4server.js");
var router = require("./4router.js");
server.start(router.route);