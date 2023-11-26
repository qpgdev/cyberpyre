import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import darkpackLogo from '../src/assets/darkpack_logo2.png';

// Import sidebar tabs and logo
import CyberpyreLogo from './components/CyberpyreLogo';
import PlayingCyberpyreTab from './components/sidebar-tabs/PlayingCyberpyreTab';
import GameMechanicsTab from './components/sidebar-tabs/GameMechanicsTab';
import CyberwareTab from './components/sidebar-tabs/CyberwareTab';
import StorytellerTab from './components/sidebar-tabs/StorytellerTab';
import AboutTab from './components/sidebar-tabs/AboutTab';

// Import pages
import MainPage from './components/main-page/MainPage';

// Import  playing-cyberpyre pages
import SettingTheScenePage from './components/playing-cyberpyre-pages/SettingTheScenePage';
import WhatIsCyberpyrePage from './components/playing-cyberpyre-pages/WhatIsCyberpyrePage';
import KindredInTheFuture from './components/playing-cyberpyre-pages/KindredInTheFuture';

// Import game-mechanics pages
import CyberwareDensityPage from './components/game-mechanics-pages/CyberwareDensityPage';
import GlitchDicePage from './components/game-mechanics-pages/GlitchDicePage';
import CompulsionsPage from './components/game-mechanics-pages/CompulsionsPage';
import InstallingRemovingPage from './components/game-mechanics-pages/InstallingRemovingPage';
import CyberwareDamagePage from './components/game-mechanics-pages/CyberwareDamagePage';

// Import cyberware-and-augmentations pages
import WhatAreAugmentations from './components/cyberware-and-augmentations/WhatAreAugmentationsPage';

// Import about pages
import SupportTheProject from './components/about-pages/SupportTheProject';

function App() {

  return (
    <Router>
    <div className = 'app-container'>
      <nav className='navbar'>
        <a href="https://www.paradoxinteractive.com/games/world-of-darkness/community/dark-pack-agreement" target="_blank" rel="noopener noreferrer">
          <img style={{maxWidth: '2.2vw'}}src={darkpackLogo}></img>
        </a>
      </nav>
      <div className='container'>
        <div className='sidebar'>
          <CyberpyreLogo></CyberpyreLogo>
          <PlayingCyberpyreTab></PlayingCyberpyreTab>
          <GameMechanicsTab></GameMechanicsTab>
          <CyberwareTab></CyberwareTab>
          <StorytellerTab></StorytellerTab>
          <AboutTab></AboutTab>
        </div>
        <div className='dashboard'>
            <Routes>
              <Route path="/" element={<WhatIsCyberpyrePage/>} />
              <Route path="/playing-cyberpyre/what-is-cyberpyre" element={<WhatIsCyberpyrePage/>} />
              <Route path="/playing-cyberpyre/setting-the-scene" element={<SettingTheScenePage/>} />
              <Route path="/playing-cyberpyre/kindred-in-the-future" element={<KindredInTheFuture/>} />
              <Route path="/main" element={<MainPage/>} />
              <Route path="/game-mechanics" element={<MainPage/>} />
              <Route path="/cyberware-and-augmentations" element={<MainPage/>} />
              <Route path="/storyteller-resources/loresheets" element={<MainPage/>} />
              <Route path="/game-mechanics/cyberware-density" element={<CyberwareDensityPage/>} />
              <Route path="/game-mechanics/glitch-dice" element={<GlitchDicePage/>} />
              <Route path="/game-mechanics/compulsions" element={<CompulsionsPage/>} />
              <Route path="/game-mechanics/installing-removing" element={<InstallingRemovingPage/>} />
              <Route path="/game-mechanics/cyberware-damage" element={<CyberwareDamagePage/>} />
              <Route path="/cyberware-and-augmentations/what-are-augmentations" element={<WhatAreAugmentations/>}/>
              <Route path="/about/support-the-project" element={<SupportTheProject></SupportTheProject>} />
            </Routes>
        </div>
      </div>
    </div> 
  </Router>
  )
}

export default App