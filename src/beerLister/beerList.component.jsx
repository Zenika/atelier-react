'use strict';

var React = require('react');
var superagent = require('superagent');

// Function that list beers for you ;)
var listBeers = function (callback) {
  var url = 'http://api.openbeerdatabase.com/v1/beers.json';

  superagent
    .get(url)
    .end(function (err, response, data) {
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
      return (
        // TODO This have to be rendered somewhere else !
        <li key={n} className="list-group-item row">
          <h3 className="list-group-item-heading">{beer.name}</h3>
          <div className="list-group-item-text">
            <p className="badge col-md-1">{beer.abv}%</p>
            <p className="col-md-11">{beer.description}</p>
          </div>
        </li>
      );
    });

    return (
      <ul className="list-group">
      {list}
      </ul>
    );
  }
});
module.exports = BeerList;