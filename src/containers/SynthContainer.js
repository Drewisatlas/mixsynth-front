import React from 'react';
import SynthComponent from '../components/SynthComponent.js';
import KeyboardComponent from '../components/KeyboardComponent.js';

class SynthContainer extends React.Component {


  render (){
    return (
      <React.Fragment>
        <SynthComponent />
        <KeyboardComponent />
      </React.Fragment>
    )
  }
}

export default SynthContainer
