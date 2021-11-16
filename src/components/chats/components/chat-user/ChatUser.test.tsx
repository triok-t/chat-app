
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../../test/testUtils';
import ChatUser from './ChatUser';


const defaultProps = {
    className: null,
    isVisible: null,
    onChange: null,
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<ChatUser {...setupProps} />)
};

describe('<ChatUser />', () => {

    let wrapper: any
    beforeEach(() => {
        wrapper = setup();
    });

    it('renders react select without error', () => {
        const reactSelect = findByTestAttr(wrapper, 'react-select');
        expect(reactSelect.length).toBe(1);
    });

    it('should have correct placeholder of user select options', () => {
        const placeholder = wrapper.find({ className: "react-select" }).props().placeholder
        expect(placeholder).toBe('Choose your user')
    });

    it('should have correct user select options', () => {
        const selectOptions = wrapper.find({ className: "react-select" }).props().options
        expect(selectOptions[0].value).toBe('Sam')
        expect(selectOptions[1].value).toBe('Russell')
        expect(selectOptions[2].value).toBe('Joyse')
    });

})

describe('onChange test case', () => {
    it('react-select should be return correctly after selected', () => {
        const onChangeMock = jest.fn();
        const event = {
            preventDefault() { },
            value: 'Sam'
        };
        const wrapper = setup({ onChange: onChangeMock })
        const reactSelect = findByTestAttr(wrapper, 'react-select');
        reactSelect.simulate('change', event);
        expect(onChangeMock).toBeCalledWith('Sam');
    });
})