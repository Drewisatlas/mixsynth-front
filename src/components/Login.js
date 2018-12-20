import React from 'react';

class Login extends React.Component {

  constructor () {
    super()
    this.state = {
      existUsername: "",
      password: ""
    }
  }

  handleChange = event => {
    this.setState ({
      [event.target.id]: event.target.value
    })
  }

  render (){
    return (
      <div>
        <form onSubmit={this.props.login}>
          <label>
            Username:
            <input type="text" id="existUsername"
            value={this.state.existUsername}
            onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type="password" id="password"
            value={this.state.password}
            onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login
