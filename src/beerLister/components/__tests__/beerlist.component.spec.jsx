'use strict';
var rewire = require('rewire');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var BeerList;

var beersMock = [
  {name: 'beer 1', description: 'desc beer 1', abv: 6.4},
  {name: 'beer 2', description: 'desc beer 2', abv: 8}
];

describe('beerList.component', function () {
  var instance;
  var BeersListAction;

  beforeEach(function (done) {
    BeersListAction = require('../../actions/beersList.action');
    spyOn(BeersListAction, 'getBeers');

    BeerList = rewire('../beerList.component.jsx');
    BeerList.__set__('BeerSearch', React.createClass({
      render: function () {
        return <form>{this.props.children}</form>;
      }
    }));

    BeerList.__set__('BeerItem', React.createClass({
      render: function () {
        return <li>{this.props.children}</li>;
      }
    }));

    instance = TestUtils.renderIntoDocument(<BeerList />);

    setTimeout(done, 100);
  });

  it('should render beerList component', function () {
    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'ul')).toBeDefined();
  });

  it('should call getBeers action on componentWillMount', function () {
    expect(BeersListAction.getBeers).toHaveBeenCalled();
  });

  it('should render 2 beers', function () {
    instance.setState({beers: beersMock});

    var lis = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
    expect(lis).toBeDefined();
    expect(lis.length).toBe(2);
  });
});