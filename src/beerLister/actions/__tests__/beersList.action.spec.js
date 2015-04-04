'use strict';
var superagent;
var Reflux = require('reflux');

jest.dontMock('../beersList.action');
jest.dontMock('reflux');

describe('BeersList action', function () {
  var BeersList;
  var dummyStore;
  var onGetBeers;
  var onGetBeersCompleted;
  var onGetBeersFailed;

  beforeEach(function () {
    superagent = require('superagent');
    BeersList = require('../beersList.action');
    onGetBeers = jest.genMockFn();
    onGetBeersCompleted = jest.genMockFn();
    onGetBeersFailed = jest.genMockFn();

    dummyStore = Reflux.createStore({
      listenables: BeersList,
      onGetBeers: function () {
        onGetBeers();
      },
      onGetBeersCompleted: function (data) {
        onGetBeersCompleted(data);
      },
      onGetBeersFailed: function () {
        onGetBeersFailed();
      }
    });
  });

  var mockSuperagent = function (err) {
    superagent.end.mockImpl(function (callback) {
      callback(err, {text: '{"beers":"foo"}'});
    });
  };

  it('should call completed with data', function () {
    mockSuperagent(false);
    BeersList.getBeers();

    jest.runAllTimers();

    expect(onGetBeers).toBeCalled();
    expect(onGetBeersCompleted).toBeCalledWith('foo');
    expect(onGetBeersFailed).not.toBeCalled();
  });

  it('should call failed', function () {
    mockSuperagent('err');
    BeersList.getBeers();

    jest.runAllTimers();

    expect(onGetBeers).toBeCalled();
    expect(onGetBeersCompleted).not.toBeCalled();
    expect(onGetBeersFailed).toBeCalled();
  });
});
