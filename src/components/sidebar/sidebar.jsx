import './sidebar.scss';
import ListedFriend from '../listed-friend/listed-friend';

const Sidebar = (props) => {
    return ( 
        <div className="sidebar">
            <h1>Friends</h1>
            <form>
                <input placeholder='Add friend (email)'/>
                <button>Add</button>
            </form>
            <div className="friend-list">
                <ListedFriend mode='list'/>
                <ListedFriend mode='list'/>
                <ListedFriend mode='list'/>
                <ListedFriend mode='list' online='online'/>
            </div>
        </div>
     );
}
 
export default Sidebar;