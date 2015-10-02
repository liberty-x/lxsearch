var test = require('tape');
var server = require('../server.js');
var shot = require('shot');
var definition = require('../backend.js');



test("check server is running", function(t){
  shot.inject(server.handler, {method:'GET', url: '/'}, function(res){
    t.equal(res.statusCode, 200, "server is up and running");
    t.end();
  });
});


test("Is the definition of the word house returned", function(t){
var expected = "A structure serving as a dwelling for one or more persons, especially for a family."
  definition("house", function (data) {
    console.log(data);
    t.equal(data, expected, "success!");
    t.end();
  })
})
