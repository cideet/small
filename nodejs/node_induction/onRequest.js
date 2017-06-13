/**
 * Created by sf on 2017/6/13.
 */


var http = require("http");
function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World1111");
    response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server has started.");