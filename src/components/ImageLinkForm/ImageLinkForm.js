import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => { // destructure directement au lieu de props.onInputChange
    return (
        <div>
            <p className='f4'>
                {"Collez l'adresse url de l'image, puis lancez le scan pour que je localise un visage."}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
                    <button 
                        className="w-30 grow f4-ns f5 link ph3 pv2 dib white bg-light-green"
                        onClick={onButtonSubmit}
                    >Scan</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;