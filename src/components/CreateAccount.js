import React from 'react';

class CreateAccount extends React.Component {

  handleSubmit = () => {
    this.props.login()
  }

  render (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value="" onChange="" />
          </label>
          <label>
            Last Name:
            <input type="text" value="" onChange="" />
          </label>
          <label>
            E-Mail:
            <input type="text" value="" onChange="" />
          </label>
          <label>
            Username:
            <input type="text" value="" onChange="" />
          </label>
          <label>
            Password:
            <input type="text" value="" onChange="" />
          </label>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default CreateAccount
