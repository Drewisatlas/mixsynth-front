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
        <h1 className={style.siteTitle}> MixSynth </h1>
        {isLoggedIn?
          <React.Fragment>
            <div className={style.welcome}> Hello {this.props.currentUser.username} </div>
            <NavLink to="/user" onClick={this.props.setViewMySynths}> My Synths </NavLink>
            <NavLink to="/create" onClick={this.props.setViewCreate} className={style.headerContainer}> Create </NavLink>
            <NavLink to="/synthesizers" onClick={this.props.setViewSearchSynths} className={style.allSynths}> All Synths </NavLink>
            <div className={style.logout}> {logout} </div>
          </React.Fragment>
          :
          null
        }
      </div>
    )
  }
}

export default HeaderContainer
