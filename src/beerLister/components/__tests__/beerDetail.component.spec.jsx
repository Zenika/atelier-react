'use strict';
var rewire = require('rewire');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var stubRouterContext = require('../../../utils/stubRouterContext');

var beerMock = {id: 1, name: 'beer 1', description: 'desc of the beer', abv: 6.4};

describe('beerDetail.component', function () {
  var instance;
  var BeerDetailAction;

  beforeEach(function (done) {
    BeerDetailAction = require('../../actions/beerDetail.action');
    spyOn(BeerDetailAction, 'getBeer');

    var BeerDetail = rewire('../beerDetail.component.jsx');
    BeerDetail.__set__('Link', React.createClass({
      render: function () {
        return <a>{this.props.children}</a>;
      }
    }));

    var Subject = stubRouterContext(BeerDetail, {}, {
      getCurrentParams: function () {
        return {beerId: 1};
      }
    });

    instance = TestUtils.renderIntoDocument(<Subject />);

    setTimeout(done, 100);
  });

  it('should call getBeer action', function () {
    expect(BeerDetailAction.getBeer).toHaveBeenCalledWith(1);
    expect(instance).toBeDefined();
  });


  it('should have a link', function () {
    TestUtils.findAllInRenderedTree(instance, function (component) {
      component.setState({beer: beerMock});
    });

    expect(instance).toBeDefined();
    var link = TestUtils.findRenderedDOMComponentWithTag(instance, 'a');
    expect(link).toBeDefined();
  });

  it('should display beer details', function () {
    TestUtils.findAllInRenderedTree(instance, function (component) {
      component.setState({beer: beerMock});
    });

    var element = React.findDOMNode(instance);
    expect(element.innerHTML).toContain('beer 1');
    expect(element.innerHTML).toContain('desc of the beer');
    expect(element.innerHTML).toContain('6.4');
  });
});
