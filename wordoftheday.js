request = require('request'),
env = require('env2')('./config.env');

var wordOfTheDay = function(word, callback) {
  var date = new Date();
  var dt = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  request('http://api.wordnik.com:80/v4/words.json/wordOfTheDay?date=' + dt + '&api_key=' + process.env.APIkey, function(error, response, array) {
    if (!error && response.statusCode === 200) {
      var jsonObject = JSON.parse(array);
      callback(jsonObject.word);
      // console.log (jsonObject.definitions[0].text);
    }
  });
};

module.exports = wordOfTheDay;
