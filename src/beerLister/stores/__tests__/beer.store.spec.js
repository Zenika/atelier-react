'use strict';

jest.dontMock('../beer.store');

describe('beer store', function () {
  var BeerStore;
  var listener;

  beforeEach(function () {
    BeerStore = require('../beer.store');

    listener = jest.genMockFn();
    BeerStore.listen(function (arg) {
      listener(arg);
    });
  });

  it('should not trigger onGetBeer', function () {
    BeerStore.onGetBeer();

    expect(listener).not.toBeCalled();
  });

  it('should trigger with data onGetBeerCompleted', function () {
    BeerStore.onGetBeerCompleted('foo');

    expect(listener).toBeCalledWith('foo');
  });

  it('should not trigger onGetBeerFailed', function () {
    BeerStore.onGetBeerFailed();

    expect(listener).not.toBeCalled();
  });
});
