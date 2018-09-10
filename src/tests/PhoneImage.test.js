import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhoneImage from '../components/phoneimage';

describe('<PhoneImage />', () => {
	let phoneimage;

	it('renders an image', () => {
		phoneimage = shallow(<PhoneImage />);
		expect(phoneimage.find('img').length).toEqual(1);
	});

	it('takes an image as props', () => {
		phoneimage = mount(<PhoneImage colour='gold.png'/>);
		expect(phoneimage.props().colour).toEqual('gold.png');
	});
});
