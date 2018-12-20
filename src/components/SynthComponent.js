import React from 'react';

class SynthComponent extends React.Component {

  constructor () {
    super()
    this.state = {
      name: "Untitled",
      creator: "username",
      oscillator: "sine",
      gain: 0.5,
    }
  }

  render (){
    return (
      <div>
      here we make a synth
      </div>
    )
  }
}

export default SynthComponent
