import React from 'react';
import {Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import '../customPianoStyles.css';

const KeyboardComponent = props => {

  const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f5'),
  }
  const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: noteRange.first,
      lastNote: noteRange.last,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });


  return (
    <Piano
      noteRange={noteRange}
      width={700}
      playNote={(midiNumber) => {
        props.playNote(midiNumber)
      }}
      stopNote={(midiNumber) => {
        props.stopNote(midiNumber)
      }}
      keyboardShortcuts={keyboardShortcuts} />
  );
}

export default KeyboardComponent
