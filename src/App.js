import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './containers/HeaderContainer.js';
import BodyContainer from './containers/BodyContainer.js';


class App extends Component {

  constructor (){
    super()
    this.state = {
      user: '',
      synths: [],
      savedSynths: [],
      currentSynth: null,
    }
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <BodyContainer />

      </div>
    );
  }
}

export default App;
