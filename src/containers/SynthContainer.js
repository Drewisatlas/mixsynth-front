import React from 'react';
import KeyboardComponent from '../components/KeyboardComponent.js';

class SynthContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      name: "Untitled",
      creator: "username",
      oscillator: "sine",
      gain: 0.5,
      frequency: 0,
      activeAudioNodes: {}
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

  buildAudioContext = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext; // for legacy browsers
    var mySynth = new AudioContext()
    //create gain node
    let gainNode = mySynth.createGain()
    gainNode.gain.value = this.state.gain
    //createOscillator
    let osc1 = mySynth.createOscillator()
    osc1.frequency.value = this.state.frequency
    osc1.type = this.state.oscillator
    osc1.detune.value = 0
    osc1.connect(gainNode)
    //connect oscillator to gainNode
    gainNode.connect(mySynth.destination)
    osc1.start()
  }

  playNote = (midiNumber) => {
    let frequency = 440 * Math.pow(2,(midiNumber-69)/12);
    console.log(`midi note:${midiNumber}, ${frequency} hz`);
    this.setState ({
      frequency: frequency
    })
    this.buildAudioContext()
  }

  stopNote = (midiNumber) => {
    const AudioContext = window.AudioContext || window.webkitAudioContext; // for legacy browsers
    var mySynth = new AudioContext()
    mySynth.close()
  }





  componentDidMount () {

  }


  render (){
    this.buildAudioContext()
    return (
      <React.Fragment>
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
        <KeyboardComponent
          playNote={this.playNote}
          stopNote={this.stopNote}
        />
      </React.Fragment>
    )
  }
}

export default SynthContainer
