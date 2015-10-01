var definition = require('./backend.js');

var serve = (function(){
  var http = require('http');
  var port = process.env.PORT || 8000;
    console.log("Server running at http://localhost:" + port);
  var fs = require('fs');

  var index = fs.readFileSync(__dirname + '/index.html');

  function handler(req, res) {
    var url = req.url;
    console.log(url);
    if (url === '/') {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(index.toString());
    } else if (url.length > 1) {
      wordDefintion(req, res);
    };
  };

  function extractWord (str) {
    return str.split('/')[1];
  };

  function wordDefintion (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    var word = extractWord(req.url);
    definition(word, function(def) {
      res.end(def);
    });
  };

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
