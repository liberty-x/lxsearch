var http = require('http');
var port = 8000;
var server = http.createServer(handler);
server.listen(port);
console.log("Server running at http://localhost:" + port);



var words = {
  method: 'GET',
  url: '/'
}

function handler(req, res) {
      if (req.method === 'GET') {
       res.writeHead(200, {"Content-Type": "text/html"});
       res.end(words.text);
    }
};



// var url = "http://api.wordnik.com:80/v4/word.json/grass/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=fc3e91dd61224bded00070e481e095e13cee83333b434f66e"
