import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhoneInfo from '../components/phoneinfo';

describe('<PhoneInfo />', () => {
  let phoneinfo;

  beforeEach (() => {
    phoneinfo = mount(<PhoneInfo groupname='Apple iPhone 9' description='A great phone' />)
  })

  it('renders a header', () => {
    expect(phoneinfo.find('h1').length).toEqual(1);
  })

  it('the header displays the phone group', () => {
    expect(phoneinfo.find('h1').text()).toEqual('Apple iPhone 9');
  })

  it('renders a description paragraph', () => {
    expect(phoneinfo.find('p').length).toEqual(1);
  })

  it('the paragraph displays the description text', () => {
    expect(phoneinfo.find('p').text()).toEqual('A great phone');
  })
})
