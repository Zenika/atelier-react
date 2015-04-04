'use strict';

describe('Beers store', function () {
  var BeersStore;
  var listener;

  beforeEach(function () {
    BeersStore = require('../beers.store');

    listener = jasmine.createSpy('listener');
    BeersStore.listen(function (arg) {
      listener(arg);
    });
  });

  it('should not trigger onGetBeers', function () {
    BeersStore.onGetBeers();

    expect(listener).not.toHaveBeenCalled();
  });

  it('should trigger with data onGetBeersCompleted', function () {
    BeersStore.onGetBeersCompleted('foo');

    expect(listener).toHaveBeenCalledWith('foo');
  });

  it('should not trigger onGetBeersFailed', function () {
    BeersStore.onGetBeersFailed();

    expect(listener).not.toHaveBeenCalled();
  });

});