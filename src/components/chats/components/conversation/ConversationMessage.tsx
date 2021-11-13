import "./ConversationMessage.scss";

export function ConversationMessage() {
  // let { messages, myIdentity } = props;
  return (
    <div className="chat-message-list">
      {/* {messages && messages.items && messages.items.length > 0 ? (
        messages.items
          .slice(0)
          .reverse()
          .map((msg) => {
            let messageItemClassName = "message-row other-message";
            if (msg.author === myIdentity) {
              messageItemClassName = "message-row you-message";
            }
            return (
              <div className={messageItemClassName}>
                <div className="message-content">
                  <div className="message-text">{msg.body}</div>
                  <div className="message-time">
                    {msg.dateCreated.toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })
      ) : (
        <div
          style={{ position: "relative", marginLeft: "40%", marginTop: "30%" }}
        >
          Loading Message...
        </div>
      )} */}
    </div>
  );
}
