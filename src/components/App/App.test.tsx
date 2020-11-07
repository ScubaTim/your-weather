import React from 'react';
import App from './App';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />)

export const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
    return wrapper.find(`[data-test='${val}']`);
}

test('renders app component', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
})