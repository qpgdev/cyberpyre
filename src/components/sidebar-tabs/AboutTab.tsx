import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AboutTab() {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonStyling, setButtonStyling ] = useState('intro-button-alt');
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToSupportTheProject = () => {
        navigate('/about/support-the-project');
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    useEffect(() => {
        if (location.pathname.startsWith('/about')) {
            setButtonStyling('intro-button-selected')
        } else {
            setButtonStyling('intro-button-alt')
        }
    }, [location.pathname]);

    return (
      <div className="tab">
        <button className ={buttonStyling} onClick={toggleDropdown}>
          about
        </button>
          {isOpen && (
            <div className="dropdown-content">
              <a onClick={navigateToSupportTheProject}>support the project</a>
            </div>
          )}
      </div>
    )
  }
  
  export default AboutTab;