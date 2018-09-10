import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Selector from './selector';

describe('<Selector />', () => {

  let selector;

  beforeEach (() => {
    selector = mount(<Selector />);
  })

  it('renders a colour selector', () => {
    expect(selector.find('div.Colour').exists()).toBe(true)
  })

  it('renders a capacity selector', () => {
    expect(selector.find('div.Capacity').exists()).toBe(true)
  })

  it('renders two capacity buttons', () => {
    expect(selector.find('button.capacitybutton').length).toEqual(2);
  })

  it('renders three colour buttons', () => {
    expect(selector.find('button.gold').length).toEqual(1);
    expect(selector.find('button.silver').length).toEqual(1);
    expect(selector.find('button.grey').length).toEqual(1);
  })

})
