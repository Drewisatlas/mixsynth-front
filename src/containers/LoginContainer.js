import React from 'react';
import Login from '../components/Login.js'
import CreateAccount from '../components/CreateAccount.js'

class LoginContainer extends React.Component {

  render (){
    return (
      <div className='LoginView'>
      <div />
        <div className='LoginForm'>
          <div style={{paddingLeft: "10px"}}>
          <h2> Login </h2>
            <Login
            login={this.props.login}
            updateUser={this.props.updateUser}
            />
          </div>
          <div style={{paddingLeft: "10px"}}>
          <h2> Create An Account </h2>
            <CreateAccount
              login={this.props.login}
              updateUser={this.props.updateUser}
            />
          </div>
        </div>
        <div />
      </div>
    )
  }
}

export default LoginContainer
