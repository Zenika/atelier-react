'use strict';

// Require React + addons
var React = require('react/addons');
var HelloWorld = require('../helloworld.component.jsx');

describe('helloworld.component', function () {
  var TestUtils = React.addons.TestUtils;

  var instance;

  beforeEach(function () {
    instance = TestUtils.renderIntoDocument(<HelloWorld />);
  });

  it('should be rendered', function () {
    expect(instance).toBeDefined();
    expect(React.findDOMNode(instance) instanceof HTMLElement).toBe(true);
  });
});
