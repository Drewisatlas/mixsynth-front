import React from 'react';

class SynthListsContainer extends React.Component {


  findUserSynths = () => {
    return this.props.allSynths.filter( synth => {
       return synth.user_id === this.props.currentUser.id;
    })
  }

  findUserLikedSynths = () => {
    return this.props.savedSynths.filter( synth => {
      return synth.user_id === this.props.currentUser.id;
    });
  }

  findSynth = (synthId) => {
    return this.props.allSynths.find( synth => {
      return synth.id === synthId;
    })
  }

  viewSynth = (event, synth) => {
    event.preventDefault()
    return this.props.setCurrentSynth(synth)
  }


  render (){
    return (
      <React.Fragment>
      <div>
        <div>My Synths </div>
          <ul> {this.findUserSynths().map( synth => {
            return <li key={synth.id} onClick={(event) => this.viewSynth(event, synth)}> {synth.name}</li>
          })} </ul>//loads a list of synthesizers, on click loads the selected synthesizer with saved presets
        <div>Favorite Synths</div> //loads a list of liked synthesizers, on click loads the selected synthesizer with saved presets
          <ul> {this.findUserLikedSynths().map( synth => {
            return <li key={synth.synthesizer_id}> {this.findSynth(synth.synthesizer_id).name} </li>
          })} </ul>
      </div>
      </React.Fragment>
    )
  }
}

export default SynthListsContainer
