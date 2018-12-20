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
      currentSynth: null,

    }
  }

  loggedIn = () => {
    let isLoggedIn = this.props.loggedIn;
    return isLoggedIn ?
      <SynthListsContainer
      mySynths={this.state.synths}
      savesSynths={this.state.savedSynths}
      setView={this.props.setView}/>
      :
      <LoginContainer
      login={this.props.login}
      updateUser = {this.props.login}/>
  }

  renderView = () => {
    if (this.props.viewMode === "create") {
      return <SynthContainer />
    } else if (this.props.viewMode === "edit"){
      return <SynthContainer />
    } else if (this.props.viewMode === null){
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
