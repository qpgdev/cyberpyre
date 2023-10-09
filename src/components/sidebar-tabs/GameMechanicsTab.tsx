import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function GameMechanicsTab() {
    const [buttonStyling, setButtonStyling ] = useState('intro-button-alt');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/game-mechanics') {
            setButtonStyling('intro-button-selected')
        } else {
            setButtonStyling('intro-button-alt')
        }
    }, [location.pathname]);

    const navigateToGameMechanics = () => {
        navigate('/game-mechanics');
    };

    return (
        <button className ={buttonStyling} onClick={navigateToGameMechanics}>
            game mechanics
        </button>
    )
  }
  
  export default GameMechanicsTab;