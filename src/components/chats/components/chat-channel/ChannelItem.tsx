import { Channels } from "./ChatChannel";

import "./ChannelItem.scss";

interface IProps {
    userId: string;
    className: string;
    channelItem: Channels;
    isVisible: boolean;
    setIsVisible: any;
    onChange?: any
}

const ChannelItem = (props: IProps) => {

    const { channelItem, userId, className, isVisible, setIsVisible, onChange } = props

    const onSelectChannel = () => {
        console.log('channelItem: ', channelItem.channelId)
        console.log('userId: ', userId)
        onChange(channelItem.channelName)
    }

    return (
        <div
            className={`container-chat-item ${isVisible ? "" : "border-r"
                } ${className}`}
            onClick={() => onSelectChannel()}
        >
            <div className="container-name-unread-message">
                <div className="box-name-unread">
                    <div className="box-name">{channelItem.channelName}</div>
                </div>
            </div>
        </div>
    );
};

export default ChannelItem;
