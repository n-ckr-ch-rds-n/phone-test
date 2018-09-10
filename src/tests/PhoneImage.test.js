import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhoneImage from '../components/phoneimage';

describe('<PhoneImage />', () => {
  it('renders an image', () => {
    const phoneimage = shallow(<PhoneImage />);
    expect(phoneimage.find('img').length).toEqual(1);
  })

  it('takes an image as props', () => {
    const phoneimage = mount(<PhoneImage colour='gold.png'/>);
    expect(phoneimage.props().colour).toEqual('gold.png');
  })
})
