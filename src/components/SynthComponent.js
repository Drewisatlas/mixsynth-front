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
      </div>
    )
  }
}

export default SynthComponent
