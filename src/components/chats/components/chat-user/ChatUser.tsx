import "./ChatUser.scss";
import Select from 'react-select'

interface IProps {
    className?: string;
    isVisible?: boolean;
    onChange?: any
}

const ChatUser = (props: IProps) => {

    const { className, isVisible, onChange } = props;

    const userOptions = [
        { value: 'Sam', label: 'Sam' },
        { value: 'Russell', label: 'Russell' },
        { value: 'Joyse', label: 'Joyse' }
    ]

    return (
        <div className={`container-box-user-selection ${className} ${isVisible ? "" : "border-r"}`} >
            <Select
                className="react-select"
                options={userOptions}
                placeholder={'Choose your user'}
                onChange={onChange}
            />
        </div>
    );
};

export default ChatUser;
