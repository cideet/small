/**
 * Created by sf on 2017/6/14.
 */


var server = require("./5server.js");
var router = require("./5route.js");
var requestHandlers = require("./5requestHandlers.js");
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(router.route, handle);
