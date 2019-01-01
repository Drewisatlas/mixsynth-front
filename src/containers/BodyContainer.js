import React from 'react';
import LoginContainer from './LoginContainer.js';
import SynthListsContainer from './SynthListsContainer.js';
import SearchContainer from './SearchContainer.js';
import CreateSynthContainer from './CreateSynthContainer.js';
import EditSynthContainer from './EditSynthContainer.js';
import {Route} from 'react-router-dom';


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
      <Route exact={true} path={'/'}
      render={ () => {
        return <LoginContainer
        login={this.props.login}
        updateUser ={this.props.updateUser}/>
      }}/>
  }

  renderView = () => {
    if (this.props.viewMode === "create") {
      return <Route path={'/create'} component ={CreateSynthContainer} />
    } else if (this.props.viewMode === "edit"){
      return <EditSynthContainer />
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
