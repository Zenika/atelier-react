'use strict';

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

jest.dontMock('../beerItem.component.jsx');

var BeerItem = require('../beerItem.component.jsx');

var beerMock = {id: 1, name: 'beer 1', description: 'desc beer 1', abv: 6.4};

describe('beerItem.component', function () {
  var instance;

  beforeEach(function () {
    instance = TestUtils.renderIntoDocument(<BeerItem beer={beerMock}/>);
  });

  it('should render 1 beer component', function () {
    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'li')).toBeDefined();
  });

  it('should have link to its detail', function () {
    expect(instance).toBeDefined();
    var link = TestUtils.findRenderedDOMComponentWithTag(instance, 'a');
    expect(link).toBeDefined();
    expect(link.props.href).toBe('detail');
    expect(link.props.params).toEqual({beerId: 1});
  });
});
