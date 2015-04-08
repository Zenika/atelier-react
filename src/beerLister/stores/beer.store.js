'use strict';

var Reflux = require('reflux');
var BeerDetail = require('../actions/beerDetail.action');

var BeerStore = Reflux.createStore({
  listenables: BeerDetail,

  onGetBeer: function () {
    console.log('[SOTRE] getBeer action started');
  },
  onGetBeerCompleted: function (data) {
    console.log('[STORE] getBeer trigger data :', data);
    this.trigger(data);
  },

  onGetBeerFailed: function (err) {
    console.log('[STORE] getBeer action failed ...');
  }
});

module.exports = BeerStore;
