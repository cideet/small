/**
 * Created by sf on 2017/6/18.
 */

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain; chartset=utf-8'});
    response.end(util.inspect(url.parse(request.url, true)));
}).listen(3000);