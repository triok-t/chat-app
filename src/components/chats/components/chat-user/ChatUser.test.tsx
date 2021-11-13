
import { shallow } from 'enzyme';
import ChatUser from './ChatUser';

const wrapper = shallow(<ChatUser />);

describe('<ChatUser />', () => {

    it('should have correct user select options', () => {
        const selectOptions = wrapper.find({ className: "react-select" }).props().options
        expect(selectOptions[0].value).toEqual('Sam')
        expect(selectOptions[1].value).toEqual('Russell')
        expect(selectOptions[2].value).toEqual('Joyse')
    });

    it('should have correct placeholder of user select options', () => {
        const placeholder = wrapper.find({ className: "react-select" }).props().placeholder
        expect(placeholder).toEqual('Choose your user')
    });

    // it('should call onChange prop with selected value', () => {
    //     // const onChangeMock = jest.fn();
    //     // const userOptions = [
    //     //     { value: 'Sam', label: 'Sam' },
    //     //     { value: 'Russell', label: 'Russell' },
    //     //     { value: 'Joyse', label: 'Joyse' }
    //     // ]
    //     const select = wrapper.find('Select').props()
    //     console.log(select)
    // });

})