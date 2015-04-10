'use strict';

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var BeerSearch = require('../beerSearch.component.jsx');

describe('beerList.component', function () {
  var instance;
  var input;
  var BeersListAction;

  beforeEach(function () {
    BeersListAction = require('../../actions/beersList.action');
    spyOn(BeersListAction, 'filterBeers');

    instance = TestUtils.renderIntoDocument(<BeerSearch />);
    input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');
  });

  it('should render beerSearch component', function () {
    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'form')).toBeDefined();
  });

  it('should call filter action when input value change', function () {
    React.findDOMNode(input).value = 'foo';
    TestUtils.Simulate.change(input);

    expect(BeersListAction.filterBeers).toHaveBeenCalledWith('foo');
  });
});
