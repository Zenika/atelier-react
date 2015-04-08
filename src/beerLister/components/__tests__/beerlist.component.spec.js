'use strict';

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

// Don't forget to tell jest to not mock the tested component ;)
jest.dontMock('../beerList.component.jsx');
jest.dontMock('../../stores/beers.store');

var BeerList;
var BeerItem;

var beersMock = [
  {name: 'beer 1', description: 'desc beer 1', abv: 6.4},
  {name: 'beer 2', description: 'desc beer 2', abv: 8}
];

describe('beerList.component', function () {
  var instance;
  var BeersStore;
  var BeersListAction;

  beforeEach(function () {
    BeersStore = require('../../stores/beers.store');
    BeersListAction = require('../../actions/beersList.action');

    BeerList = require('../beerList.component.jsx');
    BeerItem = require('../beerItem.component.jsx');
    TestUtils.mockComponent(BeerItem, 'li');
  });

  it('should render beerList component', function () {
    instance = TestUtils.renderIntoDocument(<BeerList />);

    jest.runAllTimers();

    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'ul')).toBeDefined();
  });

  it('should call getBeers action on componentWillMount', function () {
    instance = TestUtils.renderIntoDocument(<BeerList />);

    jest.runAllTimers();

    expect(BeersListAction.getBeers).toBeCalled();
  });

  it('should render 2 beers', function () {
    instance = TestUtils.renderIntoDocument(<BeerList />);
    instance.setState({beers: beersMock});

    jest.runAllTimers();

    expect(instance).toBeDefined();
    var lis = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
    expect(lis).toBeDefined();
    expect(lis.length).toBe(2);
  });
});
