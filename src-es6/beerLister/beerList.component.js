import React from 'react';
import BeerListStore from './beerList.store';
import BeerListActions from './beerList.action';

export default class BeerList extends React.Component {

  constructor() {
    super();
    this.state = { beers: [] };
  }

  componentDidMount() {
    this.unsubscribe = BeerListStore.listen(this.onBeersChange.bind(this));
    BeerListActions.getBeers();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onBeersChange(beers) {
    this.setState({ beers: beers });
  }

  render() {
    var list = this.state.beers.map(function (beer, n) {
      return (
        <li key={n} className="list-group-item row">
          <h3 className="list-group-item-heading">{beer.name}</h3>
          <div className="list-group-item-text">
            <p className="badge col-md-1">{beer.abv}%</p>
            <p className="col-md-11">{beer.description}</p>
          </div>
        </li>
      );
    });

    return (
      <ul className="list-group">
      {list}
      </ul>
    );
  }
}
