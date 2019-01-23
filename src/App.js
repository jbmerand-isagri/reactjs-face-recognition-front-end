import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'; // considère .js si rien
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number : {
      value: 20,
      density: {
        enable : true,
        value_area: 100,
      }
    }
  }
}

class App extends Component {
  render() {
    return ( // parenthèses pour insérer plusieurs lignes
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
