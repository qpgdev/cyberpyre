import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import MainPage from './components/main-page/MainPage';
import SettingTheScenePage from './components/playing-cyberpyre-pages/SettingTheScenePage';

// Import sidebar tabs
import PlayingCyberpyreTab from './components/sidebar-tabs/PlayingCyberpyreTab';
import GameMechanicsTab from './components/sidebar-tabs/GameMechanicsTab';
import CyberwareTab from './components/sidebar-tabs/CyberwareTab';
import StorytellerTab from './components/sidebar-tabs/StorytellerTab';

function App() {
  return (
    <Router>
    <div className = 'app-container'>
      <nav className='navbar'>
        <p>
          cyberpyre docs
        </p>
      </nav>
      <div className='container'>
        <div className='sidebar'>
          <p className='logo'> 
            cyberpyre
          </p>
          <PlayingCyberpyreTab></PlayingCyberpyreTab>
          <GameMechanicsTab></GameMechanicsTab>
          <CyberwareTab></CyberwareTab>
          <StorytellerTab></StorytellerTab>
        </div>
        <div className='dashboard'>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/playing-cyberpyre/setting-the-scene" element={<SettingTheScenePage/>} />
              <Route path="/main" element={<MainPage/>} />
              <Route path="/game-mechanics" element={<MainPage/>} />
              <Route path="/cyberware-and-augmentations" element={<MainPage/>} />
              <Route path="/storyteller-resources/loresheets" element={<MainPage/>} />
            </Routes>
        </div>
      </div>
    </div> 
  </Router>
  )
}

export default App