//var definition = require('./backend.js');

var serve = (function(){
  var http = require('http');
  var port = process.env.PORT || 8000;
  console.log("Server running at http://localhost:" + port);
  function handler(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("hey");
  }
  var create = function(){
    var server = http.createServer(handler);
    server.listen(port);
  };
  return {
    handler: handler,
    create: create
  };
}());

module.exports = serve;
