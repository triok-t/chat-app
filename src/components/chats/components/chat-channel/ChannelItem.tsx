import { Channels } from "./ChatChannel";
import "./ChannelItem.scss";

interface IProps {
    channelItem: Channels;
    onChange: any
}

const ChannelItem = ({ channelItem, onChange }: IProps) => {

    const onSelectChannel = () => {
        onChange({ channelId: channelItem?.channelId, channelName: channelItem?.channelName })
    }

    return (
        <div
            data-test="channel-item"
            className='container-chat-item'
            onClick={onSelectChannel}
        >
            <div className="container-name-unread-message">
                <div className="box-name-unread">
                    <div data-test="channel-name" className="box-name">{channelItem?.channelName}</div>
                </div>
            </div>
        </div >
    );
};

export default ChannelItem;
