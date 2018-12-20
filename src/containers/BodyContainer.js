import React from 'react';
import LoginContainer from './LoginContainer.js';
import SynthListsContainer from './SynthListsContainer.js';
import SearchContainer from './SearchContainer.js';
import SynthContainer from './SynthContainer.js';
import SynthComponent from '../components/SynthComponent.js';

class BodyContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      synths: [],
      savedSynths: [],

      viewMode: null,
      currentSynth: null,

    }
  }

  setView = (view) => {
    this.setState ({
      viewMode: "create"
    })

    console.log("view is changing to create mode")
  }

  loggedIn = () => {
    let isLoggedIn = this.props.loggedIn;
    return isLoggedIn ?
      <SynthListsContainer
      mySynths={this.state.synths}
      savesSynths={this.state.savedSynths}
      setView={this.setView}/>
      :
      <LoginContainer
      login={this.props.login}
      updateUser = {this.props.login}/>
  }

  renderView = () => {
    if (this.state.viewMode === "create") {
      return <SynthComponent />
    } else if (this.state.viewMode === "edit"){
      return <SynthComponent />
    } else if (this.state.viewMode === null){
      return this.loggedIn()
    }
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
