'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var Main = require('./beerLister/main.container.jsx');
var BeersList = require('./beerLister/components/beerList.component.jsx');
var BeerDetail = require('./beerLister/components/beerDetail.jsx');

module.exports = (
  <Route name="main" handler={Main} path="/">
    <DefaultRoute name="list" handler={BeersList}  />
    <Route name="detail" path=":beerId" handler={BeerDetail} />
  </Route>
);
