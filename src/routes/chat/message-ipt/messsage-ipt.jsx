import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import './message-ipt.scss';

// TODO: change message height as text grow

const MessageInput = (props) => {
    return ( 
        <form className="m-input">
            <textarea className="m-input__message" />
            <button className="m-input__send">
                <FontAwesomeIcon icon={faPaperPlane} className='m-input__send__icon' />
            </button>
        </form> 
    );
}
 
export default MessageInput;