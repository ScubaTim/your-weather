import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils';

const setup = () => shallow(<Footer />)

test('renders app component', () => {
    const wrapper = setup();
    const footerComponent = findByTestAttr(wrapper, "component-footer");
    expect(footerComponent.length).toBe(1);
})