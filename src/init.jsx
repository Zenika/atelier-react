'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');
var Main = require('./beerLister/main.container.jsx');

// TODO Render the root element into the view
Router.run(routes, function (Main) {
  React.render(<Main />, document.getElementById('view'));
});
