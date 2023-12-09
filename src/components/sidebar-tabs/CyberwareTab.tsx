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

  const navigateToAttributeAugmentations = () => {
    navigate("/cyberware-and-augmentations/attribute-augmentations");
  };

  const navigateToNeuralProcessors = () => {
    navigate("/cyberware-and-augmentations/neural-processors");
  };

  const navigateToOperatingSystems = () => {
    navigate("/cyberware-and-augmentations/operating-systems");
  };

  const navigateToAugmentationMerits = () => {
    navigate("/cyberware-and-augmentations/augmentation-merits");
  };

  const navigateToWeaponAugmentations = () => {
    navigate("/cyberware-and-augmentations/weapon-augmentations");
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
          <a onClick={navigateToAttributeAugmentations}>
            attribute augmentations
          </a>
          <a onClick={navigateToNeuralProcessors}>neural processors</a>
          <a onClick={navigateToOperatingSystems}>operating systems</a>
          <a onClick={navigateToAugmentationMerits}>augmentation merits</a>
          <a onClick={navigateToWeaponAugmentations}>weapon augmentations</a>
        </div>
      )}
    </div>
  );
}

export default CyberwareTab;
