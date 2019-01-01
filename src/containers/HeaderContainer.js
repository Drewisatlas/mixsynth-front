import React from 'react';
import { Header, IMAGE } from 'semantic-ui-react'
import {navLink} from 'react-router-dom';

class HeaderContainer extends React.Component {

  // loginLogout = () => {
  //   if (this.props.loggedIn === true) {
  //     return
  //   }
  // }

  render (){
    const isLoggedIn = this.props.loggedIn;
    let logout;

    if (isLoggedIn) {
      logout = <p onClick={this.props.logout}> Logout </p>
    }

    return (
      <div>
        <div> MixSynth </div>
        {isLoggedIn?
          <div> Hello {this.props.currentUser.username} {logout} </div>
          :
          null
        }
      </div>
    )
  }
}

export default HeaderContainer
