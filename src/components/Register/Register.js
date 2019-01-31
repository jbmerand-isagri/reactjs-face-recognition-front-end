import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onSubmitRegister = () => {
        this.setState({name: this.state.name});
        if (this.state.name.length > 2) {
            this.props.onRouteChange('home');
        } else {
            alert('Le pseudo choisi doit faire au moins 3 caractères.')
        }
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-100-m w-50-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1-ns f2 fw6 ph0 mh0">Enregistrement</legend>
                            <p>Aucune des informations suivantes ne sera stockée dans une base de données. Le pseudo sera mémorisé temporairement. Il est aussi possible de directement se connecter (-> connexion).</p>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Pseudo</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    id="name" 
                                    onChange={this.onNameChange}
                                    placeholder="Obligatoire. 3 caractères minimum."
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    placeholder="Optionnel"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Mot de passe</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    placeholder="Optionnel"
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitRegister} // lancer fonction au moment du clic seulement (fonction fléchée)
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="S'enregistrer" 
                            />
                        </div>
                    </div>
                </main>
            </article>
        )
    }
    
}

export default Register;