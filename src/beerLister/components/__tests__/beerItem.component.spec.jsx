'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var beerMock = {id: 1, name: 'beer 1', description: 'desc of the beer', abv: 6.4};

describe('beerItem.component', function () {
  var instance;

  beforeEach(function () {
    var BeerItem = require('../beerItem.component.jsx');

    instance = TestUtils.renderIntoDocument(<BeerItem beer={beerMock} />);
  });

  it('should render 1 beer component', function () {
    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'li')).toBeDefined();
  });

  it('should display beer details', function () {
    var element = React.findDOMNode(instance);
    expect(element.innerHTML).toContain('beer 1');
    expect(element.innerHTML).toContain('desc of the beer');
    expect(element.innerHTML).toContain('6.4');
  });
});