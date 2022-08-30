import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './listed-friend.scss';

const ListedFriend = (props) => {
    return ( 
        <button className={`${props.mode} ${props.online}`}>
            <FontAwesomeIcon icon={faUser} className='icon'/>
            <p>Friend Name</p>
        </button>
     );
}
 
export default ListedFriend;