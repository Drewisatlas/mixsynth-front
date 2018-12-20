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

  viewRouter = () => {
    if (this.state.viewMode === "create") {
      return <SynthComponent />
    } else if (this.state.viewMode === "edit"){
      return <SynthComponent />
    }
  }

  setView = (view) => {
    this.setState ({
      viewMode: "create"
    })

    console.log("view is changing to create mode")
  }

  render (){

    let isLoggedIn = this.props.loggedIn;
    return (
      <div>
        {this.viewRouter()}
        {isLoggedIn ?
          <SynthListsContainer
          mySynths={this.state.synths}
          savesSynths={this.state.savedSynths}
          setView={this.setView}/>
          :
          <LoginContainer
          login={this.props.login}
          updateUser = {this.props.login}/>
        }

      </div>
    )
  }
}

export default BodyContainer
