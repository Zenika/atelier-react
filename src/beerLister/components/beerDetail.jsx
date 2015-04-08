'use strict';

var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reflux = require('reflux');
var BeerDetailAction = require('../actions/beerDetail.action');
var BeerStore = require('../stores/beer.store');

var BeerDetail = React.createClass({
  mixins: [
    Router.State,
    Reflux.connect(BeerStore, 'beer')
  ],

  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillMount: function () {
    var id = this.context.router.getCurrentParams().beerId;

    BeerDetailAction.getBeer(id);
  },

  render: function () {
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
});

module.exports = BeerDetail;