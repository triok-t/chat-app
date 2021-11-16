import React from "react";
import ChatChannel, { Channels } from "../components/chat-channel/ChatChannel";
import { ChatTitle } from "../components/chat-title/ChatTitle";
import ChatUser from "../components/chat-user/ChatUser";
import MessageList from "../components/conversation/MessageList";
import "./ChatPage.scss";

export function ChatPage() {

    const [userId, setUserId] = React.useState<string>();

    const [channelId, setChannelId] = React.useState<string>();

    const [chatTitle, setChatTitle] = React.useState<string>();

    const handleOnUserSelectionChange = (userId: string) => {
        setUserId(userId)
    }

    const handleOnChannelSelect = (channelItem: Channels) => {
        setChannelId(channelItem.channelId)
        setChatTitle(channelItem.channelName)
    }

    return (
        <div className="container-main-chat">
            <div className="title-chat">1 day chat App</div>
            <div className="sub-title-chat">All messages will be deleted at every 00:00 UTC</div>
            <div className="container-chat-list-conversation">
                <div className="box-search-namechat">
                    <ChatUser
                        data-test="chat-user"
                        onChange={handleOnUserSelectionChange}
                    />
                    <ChatTitle
                        chatTitle={chatTitle}
                    />
                </div>
                <div className="box-listchat-conversation">
                    <ChatChannel
                        data-test="chat-channel"
                        userId={userId}
                        onChange={handleOnChannelSelect}
                    />
                    <MessageList userId={userId} channelId={channelId} />
                </div>
            </div>
        </div>
    );
}
