import React from 'react';

class SearchContainer extends React.Component {

  findUsername = (id) => {
    return this.props.allUsers.find( user => {
      return user.id === id;
    })
  }

  playSynth = (event, synth) => {
    event.preventDefault()
    this.props.playSynth(synth)
  }

  render (){
    return (
      <React.Fragment>
      <div> All Synths </div>
      <ul> {this.props.allSynths.map( synth => {
        return <li key={synth.id} onClick={(event) => this.playSynth(event, synth)}>
        {synth.name} by {this.findUsername(synth.user_id).username}
        </li>
      })} </ul>
      </React.Fragment>
    )
  }
}

export default SearchContainer
