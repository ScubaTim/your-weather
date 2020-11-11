import Enzyme, { ShallowWrapper } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import enableHooks from 'jest-react-hooks-shallow';


enableHooks(jest);

Enzyme.configure({ adapter: new EnzymeAdapter() });


export const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
    return wrapper.find(`[data-test='${val}']`);
}