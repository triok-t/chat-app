import { useState } from "react";
import ChatChannel from "../components/chat-channel/ChatChannel";
import { ChatTitle } from "../components/chat-title/ChatTitle";
import ChatUser from "../components/chat-user/ChatUser";
import MessageList from "../components/conversation/MessageList";
import "./ChatPage.scss";

export function ChatPage() {

    const [isVisible, setIsVisible] = useState<boolean>(true);

    const [userId, setUserId] = useState<string>();

    const [chatTitle, setChatTitle] = useState<string>();

    const detectDevice = () => {
        if (window.innerWidth < 767) return isVisible ? "flex" : "flex-none";
        else return "flex";
    };

    const displayChat = () => {
        if (window.innerWidth < 767) return !isVisible ? "flex" : "flex-none";
        else return "flex"
    };

    const handleOnUserSelectionChange = (e: any) => {
        setUserId(String(e.value))
    }

    const handleOnChannelSelect = (e: any) => {
        setChatTitle(String(e))
    }

    return (
        <div className="container-main-chat">
            <div className="title-chat">1 day chat App</div>
            <div className="sub-title-chat">All messages will be deleted at every 00:00 UTC</div>
            <div className="container-chat-list-conversation">
                <div className="box-search-namechat">
                    <ChatUser
                        className={detectDevice()}
                        isVisible={!isVisible}
                        onChange={handleOnUserSelectionChange}
                    />
                    <ChatTitle
                        className={displayChat()}
                        chatTitle={chatTitle}
                    />
                </div>
                <div className="box-listchat-conversation">
                    <ChatChannel
                        isVisible={!isVisible}
                        setIsVisible={setIsVisible}
                        userId={userId}
                        className={detectDevice()}
                        onChange={handleOnChannelSelect}
                    />
                    <MessageList className={displayChat()} />
                </div>
            </div>
        </div>
    );
}
