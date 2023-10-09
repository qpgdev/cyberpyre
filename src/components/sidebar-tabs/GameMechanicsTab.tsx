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
        </div>
      )}
    </div>
  );
}

export default GameMechanicsTab;