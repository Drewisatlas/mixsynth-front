import React from 'react';
import {NavLink} from 'react-router-dom';
import style from '../cssModules/header.module.css';

class HeaderContainer extends React.Component {


  render (){
    const isLoggedIn = this.props.loggedIn;
    let logout;

    if (isLoggedIn) {
      logout = <p onClick={this.props.logout}> Logout </p>
    }

    return (
      <div style={{paddingLeft: "10px"}} className={style.headerContainer}>
        <h1> MixSynth </h1>
        {isLoggedIn?
          <React.Fragment>
          <div>
            <div> Hello {this.props.currentUser.username} </div>
            <NavLink to="/user" onClick={this.props.setViewMySynths}> My Synths </NavLink>
            <NavLink to="/create" onClick={this.props.setViewCreate}> Create </NavLink>
            <NavLink to="/synthesizers" onClick={this.props.setViewSearchSynths}> All Synths </NavLink>
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
