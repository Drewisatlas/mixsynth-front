import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer.js';
import BodyContainer from './containers/BodyContainer.js';


class App extends Component {

  constructor (){
    super()
    this.state = {
      user: 'drewisatlas',
      loggedIn: true,
      viewMode: null
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

  setView = (view) => {
    this.setState ({
      viewMode: "create"
    })

    console.log("view is changing to create mode")
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
        login={this.login}
        updateUser={this.user}
        viewMode={this.state.viewMode}
        setView={this.setView}/>

      </div>
    );
  }
}

export default App;
