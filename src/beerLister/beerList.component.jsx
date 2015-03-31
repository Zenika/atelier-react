'use strict';

var React = require('react');
var superagent = require('superagent');

var BeerItem = require('./beerItem.component.jsx');

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

  getInitialState: function () {
    return {beers: []};
  },

  componentWillMount: function () {
    var self = this;

    listBeers(function (data) {
      self.setState({beers: data});
    });
  },

  render: function () {

    var list = this.state.beers.map(function (beer, n) {
      return <BeerItem key={n} beer={beer}/>;
    });

    return (
      <ul className="list-group">
        {list}
      </ul>
    );
  }
});
module.exports = BeerList;
