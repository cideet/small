/**
 * Created by sf on 2017/6/13.
 */

var http = require("http");
function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("张三丰");
    response.end();
}
http.createServer(onRequest).listen(8888);
