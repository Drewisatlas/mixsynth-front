import React from 'react';

class SynthComponent extends React.Component {

  render (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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

          Gain <input type="number" id="gain" min='0' max='1.0' step='.1'
          value={this.props.gain} onChange={this.props.handleInputChange}>
          </input>

          <input type="submit" value="Save Synthesizer" />

        </form>
      </div>

    )
  }
}

export default SynthComponent
