import Reflux from 'reflux';
import BeersList from './beerList.action';
import _ from 'lodash';

const BeersStore = Reflux.createStore({
  listenables: BeersList,

  onGetBeers() {
    console.log('[STORE] action started');
  },

  onGetBeersCompleted(data) {
    console.log('[STORE] trigger data :', data);
    this.data = data;
    this.trigger(data);
  },

  onGetBeersFailed(err) {
    console.log('[STORE] action failed ...', err);
  },

  onFilterBeers: function (searchBeer) {
    if (searchBeer) {
      console.log('[STORE] filter', searchBeer);
      var searchLower = searchBeer.toLowerCase();

      var found = this.data.filter((beer) => {
        var nameLower = beer.name.toLowerCase();
        return nameLower.includes(searchLower);
      });

      this.trigger(found);
    } else {
      console.log('[STORE] unfilter');
      this.trigger(this.data);
    }
  }
});

export default BeersStore;
