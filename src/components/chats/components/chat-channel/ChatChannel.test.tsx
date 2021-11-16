
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../../test/testUtils';
import ChatChannel from './ChatChannel';

const defaultProps = {
    userId: null,
    onChange: null
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<ChatChannel {...setupProps} />)
};

describe('<ChatChannel /> renders without error', () => {

    it('ChatChannel renders nothing without userId', () => {
        const wrapper = setup({ userId: null });
        const channelContainer = findByTestAttr(wrapper, 'channel-container');
        expect(channelContainer.text()).toBe('');
    });

    it('ChatChannel renders correctly with userId', () => {
        const wrapper = setup({ userId: 'Sam' });
        const channelContainer = findByTestAttr(wrapper, 'channel-container');
        expect(channelContainer.length).toBe(1);
    });

    it('ChannelItem should be 3 elements following channelItems[]', () => {
        const wrapper = setup({ userId: 'Sam' });
        const channelItem = findByTestAttr(wrapper, 'channel-item');
        expect(channelItem.length).toBe(3);
    });

})

describe('onChange test case', () => {
    it('OnChange should have been called after select ChannelItem', () => {
        const onChangeMock = jest.fn();
        const event = {
            preventDefault() { },
            value: { channelId: '1', channelName: 'General Channel' }
        };
        const wrapper = setup({ userId: 'Sam', onChange: onChangeMock })
        const channelItem = findByTestAttr(wrapper, 'channel-item');
        channelItem.first().simulate('change', event);
        expect(onChangeMock).toHaveBeenCalledTimes(1)
    });
})