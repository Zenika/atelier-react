'use strict';

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var superagent = require('superagent');

// Don't forget to tell jest to not mock the tested component ;)
jest.dontMock('../beerList.component.jsx');
var BeerList = require('../beerList.component.jsx');

var beersMock = {
  beers: [
    {name: 'beer 1', description: 'desc beer 1', abv: 6.4},
    {name: 'beer 2', description: 'desc beer 2', abv: 8}
  ]
};

describe('beerList.component', function () {
  var instance;

  beforeEach(function () {
    superagent.end.mockImpl(function (callback) {
      callback(null, {text: JSON.stringify(beersMock)});
    });
  });

  it('should render beerList component', function () {
    instance = TestUtils.renderIntoDocument(<BeerList />);

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
