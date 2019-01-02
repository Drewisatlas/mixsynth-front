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

//View call back functions //

  setViewCreate = () => {
    this.setState ({
      viewMode: "create"
    })
    console.log("view is changing to create mode")
  }

  setViewEditSynth = () => {
    this.setState ({
      viewMode: "edit"
    })
    console.log("view is changing to edit mode")
  }

  setViewUserSynths = () => {
    this.setState ({
      viewMode: "main"
    })
    console.log("view is changing to show user synths")
  }

  setViewSearchSynths = () => {
    this.setState ({
      viewMode: "search"
    })
    console.log("view is changing to Search for Synths")
  }

  setViewToPlay = () => {
    this.setState ({
      viewMode: "play"
    })
    console.log("view is changing to play a Synth")
  }

  updateUser = (username) => {
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
        logout={this.logout}
        setViewCreate={this.setViewCreate}
        setViewMySynths={this.setViewUserSynths}
        setViewSearchSynths={this.setViewSearchSynths}
        />

        <BodyContainer
        loggedIn={this.state.loggedIn}
        login={this.login}
        currentUser={this.state.currentUser}
        updateUser={this.updateUser}
        viewMode={this.state.viewMode}
        setViewEditSynth={this.setViewEditSynth}
        setViewUserSynths={this.setViewUserSynths}
        setViewToPlay={this.setViewToPlay}
        allUsers={this.state.allUsers}
        />

      </div>
    );
  }
}

export default App;
