'use strict';

var React = require('react');

var BeerItem = React.createClass({
  render: function () {
    var beer = this.props.beer;

    return (
      <li className="list-group-item row">
        // TODO Ajouter un lien vers le détail
        <h3 className="list-group-item-heading">{beer.name}</h3>
        <div className="list-group-item-text">
          <p className="badge col-md-1">{beer.abv}%</p>
          <p className="col-md-11">{beer.description}</p>
        </div>
      </li>
    );
  }
});

module.exports = BeerItem;