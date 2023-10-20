import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function GameMechanicsTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyling, setButtonStyling ] = useState('intro-button-alt');
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToCyberwareDensity = () => {
    navigate('/game-mechanics/cyberware-density');
  };

  const navigateToGlitchDice = () => {
    navigate('/game-mechanics/glitch-dice');
  }

  const navigateToCompulsions = () => {
    navigate('/game-mechanics/compulsions');
  }

  const navigateToInstallingRemoving = () => {
    navigate('/game-mechanics/installing-removing');
  }

  const navigateToCyberwareDamage = () => {
    navigate('/game-mechanics/cyberware-damage');
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname.startsWith('/game-mechanics')) {
        setButtonStyling('intro-button-selected')
    } else {
        setButtonStyling('intro-button-alt')
    }
}, [location.pathname]);

  return (
    <div className="tab">
      <button className ={buttonStyling} onClick={toggleDropdown}>game mechanics</button>
      {isOpen && (
        <div className="dropdown-content">
          <a onClick={navigateToCyberwareDensity}>cyberware density</a>
          <a onClick={navigateToGlitchDice}>glitch dice</a>
          <a onClick={navigateToCompulsions}>cybernetic compulsions</a>
          <a onClick={navigateToInstallingRemoving}>installing / removing cyberware</a>
          <a onClick={navigateToCyberwareDamage}>cyberware damage</a>
        </div>
      )}
    </div>
  );
}

export default GameMechanicsTab;