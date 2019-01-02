import React from 'react';

class UnsaveableSynthComponent extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.saveSynth(event)
  }

  render (){
    return (
      <React.Fragment>
      <div>
        <form>

          <input type="text" id="name" value={this.props.name}
          onChange={this.props.handleInputChange}>
          </input>

          Waveform <select id="oscillator" value={this.props.oscillator}
          onChange={this.props.handleOscChange}>
            <option value="sine">Sine</option>
            <option value="square">Square</option>
            <option value="sawtooth">Sawtooth</option>
            <option value="triangle">Triangle</option>
          </select>

          Gain <input type="number" id="gain" min='0' max='1.0' step='0.1'
          value={this.props.gain} onChange={this.props.handleInputChange}>
          </input> Level

          Attack <input type="number" id="attack" min='0' max='10.0' step='0.1'
          value={this.props.attack} onChange={this.props.handleInputChange}>
          </input> seconds

          Sustain <input type="number" id="sustain" min='0' max='1.0' step='0.1'
          value={this.props.sustain} onChange={this.props.handleInputChange}>
          </input> Level

          Decay <input type="number" id="decay" min='0' max='10.0' step='0.1'
          value={this.props.decay} onChange={this.props.handleInputChange}>
          </input> seconds

          Release <input type="number" id="release" min='0' max='10.0' step='0.1'
          value={this.props.release} onChange={this.props.handleInputChange}>
          </input> seconds

        </form>
      </div>
      </ React.Fragment>
    )
  }
}

export default UnsaveableSynthComponent
