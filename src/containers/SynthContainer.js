import React from 'react';
import KeyboardComponent from '../components/KeyboardComponent.js';
import Envelope from 'envelope-generator';

class SynthContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      keyboardToggle: false,
      name: "Untitled",
      creator: "username",
      oscillator: "sine",
      gain: 0.5,
      frequency: 0,
      attack: 3.0 ,
      decay: 0.4,
      sustain: 0.5,
      release: 0.4,
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

    let synth1 = new AudioContext(); // creates a new audio context
    let osc1 = synth1.createOscillator(); //createOscillator
    let gainNode = synth1.createGain(); //create gain node

    osc1.frequency.value = this.state.frequency
    osc1.type = this.state.oscillator
    osc1.detune.value = 0

    let env = new Envelope(synth1, {
      attackTime: this.state.attack,
      decayTime: this.state.decay,
      sustainLevel: this.state.sustain,
      releaseTime: this.state.release
    });

    osc1.connect(gainNode)
    gainNode.connect(synth1.destination)
    gainNode.gain.value = this.state.gain

    env.connect(gainNode.gain)

    let startAt = synth1.currentTime;

    let releaseAt = startAt + 0.5;

    osc1.start(startAt);
    env.start(startAt);

    env.release(releaseAt);

    let stopAt = env.getReleaseCompleteTime();
    osc1.stop(stopAt);
    env.stop(stopAt);

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

  stopNote =(midiNumber) => {
    
  }

  keyboardToggle = () => {
    this.setState({
      keyboardToggle: !this.state.keyboardToggle
    })
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
          keyboardToggle={this.state.keyboardToggle}
        />
        <div>
        <button onClick={this.keyboardToggle}> Toggle Keyboard </button>
        </div>
      </React.Fragment>
    )
  }
}

export default SynthContainer
