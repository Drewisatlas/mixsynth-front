import React from 'react';
import '../cssModules/loginContainer.css'

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

  handleSubmit = event => {
    event.preventDefault();
    this.props.login()
    this.props.updateUser(this.state.existUsername)
  }

  render (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username: <br/>
            <input type="text" id="existUsername" className='textInput'
            value={this.state.existUsername}
            onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Password: <br/>
            <input type="password" id="password" className='textInput'
            value={this.state.password}
            onChange={this.handleChange}/>
          </label>
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login
