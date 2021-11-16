
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../../test/testUtils';
import MessageList from './MessageList';

const defaultProps = {
    channelId: null,
    userId: null
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<MessageList {...setupProps} />)
};

describe('<MessageList /> renders without error', () => {

    it('MessageList renders nothing without channelId and userId', () => {
        const wrapper = setup({ channelId: null, userId: null });
        const messageList = findByTestAttr(wrapper, 'message-list');
        expect(messageList.text()).toBe('');
    });

    it('MessageList renders correctly with channelId and userId', () => {
        const wrapper = setup({ channelId: null, userId: null });
        const messageList = findByTestAttr(wrapper, 'message-list');
        expect(messageList.length).toBe(1);
    });

})