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
	it('should render title component', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Tools />
			</Provider>
		);
		expect(wrapper.find('h1').exists()).toBe(true);
	});
});
