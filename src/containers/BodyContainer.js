import React from 'react';
import LoginContainer from './LoginContainer.js';
import SynthListsContainer from './SynthListsContainer.js';
import SearchContainer from './SearchContainer.js';
import SynthContainer from './SynthContainer.js';

class BodyContainer extends React.Component {

  render (){
    return (
      <div>
      Things that will render in the body area:
        <LoginContainer />
        <SynthListsContainer />
        <SearchContainer />
        <SynthContainer />
      </div>
    )
  }
}

export default BodyContainer
