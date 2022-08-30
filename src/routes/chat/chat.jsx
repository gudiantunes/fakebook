import Chat from "../../components/chat/chat";
import Sidebar from "../../components/sidebar/sidebar";
import MessageInput from "./message-ipt/messsage-ipt";
import './chat.scss';

const ChatPage = (props) => {
    return ( 
        <div className="chat-page">
            <Chat/>
            <Sidebar/>
            <MessageInput/>
        </div>
     );
}
 
export default ChatPage;