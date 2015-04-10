import Reflux from 'reflux';
import BeersList from './beerList.action';

const BeersStore = Reflux.createStore({
  listenables: BeersList,

  onGetBeers() {
    console.log('[STORE] action started');
  },

  onGetBeersCompleted(data) {
    console.log('[STORE] trigger data :', data);
    this.trigger(data);
  },

  onGetBeersFailed(err) {
    console.log('[STORE] action failed ...', err);
  }
});

export default BeersStore;
