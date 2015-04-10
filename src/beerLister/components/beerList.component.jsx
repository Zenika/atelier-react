'use strict';

var React = require('react');
var Reflux = require('reflux');
var BeerItem = require('./beerItem.component.jsx');
var BeersList = require('../actions/beersList.action');
var BeersStore = require('../stores/beers.store');
var BeerSearch = require('./beerSearch.component.jsx');

var BeerList = React.createClass({
  mixins: [
    Reflux.connect(BeersStore, 'beers')
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
      <div>
        <BeerSearch />
        <ul className="list-group">
        {list}
        </ul>
      </div>
    );
  }
});

module.exports = BeerList;
