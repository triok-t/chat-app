import { Form, Button } from "react-bootstrap";
import "./ChatForm.scss";

export function ChatForm() {

  const sendMessage = () => {
    console.log('Send Message!')
  }

  return (
    <Form onSubmit={sendMessage}>
      <div className="container-chat-form">
        <input
          type="text"
          placeholder="Enter a message..."
          // onChange={onMessageChanged}
          // value={newMessage}
          className="box-input"
        />
        <Button type={"submit"} style={{ width: "20%" }} >
          ส่ง
        </Button>
      </div>
    </Form>
  );
}
