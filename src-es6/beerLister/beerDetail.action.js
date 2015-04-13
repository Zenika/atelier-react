import Reflux from 'reflux';
import { getBeer } from '../utils/openBeerRequest';

var Actions = Reflux.createActions({
  getBeer: {
    children: ['completed', 'failed']
  }
});

Actions.getBeer.listen(function (id) {
  getBeer(id)
    .then(this.completed)
    .catch(this.failed);
});

export default Actions;
