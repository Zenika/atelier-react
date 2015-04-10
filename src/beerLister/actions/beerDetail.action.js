'use strict';

var superagent = require('superagent');
var Reflux = require('reflux');
var sprintf = require('sprintf-js').sprintf;

var Actions = Reflux.createActions({
  getBeer: {
    children: ['completed', 'failed']
  }
});

Actions.getBeer.listen(function (id) {
  var url = sprintf('v1/beers/%s.json', id);
  var self = this;

  superagent
    .get(url)
    .end(function (err, response) {
      if (err) {
        console.log(err);
        self.failed(err);
      } else {
        var data = JSON.parse(response.text);
        console.log('[ACTION] data received !');
        console.log(data);
        self.completed(data);
      }
    });
});

module.exports = Actions;
