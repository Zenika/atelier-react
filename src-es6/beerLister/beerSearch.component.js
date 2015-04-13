import React from 'react';
import BeerListAction from './beersList.action';

export default class BeerSearch extends React.Component {
  search(event) {
    event.preventDefault();
    var searchInput = React.findDOMNode(this.refs.searchInput).value;
    console.log('value:', searchInput);
    BeerListAction.filterBeers(searchInput);
  }

  componentDidMount() {
    React.findDOMNode(this.refs.searchInput).focus();
  }

  render() {
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
}
