import ChannelItem from "./ChannelItem";
import "./ChatChannel.scss";

interface IProps {
    userId: string;
    onChange: any
}

export interface Channels {
    channelId: string
    channelName: string
}

const ChatChannel = ({ userId, onChange }: IProps) => {

    const channelItems: Channels[] = [
        { channelId: '1', channelName: 'General Channel' },
        { channelId: '2', channelName: 'Technology Channel' },
        { channelId: '3', channelName: 'LGTM Channel' },
    ]

    return (
        <div data-test="channel-container" className='container-channel-list'>
            {userId ?
                <>
                    {channelItems.map((channelItem, idx) => {
                        return (
                            <ChannelItem
                                data-test="channel-item"
                                key={idx}
                                channelItem={channelItem}
                                onChange={onChange}
                            />
                        )
                    })}
                </>
                :
                <></>
            }
        </div>
    );
};

export default ChatChannel;
