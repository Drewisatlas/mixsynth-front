import React from 'react';
import style from '../cssModules/synthLists.module.css'

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

  playSynth = (event, synth) => {
    event.preventDefault();
    this.props.playSynth(synth);
  }

  render (){
    return (
      <React.Fragment>
      <div className={style.listContainer}>
        <div className={style.mySynthsList}>
          <div>My Synths </div>
            <ul> {this.findUserSynths().map( synth => {
              return <li key={synth.id} onClick={(event) => this.viewSynth(event, synth)}> {synth.name}</li>
            })}
            </ul>
        </div>
        <div className={style.favoriteSynthList}>
          <div>Favorite Synths</div>
            <ul> {this.findUserLikedSynths().map( synth => {
              return <li key={synth.synthesizer_id} onClick={(event) => this.playSynth(event,this.findSynth(synth.synthesizer_id))}> {this.findSynth(synth.synthesizer_id).name} </li>
            })}
            </ul>
          </div>
      </div>
      </React.Fragment>
    )
  }
}

export default SynthListsContainer
