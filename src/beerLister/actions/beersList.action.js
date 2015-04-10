'use strict';

var superagent = require('superagent');
var Reflux = require('reflux');

var Actions = Reflux.createActions({
  getBeers: {
    children: ['completed', 'failed']
  }
  // TODO add new action
});

Actions.getBeers.listen(function () {
  var url = 'v1/beers.json';
  var self = this;

  superagent
    .get(url)
    .end(function (err, response) {
      if (err) {
        console.log(err);
        self.failed(err);
      } else {
        var data = JSON.parse(response.text).beers;
        console.log('[ACTION] data received !');
        self.completed(data);
      }
    });
});

module.exports = Actions;
