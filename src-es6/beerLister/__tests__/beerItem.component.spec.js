import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

jest.dontMock('../beerItem.component');

const BeerItem = require('../beerItem.component');

const beerMock = {id: 1, name: 'beer 1', description: 'desc beer 1', abv: 6.4};

describe('beerItem.component', () => {
  let instance;

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(<BeerItem beer={beerMock}/>);
  });

  it('should render 1 beer component', () => {
    expect(instance).toBeDefined();
    //expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'li')).toBeDefined();
  });

  /*it('should have link to its detail', () => {
    expect(instance).toBeDefined();
    const link = TestUtils.findRenderedDOMComponentWithTag(instance, 'a');
    expect(link).toBeDefined();
    expect(link.props.href).toBe('detail');
    expect(link.props.params).toEqual({beerId: 1});
  });*/
});
