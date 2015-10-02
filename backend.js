    var request = require('request');
    var env = require('env2')('./config.env');

  var definition = function(word, callback) {
    request('http://api.wordnik.com:80/v4/word.json/' + word + '/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=' + process.env.APIkey, function(error, response, array) {
        if (error) {
            alert('Sorry, there was an error!');
            // send an error to front end
        } else if (!error && response.statusCode === 200) {
        var jsonObject = JSON.parse(array);
        callback(jsonObject[0].text);
      }
    });
  };

  module.exports = definition;
