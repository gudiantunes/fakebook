import Chat from "./chat/chat.jsx";
import Sidebar from "../../components/sidebar/sidebar";
import MessageInput from "./message-ipt/messsage-ipt.jsx";
import './chat.scss';

import useChatLogic from "./chat-logic.jsx";

const ChatPage = (props) => {
    const {isLogged} = useChatLogic(props);

    return ( 
        <div className="chat-page">
            <Chat/>
            <Sidebar/>
            <MessageInput/>
        </div>
     );
}
 
export default ChatPage;