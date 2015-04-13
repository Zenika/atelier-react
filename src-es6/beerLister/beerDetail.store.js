import Reflux from 'reflux';
import BeerDetail from './beerDetail.action';

const BeerStore = Reflux.createStore({
  listenables: BeerDetail,

  onGetBeer() {
    console.log('[SOTRE] getBeer action started');
  },

  onGetBeerCompleted(data) {
    console.log('[STORE] getBeer trigger data :', data);
    this.trigger(data);
  },

  onGetBeerFailed(err) {
    console.log('[STORE] getBeer action failed ...', err);
  }
});

export default BeerStore;
