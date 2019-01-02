import React from 'react';
import KeyboardComponent from '../components/KeyboardComponent.js';
import SynthComponent from '../components/SynthComponent.js';
import Envelope from 'envelope-generator';


class EditSynthContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      deleteMode: false,
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

  componentDidMount () {
    this.setState({
      name: this.props.currentSynth.name,
      creator: "username",
      oscillator: this.props.currentSynth.waveform,
      gain: this.props.currentSynth.gain,
      frequency: 0,
      attack: this.props.currentSynth.attackTime,
      decay: this.props.currentSynth.decayTime,
      sustain: this.props.currentSynth.sustainLevel,
      release: this.props.currentSynth.releaseTime,
    })
    console.log(this.props.currentSynth.name)
  }

//functions that handle changes in the synth component//
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

  saveSynth = event => {
    event.preventDefault();
    let synthId = this.props.currentSynth.id;
    let data = {
      name: this.state.name,
      waveform: this.state.oscillator,
      gain: this.state.gain,
      attackTime: this.state.attack,
      decayTime: this.state.decay,
      sustainLevel: this.state.sustain,
      releaseTime: this.state.release,
    }

    fetch(`http://localhost:3000/synthesizers/${synthId}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/Json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(updatedSynth => {
      this.props.updateSynthInDom(updatedSynth)
    })


  }


  closeContext = (context) => {
    context.close()
  }

  //generates the audio for each note played //
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

  //converts midi notes to a frequency in hz when a note is played //
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

  //toggles keyboard controls for the on screen piano //
  keyboardToggle = () => {
    this.setState({
      keyboardToggle: !this.state.keyboardToggle
    })
  }

  //delete functions

  //changes state to render the delete warning
  enableDeleteMode = () => {
    this.setState ({
      deleteMode: true,
    })
  }
  //deletes the string from the dom and the database
  deleteSynth = () => {
    let synthId = this.props.currentSynth.id;
    this.props.removeSynthFromDom(synthId);
    console.log('consider yourself terminated')

    fetch(`http://localhost:3000/synthesizers/${synthId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: synthId})
    })

    this.props.setViewUserSynths()
  }

  // renders a delete warning
  renderWarning = () => {
    return(
      <div>
      Are you sure you want to delete this Synth?
      <button onClick={this.deleteSynth}> Yes </button>
      </div>
    )
  }

  render (){
    return (
      <React.Fragment>
        <SynthComponent
        handleOscChange={this.handleOscChange}
        handleInputChange={this.handleInputChange}
        saveSynth={this.saveSynth}
        name={this.state.name}
        oscillator={this.state.oscillator}
        gain={this.state.gain}
        attack={this.state.attack}
        decay={this.state.decay}
        sustain={this.state.sustain}
        release={this.state.release}
        releaseTime={this.state.releaseTime}
        />
        <KeyboardComponent
          playNote={this.playNote}
          stopNote={this.stopNote}
          keyboardToggle={this.state.keyboardToggle}
        />
        <div>
          <button onClick={this.keyboardToggle}> Toggle Keyboard </button>
        </div>
        <div>
          <button onClick={this.enableDeleteMode}> Delete Synth </button>
        </div>
        <div>{this.state.deleteMode ? this.renderWarning() : null}</div>
    </ React.Fragment>
    )
  }
}

export default EditSynthContainer
