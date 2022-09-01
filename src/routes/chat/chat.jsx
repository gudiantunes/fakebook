import Chat from "./chat/chat.jsx";
import Sidebar from "../../components/sidebar/sidebar";
import MessageInput from "./message-ipt/messsage-ipt.jsx";
import './chat.scss';

import useChatLogic from "./chat-logic.jsx";
import {Navigate} from 'react-router-dom';

const ChatPage = (props) => {
    const {isLogged} = useChatLogic();

    return ( 
        <div className="chat-page">
            {isLogged && <Navigate replace to="/login"/>}
            <Chat/>
            <Sidebar/>
            <MessageInput/>
        </div>
     );
}
 
export default ChatPage;