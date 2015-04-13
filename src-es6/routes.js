'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Main from './beerLister/main.container';
import BeersList from './beerLister/beerList.component';
import BeerDetail from './beerLister/beerDetail.component';

module.exports = (
  <Route name="main" handler={Main} path="/">
    <DefaultRoute name="list" handler={BeersList} />
    <Route name="detail" path=":beerId" handler={BeerDetail} />
  </Route>
);
