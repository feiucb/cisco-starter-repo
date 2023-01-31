import './App.css';
import './Banner.js';
import './Banner.css'
import Banner from './Banner.js';
import Exhibit from './Exhibit';
function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit data={[{ ID: 0, IP: "0.0.0.0", location: "Earth", info: "demo" }]} />
    </div>
  );
}

export default App;
