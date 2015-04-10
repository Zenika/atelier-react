'use strict';

describe('beer store', function () {
  var BeerStore;
  var listener;

  beforeEach(function () {
    BeerStore = require('../beer.store');

    listener = jasmine.createSpy('listener');
    BeerStore.listen(function (arg) {
      listener(arg);
    });
  });

  it('should not trigger onGetBeer', function () {
    BeerStore.onGetBeer();

    expect(listener).not.toHaveBeenCalled();
  });

  it('should trigger with data onGetBeerCompleted', function () {
    BeerStore.onGetBeerCompleted('foo');

    expect(listener).toHaveBeenCalledWith('foo');
  });

  it('should not trigger onGetBeerFailed', function () {
    BeerStore.onGetBeerFailed();

    expect(listener).not.toHaveBeenCalled();
  });
});
