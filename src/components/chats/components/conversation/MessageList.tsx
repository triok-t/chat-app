import { ChatMessage } from "../chat-element";
import { ChatForm } from "./ChatForm";
import "./MessageList.scss";

interface IProps {
  className?: string;
}

const MessageList = (props: IProps) => {
  const { className } = props;

  return (
    <div className={`container-message-list ${className}`}>
      <>
        <div className="live-chat-max-height">
          <ChatMessage />
        </div>
        <ChatForm />
      </>
    </div>
  );
};

export default MessageList;
