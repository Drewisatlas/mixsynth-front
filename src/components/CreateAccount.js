import React from 'react';

class CreateAccount extends React.Component {

  constructor () {
    super()
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(
      `fetch posting:
      ${this.state.name}`
    )
    // do login call back after and update username
  }

  handleChange = event => {
    this.setState ({
      [event.target.id]: event.target.value
    })

  }

  render (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" id="username"
          value={this.state.username} onChange={this.handleChange} />
        </label>
        <br />
          <label>
            E-Mail:
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default CreateAccount
