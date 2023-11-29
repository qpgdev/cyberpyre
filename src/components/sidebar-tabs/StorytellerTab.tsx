import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function StorytellerTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyling, setButtonStyling] = useState("intro-button-alt");
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToLoresheets = () => {
    navigate("/storyteller-resources/loresheets");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname.startsWith("/storyteller-resources")) {
      setButtonStyling("intro-button-selected");
    } else {
      setButtonStyling("intro-button-alt");
    }
  }, [location.pathname]);

  return (
    <div className="tab">
      <button className={buttonStyling} onClick={toggleDropdown}>
        storyteller resources
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a onClick={navigateToLoresheets}>loresheets</a>
        </div>
      )}
    </div>
  );
}

export default StorytellerTab;
