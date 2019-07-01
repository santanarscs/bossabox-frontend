import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

const mockStore = createStore();

const INITIAL_STATE = {
	tools: {
		data: [
			{
				id: 1,
				title: 'Notion',
				link: 'https://notion.so',
				description:
					'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
				tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar']
			}
		],
		toolModalOpen: false
	}
};

const store = mockStore(INITIAL_STATE);

import Tools from '../../components/Tools';

describe('Tools Component', () => {
	it('should render title', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Tools />
			</Provider>
		);
		expect(wrapper.find('h1').exists()).toBe(true);
	});
	it('should render subtitle', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Tools />
			</Provider>
		);
		expect(wrapper.find('h2').exists()).toBe(true);
	});
	it('should render input search and input checkbox tag', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Tools />
			</Provider>
		);
		expect(wrapper.find('input[name="term"]').exists()).toBe(true);
		expect(wrapper.find('input[type="checkbox"][name="tagsOnly"]').exists()).toBe(true);
	});
	it('should render button add tools', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Tools />
			</Provider>
		);
		console.log(wrapper.find('h1'));
		// expect(wrapper.find('button[type="button"]').contains('Add')).toBe(true);
	});
	xit('should render list tools', () => {});
});
