import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { POST_MESSAGE_MUTATION } from "../../../../GraphQL/Mutations";
import { useFetchLatestMessages, useFetchMoreMessages } from "../../ChatUseCase";
import { IoCheckmarkCircle, IoAlertCircle } from 'react-icons/io5';
import { TiArrowUpThick } from 'react-icons/ti';
import { IoIosSend } from 'react-icons/io';
import "./ChatMessage.scss";
import { formatAMPM } from "../../../../helpers/formatDate";
import React from "react";

interface IProps {
  channelId: string;
  userId: string;
}

interface MessageDetails {
  datetime: string;
  messageId?: string;
  text: string;
  userId: string;
  isNewMessage?: boolean;
  sendNewMessageError?: boolean;
}

const ChatMessage = ({ channelId, userId }: IProps) => {

  const { data: fetchData, loading: fetchIsLoading, error: fetchIsError, refetch: refetchData } = useFetchLatestMessages(channelId)

  const [newMessage, setNewMessage] = React.useState<string>();
  const [messageIdForFetchMore, setMessageIdForFetchMore] = React.useState<string>();
  const [fetchOldMessages, setFetchOldMessages] = React.useState<boolean>(false);
  const [showNoMoreMessagesText, setShowNoMoreMessagesText] = React.useState<boolean>(false);
  const [messageDetails, setMessageDetails] = React.useState<MessageDetails[]>([])

  const [postMessage] = useMutation(POST_MESSAGE_MUTATION);
  const {
    data: fetchMoreData,
    loading: fetchMoreIsLoading,
    refetch: refetchMoreData
  } = useFetchMoreMessages(channelId, messageIdForFetchMore, fetchOldMessages)

  useEffect(() => {
    refetchData()
  }, [channelId, userId]);

  useEffect(() => {
    refetchMoreData()
  }, [messageIdForFetchMore, fetchOldMessages]);

  useEffect(() => {
    if (fetchMoreData?.fetchMoreMessages) {
      sortAndUpdatedAllMessageDetails(fetchMoreData.fetchMoreMessages)
      if (fetchMoreData.fetchMoreMessages.length === 0) setShowNoMoreMessagesText(true)
    }
  }, [fetchMoreData]);

  useEffect(() => {
    if (fetchData) setMessageDetails(fetchData.fetchLatestMessages); setShowNoMoreMessagesText(false)
  }, [fetchData])

  const onMessageChanged = (event) => {
    event.preventDefault();
    setNewMessage(event.target.value);
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    await postMessage({ variables: { channelId: channelId, text: newMessage, userId: userId } })
      .then(() => {
        const sentMessagePayload: MessageDetails = {
          datetime: (new Date()).toISOString(),
          text: newMessage,
          userId: userId,
          isNewMessage: true,
          sendNewMessageError: false
        }
        sortAndUpdatedAllMessageDetails([sentMessagePayload])
      }).catch(() => {
        const notSentMessagePayload: MessageDetails = {
          datetime: (new Date()).toISOString(),
          text: newMessage,
          userId: userId,
          isNewMessage: true,
          sendNewMessageError: true
        }
        sortAndUpdatedAllMessageDetails([notSentMessagePayload])
      })
    setNewMessage("");
  };

  const sortAndUpdatedAllMessageDetails = (newMessageDetails: MessageDetails[]) => {
    let tempCurrentMessageDetails: MessageDetails[] = [...messageDetails, ...newMessageDetails]
    tempCurrentMessageDetails.sort(function (a: any, b: any) {
      return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
    });
    setMessageDetails(tempCurrentMessageDetails)
  }

  const handleFetchMoreMessages = () => {
    const lastIndexOfCurrentMessages = messageDetails.at(-1)
    setMessageIdForFetchMore(lastIndexOfCurrentMessages.messageId)
    setFetchOldMessages(true)
  }

  const messageConversation = () => {
    return messageDetails && messageDetails?.length > 0
      ? handleChat()
      : "";
  };

  const handleChat = () => {
    return messageDetails
      .map((msg, index) => {
        let directionRL = "item-start";
        let ownerMessage: string = "other-chat";
        if (msg.userId === userId) {
          ownerMessage = "my-chat";
          directionRL = "item-end";
        } else {
          ownerMessage = "other-chat";
          directionRL = "item-start";
        }
        return (
          <div key={index} className={`container-chat-message ${directionRL}`}>
            <div className="container-box-message">
              <div className={`box-message ${ownerMessage}`}>
                <div className="font-bold">{msg.userId}</div>
                <div className="flex-message mt-10 text-16">{msg.text}</div>
              </div>
              <div className="date-chat">
                {formatAMPM(new Date(msg.datetime))}
                {!!msg.isNewMessage && !!msg.sendNewMessageError &&
                  <div className="new-message-status">
                    <IoAlertCircle style={{ color: "red", fontSize: "1rem", marginRight: "2px" }} />
                    Error
                  </div>
                }
                {!!msg.isNewMessage && !msg.sendNewMessageError &&
                  <div className="new-message-status">
                    <IoCheckmarkCircle style={{ color: "green", fontSize: "1rem", marginRight: "2px" }} />
                    Sent
                  </div>
                }
              </div>

            </div>
          </div>
        );
      });
  };

  if (fetchIsLoading) return (<div className="first-fetch-loading-text">Loading...</div>)

  if (fetchIsError) return (<div className="first-fetch-loading-text">Error loading messages!</div>)

  return (
    <>
      <div className="header-chat-message-list">
        <Button
          disabled={messageDetails.length < 10 || !!showNoMoreMessagesText}
          style={{ width: "20%", backgroundColor: "#0dc5fd", borderColor: "#0dc5fd" }}
          onClick={handleFetchMoreMessages}
        >
          <div className="text-icon-button">
            Read More
            <TiArrowUpThick style={{ color: "white", fontSize: "1.5rem", marginLeft: "5px" }} />
          </div>
        </Button>

        {!!fetchMoreIsLoading && <div className="fetch-status-text">Loading...</div>}
        {!!showNoMoreMessagesText && <div className="fetch-status-text">No more messages available</div>}

      </div>
      <div className="container-chat-message-list">{messageConversation()}</div>
      <Form onSubmit={sendMessage}>
        <div className="container-chat-form">
          <input
            data-test='input-text'
            type="text"
            placeholder="Enter a message..."
            onChange={onMessageChanged}
            value={newMessage}
            className="box-input"
          />
          <Button disabled={!newMessage} type={"submit"} style={{ width: "20%", backgroundColor: "#0dc5fd", borderColor: "#0dc5fd" }} >
            <div className="text-icon-button">
              Send
              <IoIosSend style={{ color: "white", fontSize: "1.5rem", marginLeft: "5px" }} />
            </div>
          </Button>
        </div>
      </Form>
    </>
  );
};
export default ChatMessage;
