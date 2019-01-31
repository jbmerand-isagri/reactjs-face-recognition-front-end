import React from 'react';
import logo from './logoWhite.png';

const Credits = () => {
    return (
        <footer style={{ marginTop: '300px'}}>
            <small>Projet réalisé dans le cadre de la formation Udemy "The Complete Web Developper in 2018: Zero to Mastery".</small>
            <a href="https://www.jbmerand.fr" title="portfolio de Jean-Baptiste Mérand">
                <img className='ma2 center' style={{ height: 'auto', width: 150 }} id="logo" src={logo} alt="logo JBMérand"/>
            </a>
        </footer>
    )
}

export default Credits;