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

  handleOscChange = event => {
    event.persist()
    this.setState({
      oscillator: event.target.value
    })
  }

  handleInputChange = event => {
    event.persist()
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(
      `fetch posting:
      ${this.state.name}`
    )
  }

  render (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="name" value={this.state.name}
          onChange={this.handleInputChange}>
          </input>

          Waveform <select id="oscillator" value={this.state.oscillator}
          onChange={this.handleOscChange}>
            <option value="sine">Sine</option>
            <option value="square">Square</option>
            <option value="sawtooth">Sawtooth</option>
            <option value="triangle">Triangle</option>
          </select>

          Gain <input type="number" id="gain" min='0' max='1.0' step='.1'
          value={this.state.gain} onChange={this.handleInputChange}>
          </input>

          <input type="submit" value="Save Synthesizer" />

        </form>
      </div>
    )
  }
}

export default SynthComponent
