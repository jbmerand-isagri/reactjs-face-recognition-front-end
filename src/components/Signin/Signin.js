import React from 'react';

class Signin extends React.Component { // composant intelligent (états)
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            isSignInFailed: false
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = () => {
        const { signInEmail, signInPassword } = this.state;
        if(signInEmail === 'batman@gmail.com' && signInPassword === 'robin') {
            this.props.onRouteChange('home');
        } else {
            this.setState({isSignInFailed: true});
        }
    }

    render() {
        const { onRouteChange } = this.props;
        const { isSignInFailed } = this.state;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-100-m w-50-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1-ns f2 fw6 ph0 mh0">Connexion</legend>
                            {!isSignInFailed && <p>Pour vous connecter, merci d'utiliser l'email <span className="i b">batman@gmail.com</span> et le mot de passe <span className="i b">robin</span>.</p>}
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" 
                                    onChange={this.onEmailChange} 
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Mot de passe</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                            {isSignInFailed && <p className="dark-pink">Echec de la connexion : merci de recommencer avec l'email <span className="b">batman@gmail.com</span> et le mot de passe <span className="b">robin</span></p>}
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Se connecter" 
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">S'enregistrer</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Signin;