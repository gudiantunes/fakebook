import logo from './logo.svg';
import './scss/app.scss';
import Client from './components/client/client.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

function App() {
  const [usersData, setUsersData] = useState({});
  const [messageData, setMessageData] = useState({});
  const [needUpdate, setNeedUpdate] = useState(true);

  useEffect(() => {
    const fetchAppData = async () => {
      const userResponse = await axios.get(`${BASE_URL}/users`);
      const messageResponse = await axios.get(`${BASE_URL}/messages`);

      setUsersData(userResponse.data);
      setMessageData(messageResponse.data);

      //setNeedUpdate(false);
    }

    fetchAppData();
    console.log('data fetched');

  }, [needUpdate]);

  return (
    <div className="App">
      <button onClick={()=>{setNeedUpdate(!needUpdate)}}>CLick</button>
      <Client name='Client1'/>
      {/* <Client name='Client 2'/> */}
    </div>
  );
}

export default App;
