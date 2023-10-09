import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PlayingCyberpyreTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyling, setButtonStyling ] = useState('intro-button-alt');
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToWhatIsCyberpyre = () => {
    navigate('/playing-cyberpyre/what-is-cyberpyre');
};

  const navigateToSettingTheScene = () => {
    navigate('/playing-cyberpyre/setting-the-scene');
};

  const navigateToKindredInTheFuture = () => {
  navigate('/playing-cyberpyre/kindred-in-the-future');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname.startsWith('/playing-cyberpyre')) {
        setButtonStyling('intro-button-selected')
    } else {
        setButtonStyling('intro-button-alt')
    }
}, [location.pathname]);

  return (
    <div className="tab">
      <button className ={buttonStyling} onClick={toggleDropdown}>playing cyberpyre</button>
      {isOpen && (
        <div className="dropdown-content">
          <a onClick={navigateToWhatIsCyberpyre}>what is cyberpyre?</a>
          <a onClick={navigateToSettingTheScene}>setting the scene</a>
          <a onClick={navigateToKindredInTheFuture}>kindred in the future</a>
        </div>
      )}
    </div>
  );
}

export default PlayingCyberpyreTab;