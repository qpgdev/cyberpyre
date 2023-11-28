import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import stylings / images
import './App.css';
import darkpackLogo from '../src/assets/darkpack_logo2.png';

// Import sidebar tabs and logo
import CyberpyreLogo from './components/CyberpyreLogo';
import AboutCyberpyreTab from './components/sidebar-tabs/AboutCyberpyreTab';
import GameMechanicsTab from './components/sidebar-tabs/GameMechanicsTab';
import CyberwareTab from './components/sidebar-tabs/CyberwareTab';
import StorytellerTab from './components/sidebar-tabs/StorytellerTab';
// import AboutTab from './components/sidebar-tabs/AboutTab';

// Import pages
import MainPage from './components/main-page/MainPage';
import SettingTheScenePage from './components/about-cyberpyre-pages/SettingTheScenePage';

// Import  about-cyberpyre pages
import WhatIsCyberpyrePage from './components/about-cyberpyre-pages/WhatIsCyberpyrePage';
import KindredInTheFuture from './components/about-cyberpyre-pages/KindredInTheFuture';
import SupportTheProject from './components/about-cyberpyre-pages/SupportTheProject';

// Import game-mechanics pages
import CyberwareDensityPage from './components/game-mechanics-pages/CyberwareDensityPage';
import GlitchDicePage from './components/game-mechanics-pages/GlitchDicePage';
import CompulsionsPage from './components/game-mechanics-pages/CompulsionsPage';
import InstallingRemovingPage from './components/game-mechanics-pages/InstallingRemovingPage';
import CyberwareDamagePage from './components/game-mechanics-pages/CyberwareDamagePage';

// Import cyberware-and-augmentations pages
import WhatAreAugmentations from './components/cyberware-and-augmentations/WhatAreAugmentationsPage';

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
          <AboutCyberpyreTab></AboutCyberpyreTab>
          <GameMechanicsTab></GameMechanicsTab>
          <CyberwareTab></CyberwareTab>
          <StorytellerTab></StorytellerTab>
        </div>
        <div className='dashboard'>
            <Routes>
              <Route path="/" element={<SettingTheScenePage/>} />
              <Route path="/main" element={<MainPage/>} />
              <Route path="/about-cyberpyre/what-is-cyberpyre" element={<WhatIsCyberpyrePage/>} />
              <Route path="/about-cyberpyre/support-the-project" element={<SupportTheProject></SupportTheProject>} />
              <Route path="/about-cyberpyre/kindred-in-the-future" element={<KindredInTheFuture/>} />
              <Route path="/game-mechanics" element={<MainPage/>} />
              <Route path="/cyberware-and-augmentations" element={<MainPage/>} />
              <Route path="/storyteller-resources/loresheets" element={<MainPage/>} />
              <Route path="/game-mechanics/cyberware-density" element={<CyberwareDensityPage/>} />
              <Route path="/game-mechanics/glitch-dice" element={<GlitchDicePage/>} />
              <Route path="/game-mechanics/compulsions" element={<CompulsionsPage/>} />
              <Route path="/game-mechanics/installing-removing" element={<InstallingRemovingPage/>} />
              <Route path="/game-mechanics/cyberware-damage" element={<CyberwareDamagePage/>} />
              <Route path="/cyberware-and-augmentations/what-are-augmentations" element={<WhatAreAugmentations/>}/>
            </Routes>
        </div>
      </div>
    </div> 
  </Router>
  )
}

export default App