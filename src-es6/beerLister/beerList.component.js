import React from 'react';
import BeerItem from './beerItem.component';
import BeerSearch from './beerSearch.component';
import BeerListStore from './beerList.store';
import BeerListActions from './beerList.action';

export default class BeerList extends React.Component {

  constructor() {
    super();
    this.state = { beers: [] };
  }

  componentWillMount() {
    BeerListActions.getBeers();
  }

  componentDidMount() {
    this.unsubscribe = BeerListStore.listen(this.onBeersChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onBeersChange(beers) {
    this.setState({ beers: beers });
  }

  render() {
    var list = this.state.beers.map((beer, n) => {
      return <BeerItem key={n} beer={beer}/>;
    });

    return (
      <ul className="list-group">
        <BeerSearch />
        {list}
      </ul>
    );
  }
}
