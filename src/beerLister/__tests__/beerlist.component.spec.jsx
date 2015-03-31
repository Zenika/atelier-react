'use strict';
var rewire = require('rewire');
var superagent = require('superagent');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var BeerList;

var beersMock = {
  beers: [
    {name: 'beer 1', description: 'desc beer 1', abv: 6.4},
    {name: 'beer 2', description: 'desc beer 2', abv: 8}
  ]
};

describe('beerList.component', function () {
  var instance;

  beforeEach(function () {

    spyOn(superagent, 'get').and.callFake(function () {
      return {end: jasmine.createSpy('end').and.callFake(function (callback) {
        callback(null, {text: JSON.stringify(beersMock)});
      })};
    });

    BeerList = rewire('../beerList.component.jsx');

    BeerList.__set__('BeerItem', React.createClass({
      render: function () {
        return <li>{this.props.children}</li>;
      }
    }));

    instance = TestUtils.renderIntoDocument(<BeerList />);
  });

  it('should render beerList component', function () {
    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'ul')).toBeDefined();
  });

  it('should render 2 beers', function () {
    var lis = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
    expect(lis).toBeDefined();
    expect(lis.length).toBe(2);
  });
});
