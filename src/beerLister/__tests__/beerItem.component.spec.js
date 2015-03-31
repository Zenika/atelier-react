'use strict';

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

// Don't forget to tell jest to not mock the tested component ;)
jest.dontMock('../beerItem.component.jsx');
var BeerItem = require('../beerItem.component.jsx');

var beerMock = {name: 'beer 1', description: 'desc beer 1', abv: 6.4};

describe('beerItem.component', function () {
  var instance;

  it('should render 1 beer component', function () {
    instance = TestUtils.renderIntoDocument(<BeerItem beer={beerMock}/>);

    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'li')).toBeDefined();
  });
});
