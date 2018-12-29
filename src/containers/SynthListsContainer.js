import React from 'react';

class SynthListsContainer extends React.Component {

  createClickHandler = (event) => {
    event.preventDefault();
    return this.props.setView('create')
  }

  render (){
    return (
      <React.Fragment>
      <div>
        <div onClick={this.createClickHandler}>Create</div> //loads a blank synth component on load
        <div>Search</div>
      </div>
      <div>
        <div>My Synths </div>
        <ul> {this.props.mySynths.map( synth => {
          return <li> {synth.name} </li>
        })} </ul>//loads a list of synthesizers, on click loads the selected synthesizer with saved presets
        <div>Favorite Synths</div> //loads a list of liked synthesizers, on click loads the selected synthesizer with saved presets
      </div>
      </React.Fragment>
    )
  }
}

export default SynthListsContainer
