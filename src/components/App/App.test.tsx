import React from 'react';
import App from './App';
import { shallow } from 'enzyme'


import { findByTestAttr } from '../../../test/testUtils';


const setup = () => shallow(<App />)



test('renders app component', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
})