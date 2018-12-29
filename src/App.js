import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer.js';
import BodyContainer from './containers/BodyContainer.js';


class App extends Component {

  constructor (){
    super()
    this.state = {
      allUsers: [],
      currentUser: {},
      loggedIn: false,
      viewMode: "main"
    }
  }

//Login callback functions to change state //
  logout = () => {
    this.setState({
      loggedIn: false,
      viewMode: "main"
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
    debugger
    let user = this.state.allUsers.find(user => {
      return user.username === username
    })
    this.setState({
      currentUser: user
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
        currentUser={this.state.currentUser}
        logout={this.logout}/>

        <BodyContainer
        loggedIn={this.state.loggedIn}
        login={this.login}
        updateUser={this.updateUser}
        viewMode={this.state.viewMode}
        setView={this.setView}/>

      </div>
    );
  }
}

export default App;
