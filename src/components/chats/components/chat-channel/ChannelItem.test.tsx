
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../../test/testUtils';
import ChannelItem from './ChannelItem';

const defaultProps = {
    channelItem: null,
    onChange: null
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<ChannelItem {...setupProps} />)
};

describe('<ChannelItem /> renders without error', () => {

    it('ChannelItem renders nothing without channelItem prop', () => {
        const wrapper = setup({ channelItem: null });
        const channelName = findByTestAttr(wrapper, 'channel-name');
        expect(channelName.text()).toBe('');
    });

    it('ChannelItem renders correctly with channelItem prop', () => {
        const wrapper = setup({ channelItem: { channelId: '1', channelName: 'General Channel' } });
        const channelName = findByTestAttr(wrapper, 'channel-name');
        expect(channelName.text()).toBe('General Channel');
    });

})

describe('onChange test case', () => {
    it('OnChange should have been called by OnClick event', () => {
        const onChangeMock = jest.fn();
        const event = {
            preventDefault() { },
            value: { channelId: undefined, channelName: undefined }
        };
        const wrapper = setup({ onChange: onChangeMock })
        const channelItem = findByTestAttr(wrapper, 'channel-item');
        channelItem.simulate('click', event);
        expect(onChangeMock).toBeCalledWith({ channelId: undefined, channelName: undefined });
    });
})