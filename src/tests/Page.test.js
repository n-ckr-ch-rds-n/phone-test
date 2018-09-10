import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Page from '../page';
import PhoneImage from '../phoneimage';
import PhoneInfo from '../phoneinfo';
import Selector from '../selector';
import PriceBlock from '../priceblock';

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
    expect(wrapper.find(PhoneImage).props().colour).toEqual(wrapper.state().colour);
  })

  it('renders a PhoneInfo component', () => {
    expect(wrapper.find(PhoneInfo).length).toEqual(1);
  })

  it('passes props to PhoneInfo', () => {
    const infoprops = wrapper.find(PhoneInfo).props();
    expect(infoprops.groupname).toEqual(wrapper.state().groupname);
  })

  it('renders a Selector component', () => {
    expect(wrapper.find(Selector).length).toEqual(1);
  })

  it('passes colour props to Selector', () => {
    const selectorprops = wrapper.find(Selector).props();
    expect(selectorprops.colour).toEqual(wrapper.state().phonetype.colourName);
  })

  it('passes capacity props to Selector', () => {
    const selectorprops = wrapper.find(Selector).props();
    expect(selectorprops.capacity).toEqual(wrapper.state().phonetype.memory);
  })

  it('renders a PriceBlock component', () => {
    expect(wrapper.find(PriceBlock).length).toEqual(1);
  })

  it('passes upfront price props to PriceBlock', () => {
    const priceblockprops = wrapper.find(PriceBlock).props();
    expect(priceblockprops.upfront).toEqual(wrapper.state().phonetype.priceInfo.hardwarePrice.oneOffPrice.gross);
  })

  it('passes upfront price props to PriceBlock', () => {
    const priceblockprops = wrapper.find(PriceBlock).props();
    expect(priceblockprops.monthly).toEqual(wrapper.state().phonetype.priceInfo.bundlePrice.monthlyPrice.gross);
  })
})
