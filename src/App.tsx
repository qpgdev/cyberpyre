import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import sidebar tabs
import PlayingCyberpyreTab from './components/sidebar-tabs/PlayingCyberpyreTab';
import GameMechanicsTab from './components/sidebar-tabs/GameMechanicsTab';
import CyberwareTab from './components/sidebar-tabs/CyberwareTab';
import StorytellerTab from './components/sidebar-tabs/StorytellerTab';

// Import pages
import MainPage from './components/main-page/MainPage';

// Import  playing-cyberpyre pages
import SettingTheScenePage from './components/playing-cyberpyre-pages/SettingTheScenePage';
import WhatIsCyberpyrePage from './components/playing-cyberpyre-pages/WhatIsCyberpyrePage';
import KindredInTheFuture from './components/playing-cyberpyre-pages/KindredInTheFuture';

// Import game-mechanics pages
import CyberwareDensityPage from './components/game-mechanics-pages/CyberwareDensityPage';

// Import cyberware-and-augmentations pages
import WhatAreAugmentations from './components/cyberware-and-augmentations/WhatAreAugmentationsPage';

// I WANT SETTING THE SCENE TO HAVE A SCROLLABLE DIV

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
              <Route path="/playing-cyberpyre/what-is-cyberpyre" element={<WhatIsCyberpyrePage/>} />
              <Route path="/playing-cyberpyre/setting-the-scene" element={<SettingTheScenePage/>} />
              <Route path="/playing-cyberpyre/kindred-in-the-future" element={<KindredInTheFuture/>} />
              <Route path="/main" element={<MainPage/>} />
              <Route path="/game-mechanics" element={<MainPage/>} />
              <Route path="/cyberware-and-augmentations" element={<MainPage/>} />
              <Route path="/storyteller-resources/loresheets" element={<MainPage/>} />
              <Route path="/game-mechanics/cyberware-density" element={<CyberwareDensityPage/>} />
              <Route path="cyberware-and-augmentations/what-are-augmentations" element={<WhatAreAugmentations/>}/>
            </Routes>
        </div>
      </div>
    </div> 
  </Router>
  )
}

export default App