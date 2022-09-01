import './scss/app.scss';
import Client from './components/client/client.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const testUsers = {
    "user@mail.com": {
      "name": "User Name",
      "password": "password",
      "friends": [[], []]
  },
};
const testMess = {
    "12345678": {
      "from": "mail@mail.com",
      "to": "mail2@mail.com",
      "time": "now",
      "body": "This ia a message"
  }
}

function App() {
  const [usersData, setUsersData] = useState({});
  const [messageData, setMessageData] = useState({});
  const [needUpdate, setNeedUpdate] = useState(true);

  useEffect(() => {
    const fetchAppData = async () => {
      try{
        const userResponse = await axios.get(`${BASE_URL}/users`);
        const messageResponse = await axios.get(`${BASE_URL}/messages`);

        setUsersData(userResponse.data);
        setMessageData(messageResponse.data);

        //setNeedUpdate(false);
      } catch (err){
        if (['ERR_NETWORK', 'ERR_BAD_REQUEST'].includes(err.code)) {
          setUsersData(testUsers);
          setMessageData(testMess);
        }
      }
    }

    fetchAppData();

  }, [needUpdate]);

  return (
    <div className="App">
      {/* <button onClick={()=>{setNeedUpdate(!needUpdate)}}>CLick</button> */}
      <Client name='Client1' apiData={{usersData, messageData}}/>
      {/* <Client name='Client 2'/> */}
    </div>
  );
}

export default App;
