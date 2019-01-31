import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => { // fonction pure, utilise une fonction fléchée
    if(isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}> {/* Style inline : passage d'objets JS, utilise camel case */}
                <p onClick={() => onRouteChange('signout')} className='f4 f3-ns link dim black underline pa3 pointer'>Déconnexion</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}> {/* Style inline : passage d'objets JS, utilise camel case */}
                <p onClick={() => onRouteChange('signin')} className='f5 f3-ns link dim black underline pa3 pointer'>Connexion</p>
                <p onClick={() => onRouteChange('register')} className='f5 f3-ns link dim black underline pa3 pointer'>Enregistrement</p>
            </nav>
        );
    }
}

export default Navigation;