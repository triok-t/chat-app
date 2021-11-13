import "./ChatTitle.scss";

interface IProps {
    className?: string;
    chatTitle?: string;
}

export function ChatTitle(props: IProps) {

    const { className, chatTitle } = props

    return (
        <div className={`container-chat-title ${className} target`}>
            <div className="title-namechat">

                {chatTitle ? chatTitle : ''}
            </div>
        </div>
    );
}
