var wordSearch = 'house'
var request = require('request');
var env = require('env2')('./config.env');
// var exports = module.exports

request('http://api.wordnik.com:80/v4/word.json/' +wordSearch + '/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=' + process.env.APIkey, function (error, response, array) {
    if (!error && response.statusCode == 200) {
        var jsonObject = JSON.parse(array);
        jsonObject[0].text
    }
});


var wordOfTheDay = (function (){
  var date = new Date();
  var dt = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();

  request('http://api.wordnik.com:80/v4/words.json/wordOfTheDay?date=' + dt + '&api_key=' + process.env.APIkey, function (error, response, array) {
    if (!error && response.statusCode == 200) {
        var jsonObject = JSON.parse(array);
        console.log(jsonObject.word);
        console.log(jsonObject.definitions[0].text);
    }
  });
}());

module.exports = wordOfTheDay;
