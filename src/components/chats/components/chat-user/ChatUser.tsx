import "./ChatUser.scss";
import Select from 'react-select'

interface IProps {
    onChange: any
}

const ChatUser = ({ onChange }: IProps) => {

    const userOptions = [
        { value: 'Sam', label: 'Sam' },
        { value: 'Russell', label: 'Russell' },
        { value: 'Joyse', label: 'Joyse' }
    ]

    return (
        <div className='container-box-user-selection' >
            <Select
                data-test='react-select'
                className="react-select"
                options={userOptions}
                placeholder={'Choose your user'}
                onChange={(e) => {
                    onChange(e.value)
                }}
            />
        </div>
    );
};

export default ChatUser;
