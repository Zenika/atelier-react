'use strict';

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
jest.dontMock('../beerSearch.component.jsx');

var BeerSearch = require('../beerSearch.component.jsx');
var BeerListActions = require('../../actions/beersList.action');

describe('beerList.component', function () {
  var instance;
  var input;


  beforeEach(function () {


    instance = TestUtils.renderIntoDocument(<BeerSearch />);
    input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');
  });

  it('should render beerSearch component', function () {
    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'form')).toBeDefined();
  });

  it('should call filter action when input value change', function () {
    input.getDOMNode().value = 'foo';
    TestUtils.Simulate.change(input);

    jest.runAllTimers();

    expect(BeerListActions.filterBeers).toBeCalledWith('foo');
  });
});
