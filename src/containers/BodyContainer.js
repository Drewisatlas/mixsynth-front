import React from 'react';
import LoginContainer from './LoginContainer.js';
import SynthListsContainer from './SynthListsContainer.js';
import SearchContainer from './SearchContainer.js';
import SynthContainer from './SynthContainer.js';


class BodyContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      allSynths: [],
      savedSynths: [],
      currentSynth: null,

    }
  }

  loggedIn = () => {
    let isLoggedIn = this.props.loggedIn;
    return isLoggedIn ?
      <SynthListsContainer
      currentUser={this.props.currentUser}
      allSynths={this.state.allSynths}
      savedSynths={this.state.savedSynths}
      setView={this.props.setView}/>
      :
      <LoginContainer
      login={this.props.login}
      updateUser = {this.props.updateUser}/>
  }

  renderView = () => {
    if (this.props.viewMode === "create") {
      return <SynthContainer />
    } else if (this.props.viewMode === "edit"){
      return <SynthContainer />
    } else if (this.props.viewMode === "main"){
      return this.loggedIn()
    }
  }

  fetchAllSynths = () => {
    fetch('http://localhost:3000/synthesizers')
      .then(response => response.json())
      .then(data => {
        this.setState ({
          allSynths: data
        })
      })
  }

  fetchAllSavedSynths = () => {
    fetch('http://localhost:3000/user_synthesizers')
      .then(response => response.json())
      .then(data => {
        this.setState ({
          savedSynths: data
        })
      })
  }


  componentDidMount () {
    this.fetchAllSynths();
    this.fetchAllSavedSynths();
  }


  render (){
    return(
      <div>
      {this.renderView()}
      </div>
    )
  }
}

export default BodyContainer
