import React from 'react';
import KeyboardComponent from '../components/KeyboardComponent.js';
var ADSR = require('adsr')

class SynthContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      name: "Untitled",
      creator: "username",
      oscillator: "sine",
      gain: 0.5,
      frequency: 0,
      attack: 3.0 ,
      decay: 0.4,
      sustain: 0.5,
      release: 0.4,
      releaseStartTime: 6,
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


  closeContext = (context) => {
    context.close()
  }

  buildAudioContext = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext; // for legacy browsers

    let mySynth = new AudioContext() // creates a new audio context

    let osc1 = mySynth.createOscillator() //createOscillator

    osc1.frequency.value = this.state.frequency
    osc1.type = this.state.oscillator
    osc1.detune.value = 0

    let gainNode = mySynth.createGain() //create gain node
    osc1.connect(gainNode)
    gainNode.connect(mySynth.destination)
    gainNode.gain.value = this.state.gain

    let envelopeModulator = ADSR(mySynth)
    envelopeModulator.connect(gainNode.gain)

    envelopeModulator.attack = this.state.attack // seconds
    envelopeModulator.decay = this.state.decay // seconds
    envelopeModulator.sustain = this.state.sustain// multiple of initial value to hold at
    envelopeModulator.release = this.state.release// seconds

    envelopeModulator.value.value = 0 // value is an AudioParam

    envelopeModulator.start(mySynth.currentTime)
    osc1.start(mySynth.currentTime)

    let stopAt = envelopeModulator.stop(mySynth.currentTime + this.state.releaseStartTime)
    osc1.stop(stopAt)

  }

  playNote = (midiNumber) => {
    let frequency = 440 * Math.pow(2,(midiNumber-69)/12);
    console.log(`midi note:${midiNumber}, ${frequency} hz`);
    this.setState ({
      frequency: frequency
    }, () => {
      this.buildAudioContext();
    })
  }

  stopNote = (midiNumber) => {
  }

  render (){
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
