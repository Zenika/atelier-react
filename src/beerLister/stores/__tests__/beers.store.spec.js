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

  describe('given that data are allready fetched', function () {
    var data = [{name: 'foo'}, {name: 'bar'}];
    beforeEach(function () {
      BeersStore.onGetBeersCompleted(data);

      jest.runAllTimers();
      listener.mockClear();
    });

    it('should trigger filtered data onFilterBeers with filter', function () {
      BeersStore.onFilterBeers('foo');

      expect(listener).toBeCalledWith([{name: 'foo'}]);
    });

    it('should trigger all data onFilterBeers without filter', function () {
      BeersStore.onFilterBeers();

      expect(listener).toBeCalledWith(data);
    });
  });
});
