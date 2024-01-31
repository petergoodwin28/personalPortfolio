import logo from './logo.svg';
import './App.css';

import HomeHeader from './components/HomeHeader.js';
import HomeBody from './components/HomeBody.js';
import HomeFooter from './components/HomeFooter.js';

function App() {
  return (
    <div className="App">
      <HomeHeader/>
      <HomeBody/>
      <HomeFooter/>
      

    </div>
  )
}

export default App;
