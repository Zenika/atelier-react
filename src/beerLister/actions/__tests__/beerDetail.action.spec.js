'use strict';
var superagent = require('superagent');
var Reflux = require('reflux');

describe('BeerDetail action', function () {
  var BeerDetail;
  var onGetBeer;
  var onGetBeerCompleted;
  var onGetBeerFailed;

  var mockSuperagent = function (err, data) {
    spyOn(superagent, 'get').and.callFake(function () {
      return {end: jasmine.createSpy('end').and.callFake(function (callback) {
        callback(err, data);
      })};
    });
  };

  var createStore = function (done) {
    Reflux.createStore({
      listenables: BeerDetail,
      onGetBeer: function () {
        onGetBeer();
      },
      onGetBeerCompleted: function (data) {
        onGetBeerCompleted(data);
        done();
      },
      onGetBeerFailed: function () {
        onGetBeerFailed();
        done();
      }
    });
  };

  beforeEach(function () {

    onGetBeer = jasmine.createSpy('onGetBeer');
    onGetBeerCompleted = jasmine.createSpy('onGetBeerCompleted');
    onGetBeerFailed = jasmine.createSpy('onGetBeerFailed');

    BeerDetail = require('../beerDetail.action');
  });

  describe('should succeed', function () {

    beforeEach(function (done) {

      mockSuperagent(null, {text: '{"id":"foo"}'});

      createStore(done);

      BeerDetail.getBeer();

    });

    it('with data', function () {
      expect(onGetBeer).toHaveBeenCalled();
      expect(onGetBeerCompleted).toHaveBeenCalledWith({id: 'foo'});
      expect(onGetBeerFailed).not.toHaveBeenCalled();
    });

  });

  describe('should fail', function () {

    beforeEach(function (done) {
      mockSuperagent('Dummy error', null);

      createStore(done);

      BeerDetail.getBeer();
    });

    it('with error', function () {
      expect(onGetBeer).toHaveBeenCalled();
      expect(onGetBeerCompleted).not.toHaveBeenCalled();
      expect(onGetBeerFailed).toHaveBeenCalled();
    });

  })

});
