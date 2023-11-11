import { useNavigate } from 'react-router-dom';

function CyberpyreLogo () {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
      };

    return (        
        <p className='logo' style={{fontFamily: 'Orbitron', cursor: 'pointer'}} onClick={navigateToHome} > 
            cyberpyre
        </p>
    )

}

export default CyberpyreLogo;