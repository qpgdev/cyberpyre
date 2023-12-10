import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function GameMechanicsTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyling, setButtonStyling] = useState("intro-button-alt");
  const navigate = useNavigate();
  const location = useLocation();
  const linkStyle = {
    cursor: "pointer",
  };

  const navigateToCyberwareDensity = () => {
    navigate("/game-mechanics/cyberware-density");
  };

  const navigateToGlitchDice = () => {
    navigate("/game-mechanics/glitch-dice");
  };

  const navigateToCompulsions = () => {
    navigate("/game-mechanics/compulsions");
  };

  const navigateToInstallingRemoving = () => {
    navigate("/game-mechanics/installing-removing");
  };

  const navigateToCyberwareDamage = () => {
    navigate("/game-mechanics/cyberware-damage");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname.startsWith("/game-mechanics")) {
      setButtonStyling("intro-button-selected");
      setIsOpen(true);
    } else {
      setButtonStyling("intro-button-alt");
    }
  }, [location.pathname]);

  return (
    <div className="tab">
      <button className={buttonStyling} onClick={toggleDropdown}>
        game mechanics
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a onClick={navigateToCyberwareDensity} style={linkStyle}>
            cyberware density
          </a>
          <a onClick={navigateToGlitchDice} style={linkStyle}>
            glitch dice
          </a>
          <a onClick={navigateToCompulsions} style={linkStyle}>
            cybernetic compulsions
          </a>
          <a onClick={navigateToInstallingRemoving} style={linkStyle}>
            installing / removing cyberware
          </a>
          <a onClick={navigateToCyberwareDamage} style={linkStyle}>
            cyberware damage
          </a>
        </div>
      )}
    </div>
  );
}

export default GameMechanicsTab;
