'use strict';

var React = require('react');
var BeerListAction = require('../actions/beersList.action');

var BeerSearch = React.createClass({

  search: function (event) {
    event.preventDefault();
    var searchInput = React.findDOMNode(this.refs.searchInput).value;
    console.log('value:', searchInput);
    BeerListAction.filterBeers(searchInput);
  },

  componentDidMount: function () {
    React.findDOMNode(this.refs.searchInput).focus();
  },

  render: function () {
    return (
      <form className="inline" onChange={this.search}>
        <p className="input-group col-md-3">
          <input className="form-control input"
            type="search"
            placeholder="Beer name ..."
            ref="searchInput"
          />
          <span className="input-group-btn">
            <button className="btn btn-primary glyphicon glyphicon-search" type="submit"/>
          </span>
        </p>
      </form>
    );
  }
});

module.exports = BeerSearch;