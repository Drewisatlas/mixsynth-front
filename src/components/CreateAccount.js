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
          Username: <br/>
          <input type="text" id="username" className='textInput'
          value={this.state.username} onChange={this.handleChange} />
        </label>
        <br />
          <label>
            E-Mail: <br/>
            <input type="text" className='textInput'
            value={this.state.email} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Password: <br/>
            <input type="text" value={this.state.password} className='textInput'
            onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default CreateAccount
