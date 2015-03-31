'use strict';
var superagent = require('superagent');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var BeerList = require('../beerList.component.jsx');

var beersMock = {
  beers: [
    {name: 'beer 1', description: 'desc beer 1', abv: 6.4},
    {name: 'beer 2', description: 'desc beer 2', abv: 8}
  ]
};

describe('beerList.component', function () {
  var instance;

  var mockSuperagent = function (err, data) {
    spyOn(superagent, 'get').and.callFake(function () {
      return {end: jasmine.createSpy('end').and.callFake(function (callback) {
        callback(err, data);
      })};
    });
  };

  beforeEach(function (done) {
    mockSuperagent(null, { text: JSON.stringify(beersMock)})
    instance = TestUtils.renderIntoDocument(<BeerList />);

    setTimeout(done, 100);
  });

  it('should render beerList component', function () {
    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'ul')).toBeDefined();
  });

  it('should render 2 beers', function () {
    instance = TestUtils.renderIntoDocument(<BeerList />);

    expect(instance).toBeDefined();
    var lis = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
    expect(lis).toBeDefined();
    expect(lis.length).toBe(2);
  });
});
