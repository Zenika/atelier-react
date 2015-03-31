'use strict';

// Require React + addons
var React = require('react/addons');
var componentFile = '../helloworld.component';

// Don't forget to tell jest to not mock the tested component ;)
jest.dontMock(componentFile);

describe('helloworld.component', function () {
  var HelloWorld;
  var TestUtils = React.addons.TestUtils;

  var instance;

  beforeEach(function () {
    HelloWorld = require(componentFile);

    instance = TestUtils.renderIntoDocument(<HelloWorld />);
  });

  it('should render helloworld component', function () {
    expect(instance).toBeDefined();
    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'div')).toBeDefined();
  });
});
