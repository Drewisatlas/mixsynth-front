import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import '../customPianoStyles.css';

const KeyboardComponent = props => {

  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber) => {
        // Play a given note - see notes below
      }}
      stopNote={(midiNumber) => {
        // Stop playing a given note - see notes below
      }}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
}

export default KeyboardComponent
