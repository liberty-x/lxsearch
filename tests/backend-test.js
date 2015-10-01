var test = require('tape');
var server = require('../server.js');
var shot = require('shot');
var backend = require('../backend.js');

test("check server is running", function(t){
  shot.inject(server.handler, {method:'GET', url: '/'}, function(res){
    t.equal(res.statusCode, 200, "server is up and running");
    t.end();
  });
});

// test("Is the word of the day returned", function(t){
//   var request = {
//     method: "GET",
//     url: '/'
//   }
//   shot.inject(server.handler, request, function(res){
//   //  console.log(res);
//     t.equal(res.payload, backend.wordOfTheDay, "passed!");
//     t.end();
//   })
// })
