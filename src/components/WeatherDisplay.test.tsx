import React from 'react';
import WeatherDisplay from './WeatherDisplay';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../App.test';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<WeatherDisplay />)

test('renders weatherDisplay component', () => {
    const wrapper = setup();
    const weatherDisplayComponent = findByTestAttr(wrapper, "component-weatherDisplay");
    expect(weatherDisplayComponent.length).toBe(1);
})
