import './chat.scss';

const Chat = (props) => {
    return ( 
        <div className="chat">
            <header>
                <h1>@</h1>
                <h2>User Name</h2>
                <div className="logout"> logout </div>
            </header>
        </div>
     );
}
 
export default Chat;