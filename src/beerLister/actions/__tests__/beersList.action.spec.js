'use strict';
var superagent = require('superagent');
var Reflux = require('reflux');

describe('BeersList action', function () {
  var BeersList;
  var onGetBeers;
  var onGetBeersCompleted;
  var onGetBeersFailed;

  var mockSuperagent = function (err, data) {
    spyOn(superagent, 'get').and.callFake(function () {
      return {end: jasmine.createSpy('end').and.callFake(function (callback) {
        callback(err, data);
      })};
    });
  };

  var createStore = function (done) {
    Reflux.createStore({
      listenables: BeersList,
      onGetBeers: function () {
        onGetBeers();
      },
      onGetBeersCompleted: function (data) {
        onGetBeersCompleted(data);
        done();
      },
      onGetBeersFailed: function () {
        onGetBeersFailed();
        done();
      }
    });
  };

  beforeEach(function () {
    BeersList = require('../beersList.action');
    onGetBeers = jasmine.createSpy('onGetBeers');
    onGetBeersCompleted = jasmine.createSpy('onGetBeersCompleted');
    onGetBeersFailed = jasmine.createSpy('onGetBeersFailed');
  });

  describe('should succeed', function () {

    beforeEach(function (done) {

      mockSuperagent(null, {text: '{"beers":"foo"}'});

      createStore(done);

      BeersList.getBeers();

    });

    it('with data', function () {
      expect(onGetBeers).toHaveBeenCalled();
      expect(onGetBeersCompleted).toHaveBeenCalledWith('foo');
      expect(onGetBeersFailed).not.toHaveBeenCalled();
    });

  });

  describe('should fail', function () {

    beforeEach(function (done) {

      mockSuperagent('Dummy error', null);

      createStore(done);

      BeersList.getBeers();

    });

    it('with error', function () {
      expect(onGetBeers).toHaveBeenCalled();
      expect(onGetBeersCompleted).not.toHaveBeenCalled();
      expect(onGetBeersFailed).toHaveBeenCalled();
    });

  });


  it('should have a filterBeers action', function () {
    expect(BeersList.filterBeers).toBeDefined();
    expect(typeof BeersList.filterBeers).toBe('function');
  });
});
