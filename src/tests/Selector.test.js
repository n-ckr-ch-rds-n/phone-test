import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Selector from '../components/selector';
import Page from '../components/page';


describe('<Selector />', () => {

	let selector;
	let page;

	beforeEach (() => {
		selector = mount(<Selector />);
		page = mount(<Page />);
	});

	it('renders a colour selector', () => {
		expect(selector.find('div.Colour').exists()).toBe(true);
	});

	it('renders a capacity selector', () => {
		expect(selector.find('div.Capacity').exists()).toBe(true);
	});

	it('renders two capacity buttons', () => {
		expect(selector.find('button.capacitybutton').length).toEqual(2);
	});

	it('renders three colour buttons', () => {
		expect(selector.find('button.gold').length).toEqual(1);
		expect(selector.find('button.silver').length).toEqual(1);
		expect(selector.find('button.grey').length).toEqual(1);
	});

	it('clicking the colour buttons changes phonetype in Page state', () => {
		const silverbutton = page.find('button.silver');
		const greybutton = page.find('button.grey');
		silverbutton.simulate('click');
		expect(page.state().phonetype.colourName).toEqual('Silver');
		greybutton.simulate('click');
		expect(page.state().phonetype.colourName).toEqual('Space Grey');
	});

	it('clicking the capacity buttons changes phonetype in Page state', () => {
		const capacitybuttons = page.find('button.capacitybutton');
		capacitybuttons.at(0).simulate('click');
		expect(page.state().phonetype.memory).toEqual('64GB');
		capacitybuttons.at(1).simulate('click');
		expect(page.state().phonetype.memory).toEqual('256GB');
	});

});
