import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CyberwareTab() {
    const [buttonStyling, setButtonStyling ] = useState('intro-button-alt');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/cyberware-and-augmentations') {
            setButtonStyling('intro-button-selected')
        } else {
            setButtonStyling('intro-button-alt')
        }
    }, [location.pathname]);

    const navigateToGameMechanics = () => {
        navigate('/cyberware-and-augmentations');
    };

    return (
        <button className ={buttonStyling} onClick={navigateToGameMechanics}>
            cyberware and augmentations
        </button>
    )
  }
  
  export default CyberwareTab;