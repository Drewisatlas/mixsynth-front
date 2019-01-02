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
      currentSynth: {},

    }
  }

  setCurrentSynth = (synth) => {
    this.setState({
      currentSynth: synth
    }, this.props.setViewEditSynth())
  }

  loggedIn = () => {
    let isLoggedIn = this.props.loggedIn;
    return isLoggedIn ?
      <SynthListsContainer
        setCurrentSynth={this.setCurrentSynth}
        currentUser={this.props.currentUser}
        allSynths={this.state.allSynths}
        savedSynths={this.state.savedSynths}
        setView={this.props.setView}/>
      :
      <Route path={'/'}
      render={ () => {
        return <LoginContainer
        login={this.props.login}
        updateUser ={this.props.updateUser}/>
      }}/>
  }

  removeSynthFromDom = (id) => {
    let filteredSynths = this.state.allSynths.filter( synth => {
      return synth.id !== id;
    })
    this.setState({
      allSynths: filteredSynths,
    })
  }

  renderView = () => {
    if (this.props.viewMode === "create") {
      return <Route path={'/create'} render={ () => {
        return <CreateSynthContainer currentUser={this.props.currentUser} />
      }} />
    } else if (this.props.viewMode === "edit"){
      return  <EditSynthContainer
      currentSynth={this.state.currentSynth}
      removeSynthFromDom={this.removeSynthFromDom}
      setViewUserSynths={this.props.setViewUserSynths}
      />
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
