import Reflux from 'reflux';
import { getBeers } from '../utils/openBeerRequest';

const Actions = Reflux.createActions({
  getBeers: {
    children: ['completed', 'failed']
  },
  filterBeers: {}
});

Actions.getBeers.listen(function() {
  getBeers()
    .then(this.completed)
    .catch(this.failed);
});

export default Actions;
