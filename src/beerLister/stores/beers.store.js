'use strict';

var Reflux = require('reflux');
var BeersList = require('../actions/beersList.action');
var _ = require('lodash');

var BeersStore = Reflux.createStore({
  listenables: BeersList,
  data: [],

  onGetBeers: function () {
    console.log('[SOTRE] action started');
  },

  onGetBeersCompleted: function (data) {
    console.log('[STORE] trigger data :', data);
    this.data = data;
    this.trigger(data);
  },

  onGetBeersFailed: function () {
    console.log('[STORE] action failed ...');
  },

  onFilterBeers: function (searchBeer) {
    if (searchBeer) {
      console.log('[STORE] filter', searchBeer);
      var searchLower = searchBeer.toLowerCase();
      var found = _.filter(this.data, function (beer) {
        var nameLower = beer.name.toLowerCase();

        return _.contains(nameLower, searchLower);
      });

      this.trigger(found);
    } else {
      console.log('[STORE] unfilter');
      this.trigger(this.data);
    }
  }
});

module.exports = BeersStore;
