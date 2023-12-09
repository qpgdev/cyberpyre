import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import stylings / images
import "./App.css";
import darkpackLogo from "../src/assets/darkpack_logo2.png";

// Import sidebar tabs and logo
import CyberpyreLogo from "./components/CyberpyreLogo";
import GameMechanicsTab from "./components/sidebar-tabs/GameMechanicsTab";
import CyberwareTab from "./components/sidebar-tabs/CyberwareTab";
import StorytellerTab from "./components/sidebar-tabs/StorytellerTab";
// import AboutTab from './components/sidebar-tabs/AboutTab';

// Import main page
import MainPage from "./components/main-page/MainPage";

// Import game-mechanics pages
import CyberwareDensityPage from "./components/game-mechanics-pages/CyberwareDensityPage";
import GlitchDicePage from "./components/game-mechanics-pages/GlitchDicePage";
import CompulsionsPage from "./components/game-mechanics-pages/CompulsionsPage";
import InstallingRemovingPage from "./components/game-mechanics-pages/InstallingRemovingPage";
import CyberwareDamagePage from "./components/game-mechanics-pages/CyberwareDamagePage";

// Import cyberware-and-augmentations pages
import WhatAreAugmentations from "./components/cyberware-and-augmentations/WhatAreAugmentationsPage";
import AttributeAugmentationsPage from "./components/cyberware-and-augmentations/AttributeAugmentationsPage";
import NeuralProcessorsPage from "./components/cyberware-and-augmentations/NeuralProcessorsPage";
import OperatingSystemsPage from "./components/cyberware-and-augmentations/OperatingSystemsPage";
import AugmentationMeritsPage from "./components/cyberware-and-augmentations/AugmentationMeritsPage";
import WeaponAugmentationsPage from "./components/cyberware-and-augmentations/WeaponAugmentationsPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <a
            href="https://www.paradoxinteractive.com/games/world-of-darkness/community/dark-pack-agreement"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={{ maxWidth: "2.2vw" }} src={darkpackLogo}></img>
          </a>
        </nav>
        <div className="container">
          <div className="sidebar">
            <CyberpyreLogo></CyberpyreLogo>
            <GameMechanicsTab></GameMechanicsTab>
            <CyberwareTab></CyberwareTab>
            <StorytellerTab></StorytellerTab>
          </div>
          <div className="dashboard" style={{ overflow: "auto" }}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route
                path="/cyberware-and-augmentations"
                element={<MainPage />}
              />
              <Route
                path="/game-mechanics/cyberware-density"
                element={<CyberwareDensityPage />}
              />
              <Route
                path="/game-mechanics/glitch-dice"
                element={<GlitchDicePage />}
              />
              <Route
                path="/game-mechanics/compulsions"
                element={<CompulsionsPage />}
              />
              <Route
                path="/game-mechanics/installing-removing"
                element={<InstallingRemovingPage />}
              />
              <Route
                path="/game-mechanics/cyberware-damage"
                element={<CyberwareDamagePage />}
              />
              <Route
                path="/cyberware-and-augmentations/what-are-augmentations"
                element={<WhatAreAugmentations />}
              />
              <Route
                path="/cyberware-and-augmentations/attribute-augmentations"
                element={<AttributeAugmentationsPage />}
              />
              <Route
                path="/cyberware-and-augmentations/neural-processors"
                element={<NeuralProcessorsPage />}
              />
              <Route
                path="/cyberware-and-augmentations/operating-systems"
                element={<OperatingSystemsPage />}
              />
              <Route
                path="/cyberware-and-augmentations/augmentation-merits"
                element={<AugmentationMeritsPage />}
              />
              <Route
                path="/cyberware-and-augmentations/weapon-augmentations"
                element={<WeaponAugmentationsPage />}
              />
              <Route
                path="/storyteller-resources/loresheets"
                element={<MainPage />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
