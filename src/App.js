import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer.js';
import BodyContainer from './containers/BodyContainer.js';


class App extends Component {

  constructor (){
    super()
    this.state = {
      user: 'drewisatlas',
      synths: [],
      savedSynths: [],
      currentSynth: null,
      loggedIn: true
    }
  }

  logout = () => {
    this.setState({
      loggedIn: false
    })
  }

  login = () => {
    this.setState({
      loggedIn: true
    })
  }

  updateUser = (username) => {
    this.setState({
      user: username
    })
  }

  render() {
    return (
      <div>
        <HeaderContainer
        loggedIn={this.state.loggedIn}
        user={this.state.user}
        logout={this.logout}/>

        <BodyContainer
        loggedIn={this.state.loggedIn}
        login={this.login}/>

      </div>
    );
  }
}

export default App;
