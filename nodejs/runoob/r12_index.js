/**
 * Created by sf on 2017/6/18.
 */

var server = require('./r12_server.js');
var router = require('./r12_router.js');

server.start(router.route);

// http://www.jb51.net/article/59103.htm