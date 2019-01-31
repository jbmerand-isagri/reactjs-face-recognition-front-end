import React from 'react';

const Greetings = ({name}) => { // l'idéal serait de mettre en place un back-end pour récupérer le pseudo
    return (
        <div className='ma4 mt0 white f3'>
                {`Bonjour ${name} ! Quelle image allons-nous scanner aujourd'hui ?`}
        </div>
    )
}

export default Greetings;