import logo from './logo.svg';
import './scss/app.scss';
import Client from './components/client/client.jsx';

function App() {
  return (
    <div className="App">
      <Client name='Client 1'/>
      {/* <Client name='Client 2'/> */}
    </div>
  );
}

export default App;
