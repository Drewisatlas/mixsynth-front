import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer.js';
import BodyContainer from './containers/BodyContainer.js';


class App extends Component {

  constructor (){
    super()
    this.state = {
      allUsers: [],
      currentUser: 'drewisatlas',
      loggedIn: false,
      viewMode: null
    }
  }

//Login callback functions to change state //
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

//View call back function //
  setView = (view) => {
    this.setState ({
      viewMode: "create"
    })

    console.log("view is changing to create mode")
  }

  updateUser = (username) => {
    this.setState({
      currentUser: username
    })
  }

// Fetches all users
  componentDidMount() {
    fetch('http://localhost:3000/users/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          allUsers: data
        })
      })
  }

  render() {
    return (
      <div>
        <HeaderContainer
        loggedIn={this.state.loggedIn}
        user={this.state.currentUser}
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
