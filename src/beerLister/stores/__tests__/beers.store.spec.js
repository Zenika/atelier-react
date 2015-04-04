'use strict';

jest.dontMock('../beers.store');

describe('Beers store', function () {
  var BeersStore;
  var listener;

  beforeEach(function () {
    BeersStore = require('../beers.store');

    listener = jest.genMockFn();
    BeersStore.listen(function (arg) {
      listener(arg);
    });
  });

  it('should not trigger onGetBeers', function () {
    BeersStore.onGetBeers();

    expect(listener).not.toBeCalled();
  });

  it('should trigger with data onGetBeersCompleted', function () {
    BeersStore.onGetBeersCompleted('foo');

    expect(listener).toBeCalledWith('foo');
  });

  it('should not trigger onGetBeersFailed', function () {
    BeersStore.onGetBeersFailed();

    expect(listener).not.toBeCalled();
  });
});
