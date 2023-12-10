import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AboutCyberpyreTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyling, setButtonStyling] = useState("intro-button-alt");
  const navigate = useNavigate();
  const location = useLocation();

  // const navigateToSettingTheScene = () => {
  //   navigate('/playing-cyberpyre/setting-the-scene');
  // };

  const navigateToWhatIsCyberpyre = () => {
    navigate("/about-cyberpyre/what-is-cyberpyre");
  };

  const navigateToKindredInTheFuture = () => {
    navigate('/about-cyberpyre/kindred-in-the-future');
    };

  const navigateToSupportTheProject = () => {
    navigate("/about-cyberpyre/support-the-project");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname.startsWith("/about-cyberpyre")) {
      setButtonStyling("intro-button-selected");
      setIsOpen(true);
    } else {
      setButtonStyling("intro-button-alt");
    }
  }, [location.pathname]);

  return (
    <div className="tab">
      <button className={buttonStyling} onClick={toggleDropdown}>
        about cyberpyre
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {/* <a onClick={navigateToSettingTheScene}>setting the scene</a> */}
          <a onClick={navigateToWhatIsCyberpyre}>what is cyberpyre?</a>
          <a onClick={navigateToKindredInTheFuture}>kindred in the future</a>
          <a onClick={navigateToSupportTheProject}>support the project</a>
        </div>
      )}
    </div>
  );
}

export default AboutCyberpyreTab;
