import React from 'react';
import { Header, IMAGE } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';

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
          <React.Fragment>
          <div>
            <div> Hello {this.props.currentUser.username} </div>
            <NavLink to="/user"> My Synths </NavLink>
            <NavLink to="/create"> Create </NavLink>
            <div> {logout} </div>
          </div>
          </React.Fragment>
          :
          null
        }
      </div>
    )
  }
}

export default HeaderContainer
