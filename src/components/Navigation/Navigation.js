import React from 'react';

const Navigation = () => { // fonction pure, utilise une fonction fléchée
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}> {/* Style inline : passage d'objets JS, utilise camel case */}
            <p className='f3 link dim black underline pa3 pointer'>S'inscrire</p>
        </nav>
    )
}

export default Navigation;