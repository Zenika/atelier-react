'use strict';
var superagent;
var Reflux = require('reflux');

jest.dontMock('../beerDetail.action');
jest.dontMock('reflux');

describe('BeerDetail action', function () {
  var BeerDetail;
  var dummyStore;
  var onGetBeer;
  var onGetBeerCompleted;
  var onGetBeerFailed;

  beforeEach(function () {
    superagent = require('superagent');
    BeerDetail = require('../beerDetail.action');
    onGetBeer = jest.genMockFn();
    onGetBeerCompleted = jest.genMockFn();
    onGetBeerFailed = jest.genMockFn();

    dummyStore = Reflux.createStore({
      listenables: BeerDetail,
      onGetBeer: function () {
        onGetBeer();
      },
      onGetBeerCompleted: function (data) {
        onGetBeerCompleted(data);
      },
      onGetBeerFailed: function () {
        onGetBeerFailed();
      }
    });
  });

  var mockSuperagent = function (err) {
    superagent.end.mockImpl(function (callback) {
      callback(err, {text: '{"id":"foo"}'});
    });
  };

  it('should call completed with data', function () {
    mockSuperagent(false);
    BeerDetail.getBeer();

    jest.runAllTimers();

    expect(onGetBeer).toBeCalled();
    expect(onGetBeerCompleted).toBeCalledWith({id: 'foo'});
    expect(onGetBeerFailed).not.toBeCalled();
  });

  it('should call failed', function () {
    mockSuperagent('err');
    BeerDetail.getBeer();

    jest.runAllTimers();

    expect(onGetBeer).toBeCalled();
    expect(onGetBeerCompleted).not.toBeCalled();
    expect(onGetBeerFailed).toBeCalled();
  });
});
