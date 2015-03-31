'use strict';

var React = require('react');
var superagent = require('superagent');

// Function that list beers for you ;)
var listBeers = function (callback) {
  var url = 'v1/beers.json';

  superagent
    .get(url)
    .end(function (err, response) {
      if (err) {
        console.log(err);
      } else {
        var data = JSON.parse(response.text).beers;
        callback(data);
      }
    });
};

var BeerList = React.createClass({

  // TODO getInitialState

  // TODO componentWillMount

  // TODO render
});
module.exports = BeerList;
