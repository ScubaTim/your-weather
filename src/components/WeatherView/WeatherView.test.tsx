import React from 'react';
import WeatherView from './WeatherView';
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils';


const setup = () => shallow(<WeatherView />)



test('renders app component', () => {
    const wrapper = setup();
    const weatherViewComponent = findByTestAttr(wrapper, "component-weather");
    expect(weatherViewComponent.length).toBe(1);
})