import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CyberwareTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyling, setButtonStyling] = useState("intro-button-alt");
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToWhatAreAugmentations = () => {
    navigate("/cyberware-and-augmentations/what-are-augmentations");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname.startsWith("/cyberware-and-augmentations")) {
      setButtonStyling("intro-button-selected");
    } else {
      setButtonStyling("intro-button-alt");
    }
  }, [location.pathname]);

  return (
    <div className="tab">
      <button className={buttonStyling} onClick={toggleDropdown}>
        cyberware and augmentations
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a onClick={navigateToWhatAreAugmentations}>
            what are augmentations?
          </a>
        </div>
      )}
    </div>
  );
}

export default CyberwareTab;
