import './client.scss';
import MessageInput from '../../routes/chat/message-ipt/messsage-ipt';
import Sidebar from '../sidebar/sidebar';
import Chat from '../chat/chat';
import ChatPage from '../../routes/chat/chat'
const Client = (props) => {
    return ( 
        <dic className='client'>
            <ChatPage/>
        </dic>
     );
}
 
export default Client;