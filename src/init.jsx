'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

// TODO Faire le rendu du RouteHandler
Router.run(routes, function (Main) {
  React.render(<Main />, document.getElementById('view'));
});
