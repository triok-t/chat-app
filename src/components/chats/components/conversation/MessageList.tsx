import { ChatMessage } from "../chat-element";
import "./MessageList.scss";

interface IProps {
  channelId: string
  userId: string
}

const MessageList = ({ channelId, userId }: IProps) => {

  return (
    <div data-test="message-list" className='container-message-list'>
      {!!channelId && !!userId &&
        <>
          <div className="live-chat-max-height">
            <ChatMessage channelId={channelId} userId={userId} />
          </div>
        </>
      }
    </div>
  );
};

export default MessageList;
