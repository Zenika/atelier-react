'use strict';

var React = require('react');
var Reflux = require('reflux');
var BeerItem = require('./beerItem.component.jsx');
var BeersList = require('../actions/beersList.action');
var BeersStore = require('../stores/beers.store');

var BeerList = React.createClass({
  mixins: [
    Reflux.connect(BeersStore,'beers')
  ],

  getInitialState: function () {
    return {beers: []};
  },

  componentWillMount: function () {
    console.log('[COMPONENT] getBeers action !');
    BeersList.getBeers();
  },

  render: function () {
    console.log('[COMPONENT] rendering !');
    var list = this.state.beers.map(function (beer, n) {
      return <BeerItem key={n} beer={beer}/>;
    });

    return (
      <ul className="list-group">
        // TODO Declare new component
        {list}
      </ul>
    );
  }
});
module.exports = BeerList;
