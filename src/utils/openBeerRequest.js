'use strict';

var superagent = require('superagent');

module.exports = {
  getBeer: function (callback) {
    var url = 'v1/beers.json',
      params = {};

    superagent
      .get(url, params)
      .end(function (err, response) {
        if (err) {
          console.log(err);
        } else {
          var data = JSON.parse(response.text);
          callback(data.beers);
        }
      });
  }
};
