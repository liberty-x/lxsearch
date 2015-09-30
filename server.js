var http = require('http');
var port = 8000;
var server = http.createServer(handler);
server.listen(port);
console.log("Server running at http://localhost:" + port);
function handler(req, res) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end("hello");
};
