import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation'; // considère .js si rien
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'; // considère .js si rien
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Greetings from './components/Greetings/Greetings';
import Credits from './components/Credits/Credits';
import './App.css';

const app = new Clarifai.App({ // configure accès à l'API Clarifai
  apiKey: '00c7496d7aaf4243af1e53b1f8f344bd' // ma clé API
})

const particlesOptions = { // configure options API animation particules
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
  constructor() { // utilise un constructeur pour définir un état
    super(); // pour être capable de l'utiliser
    this.state = {
      input: '',
      imageUrl: '',
      box: {}, // va contenir valeurs reçues position visage
      route: 'signin', // traque où se situe dans la page
      isSignedIn: false,
      user: {
        name: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      name: data.name,
    }})
  }

  calculateFaceLocation = (data) => { // reçoit des data
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return { // retourne un objet qui va remplir la state box
      leftCol: clarifaiFace.left_col * width, // produit du % partant gauche image par largeur
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => { // à chaque fois voit un event sur la page (propriété de App, nécessite trigger (déclencheur))
    this.setState({input: event.target.value}); // set le contenu de l'input
  }

  onButtonSubmit = () => { // onPictureSubmit
    this.setState({imageUrl: this.state.input}) // pour passer l'url de l'image au composant FaceRecognition
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input) // ne peut pas mettre directement imageUrl avec setState
      .then(response =>  {
        if (response) {
          fetch('http://localhost:3000/image')
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      // calculateFaceLocation(response) prend une réponse, renvoit un objet spécifiant coordonnées face-box
      // cet objet va dans displayFaceBox 
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return ( // parenthèses pour insérer plusieurs lignes
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} 
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home' // condition pour afficher
          ? <div>
              <Logo /> {/* sinon retourne (emballe dans une div pour affichage fonctionne) */}
              <Greetings name={this.state.user.name}/>
              <ImageLinkForm 
                onInputChange={this.onInputChange}  /* passe les props */
                onButtonSubmit={this.onButtonSubmit} 
              />
              <FaceRecognition box={box} imageUrl={imageUrl} /> {/* passe l'url de l'image au composant */}
            </div>
          : (
              route === 'signin' 
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
        <Credits/>
      </div>
    );
  }
}

export default App;
