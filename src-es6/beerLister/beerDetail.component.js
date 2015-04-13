'use strict';

import React from 'react';
import { Link } from 'react-router';
import Reflux from 'reflux';
import BeerDetailAction from './beerDetail.action';
import BeerStore from './beerDetail.store';

export default class BeerDetail extends React.Component {
  constructor() {
    super();
    this.state = { beer: null };
  }

  componentWillMount() {
    const id = this.context.router.getCurrentParams().beerId;
    BeerDetailAction.getBeer(id);
  }

  componentDidMount() {
    this.unsubscribe = BeerStore.listen(this.onBeerChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onBeerChange(beer) {
    this.setState({ beer: beer });
  }

  render() {
    var beer = this.state.beer;

    if (beer) {
      console.log(beer);

      return (
        <div className="row">
          <h3 className="list-group-item-heading">{beer.name}</h3>
          <div className="list-group-item-text">
            <p className="badge col-md-1">{beer.abv}%</p>
            <p className="col-md-11">{beer.description}</p>
          </div>
          <div className="list-group-item-text">
            <p className="col-md-4 col-md-offset-2">
              Date création : {beer.created_at}</p>
            <p className="col-md-4">
              Date modification : {beer.updated_at}
            </p>
          </div>

          <p className="col-md-12">
            <Link to="list">
              <button className="btn btn-primary">Retour à la list des bières</button>
            </Link>
          </p>
        </div>
      );
    } else {
      return null;
    }
  }
}

BeerDetail.contextTypes = {
  router: React.PropTypes.func
};
