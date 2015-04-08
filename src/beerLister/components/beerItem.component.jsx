'use strict';

var React = require('react');
var Link = require('react-router').Link;

var BeerItem = React.createClass({
  render: function () {
    var beer = this.props.beer;

    return (
      <li className="list-group-item row">
        <Link to="detail" params={{beerId: beer.id}}>
          <h3 className="list-group-item-heading">{beer.name}</h3>
        </Link>
        <div className="list-group-item-text">
          <p className="badge col-md-1">{beer.abv}%</p>
          <p className="col-md-11">{beer.description}</p>
        </div>
      </li>
    );
  }
});

module.exports = BeerItem;