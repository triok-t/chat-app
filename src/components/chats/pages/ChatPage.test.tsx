
import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../../../../test/testUtils';
import { ChatPage } from './ChatPage';


const setup = () => {
    return shallow(<ChatPage />)
};

describe('<ChatPage /> render', () => {

    let wrapper: any
    beforeEach(() => {
        wrapper = setup();
    });

    it('should render correct title', () => {
        expect(wrapper.find({ className: "title-chat" }).text()).toEqual('1 day chat App')
    });

    it('should render correct sub-title', () => {
        expect(wrapper.find({ className: "sub-title-chat" }).text()).toEqual('All messages will be deleted at every 00:00 UTC')
    });

})

describe('useState test cases', () => {

    const setState = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useStateMock: any = (initState: any) => [initState, setState];

    let wrapper: any;
    beforeEach(() => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        wrapper = setup();
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('setUserId should have been called after select user', () => {
        const event = {
            preventDefault() { },
            value: 'Sam'
        };
        const chatUser = findByTestAttr(wrapper, 'chat-user');
        chatUser.simulate('change', event);
        expect(setState).toHaveBeenCalledTimes(1);
    });

    it('setChannelId and setChatTitle should have been called after select channel', () => {
        const event = {
            preventDefault() { },
            value: { channelId: '1', channelName: 'General Channel' }
        };
        const chatUser = findByTestAttr(wrapper, 'chat-channel');
        chatUser.simulate('change', event);
        expect(setState).toHaveBeenCalledTimes(2);
    });

})
