import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Page from './page';
import PhoneImage from './phoneimage';
import PhoneInfo from './phoneinfo';
import Selector from './selector';

describe('<Page />', () => {

  let wrapper;

  beforeEach (() => {
    wrapper = shallow(<Page />);
  })

  it('renders Column1', () => {
    expect(wrapper.find('div.Column1').exists()).toBe(true)
  })

  it('renders Column2', () => {
    expect(wrapper.find('div.Column2').exists()).toBe(true)
  })

  it('renders a PhoneImage', () => {
    expect(wrapper.find(PhoneImage).length).toEqual(1);
  })

  it('passes image file as props to PhoneImage', () => {
    expect(wrapper.find(PhoneImage).props().colour).toEqual("Apple_iPhone_8_Gold-full-product-front.png");
  })

  it('renders a PhoneInfo component', () => {
    expect(wrapper.find(PhoneInfo).length).toEqual(1);
  })

  it('passes props to PhoneInfo', () => {
    const infoprops = wrapper.find(PhoneInfo).props();
    expect(infoprops.groupname).toEqual('Apple iPhone 8');
  })

  it('renders a Selector component', () => {
    expect(wrapper.find(Selector).length).toEqual(1);
  })

})
