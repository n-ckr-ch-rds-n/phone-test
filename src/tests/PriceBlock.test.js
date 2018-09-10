import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PriceBlock from '../components/priceblock';

describe('<PriceBlock />', () => {
  let priceblock;

  it('renders an upfront price column and a monthlyprice column', () => {
    priceblock = shallow(<PriceBlock />);
    expect(priceblock.find('div.upfront').length).toEqual(1);
    expect(priceblock.find('div.monthly').length).toEqual(1);
  })

  it('takes upfront price and monthly price as props', () => {
    priceblock = mount(<PriceBlock upfront='43' monthly='149' />);
    expect(priceblock.props().upfront).toEqual('43');
    expect(priceblock.props().monthly).toEqual('149');
  })

  it('renders upfront price', () => {
    priceblock = mount(<PriceBlock upfront='43' monthly='149' />);
    expect(priceblock.find('div.upfront').text()).toEqual('from £43 upfront cost');
  })

  it('renders monthly price', () => {
    priceblock = mount(<PriceBlock upfront='43' monthly='149' />);
    expect(priceblock.find('div.monthly').text()).toEqual('When you pay £149 a month');
  })
})
