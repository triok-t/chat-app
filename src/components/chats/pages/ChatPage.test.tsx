
import { shallow } from 'enzyme';
import { ChatPage } from './ChatPage';

it('should render correct title', () => {
    const wrapper = shallow(<ChatPage />);
    expect(wrapper.find({ className: "title-chat" }).text()).toEqual('1 day chat App')
});

it('should render correct sub-title', () => {
    const wrapper = shallow(<ChatPage />);
    expect(wrapper.find({ className: "sub-title-chat" }).text()).toEqual('All messages will be deleted at every 00:00 UTC')
});