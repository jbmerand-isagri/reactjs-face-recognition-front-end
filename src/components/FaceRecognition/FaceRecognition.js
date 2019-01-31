import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => { // fonction pure, utilise une fonction fléchée, reçoit props imageUrl (la destructure et la passe en param)
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='auto' height='280px' />
                <div 
                    className='bounding-box' 
                    style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
                >
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition;