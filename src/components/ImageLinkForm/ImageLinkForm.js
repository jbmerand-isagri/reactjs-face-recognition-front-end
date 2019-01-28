import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => { // destructure directement au lieu de props.onInputChange
    return (
        <div>
            <p className='f3'>
                {"Voulez-vous détecter les visages présents dans l'image ?"}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
                    <button 
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-green"
                        onClick={onButtonSubmit}
                    >Scanner</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;