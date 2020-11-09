import React from 'react';
import NavToolbar from './NavToolbar';
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils';


const setup = () => shallow(<NavToolbar />)



test('renders app component', () => {
    const wrapper = setup();
    const navComponent = findByTestAttr(wrapper, "component-nav");
    expect(navComponent.length).toBe(1);
})