import "./ChatTitle.scss";

interface IProps {
    chatTitle?: string;
}

export function ChatTitle({ chatTitle }: IProps) {

    return (
        <div className='container-chat-title'>
            <div data-test="title-namechat" className="title-namechat">
                {chatTitle ? chatTitle : ''}
            </div>
        </div>
    );
}
