'use strict';

var Reflux = require('reflux');
var BeersList = require('../actions/beersList.action');

var BeersStore = Reflux.createStore({
  listenables: BeersList,

  onGetBeers: function () {
    console.log('[SOTRE] action started');
  },

  onGetBeersCompleted: function (data) {
    console.log('[STORE] trigger data :', data);
    this.trigger(data);
  },

  onGetBeersFailed: function (err) {
    console.log('[STORE] action failed ...');
  }
});

module.exports = BeersStore;
