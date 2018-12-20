import React from 'react';

class Login extends React.Component {

  handleChange = event => {

  }

  render (){
    return (
      <div>
        <form onSubmit={this.props.login}>
          <label>
            Username:
            <input type="text" value="" onChange="" />
          </label>
          <label>
            Password:
            <input type="text" value="" onChange="" />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login
