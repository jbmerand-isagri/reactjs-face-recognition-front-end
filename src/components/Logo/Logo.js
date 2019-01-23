import React from 'react';
import Tilt from 'react-tilt'; // paquet pour l'effet en passant sur le logo
import scan from './scan.png'; // importe image et la nomme scan
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '8px'}} src={scan} alt="logo de scan"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;