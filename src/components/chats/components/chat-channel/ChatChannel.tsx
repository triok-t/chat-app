import ChannelItem from "./ChannelItem";
import "./ChatChannel.scss";

interface IProps {
    isVisible: boolean;
    setIsVisible: any;
    userId?: string;
    className?: string;
    onChange?: any
}

export interface Channels {
    channelId: string
    channelName: string
}

const ChatChannel = (props: IProps) => {
    const { isVisible, className, userId, setIsVisible, onChange } = props;

    // console.log('userId: ', userId)
    // console.log('Type of userId: ', typeof (userId))

    const channelItems: Channels[] = [
        { channelId: '1', channelName: 'General Channel' },
        { channelId: '2', channelName: 'Technology Channel' },
        { channelId: '3', channelName: 'LGTM Channel' },
    ]

    return (
        <div className={`container-channel-list ${className}`}>
            {userId ?
                <>
                    {channelItems.map((channelItem) => {
                        return (
                            <ChannelItem
                                channelItem={channelItem}
                                userId={userId}
                                className={className}
                                isVisible={!isVisible}
                                setIsVisible={setIsVisible}
                                onChange={onChange}
                            />
                        )
                    })}
                </>
                :
                <></>
            }
            {/* {conversations
                .sort((a, b) => {
                    return (
                        b.channelState.lastMessage?.dateCreated.getTime() -
                        a.channelState.lastMessage?.dateCreated.getTime()
                    );
                })
                .filter((conv) => {
                    return !!conv.lastMessage || conv.attributes?.createdBy === self;
                })
                .filter((conv) => {
                    return conv.friendlyName
                        .replace(self, "")
                        .replace("-", "")
                        .match(search);
                })
                .map((item: any, index) => {
                    return (
                        // <ChatItem
                        //   isVisible={!isVisible}
                        //   conversation={item}
                        //   setIsVisible={setIsVisible}
                        // />
                        <>
                            Chat Item
                        </>
                    );
                })} */}
        </div>
    );
};

export default ChatChannel;
