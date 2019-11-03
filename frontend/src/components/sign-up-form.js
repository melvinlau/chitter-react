import React from 'react'
import PasswordMask from 'react-password-mask'

class SignUpForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      handle: null,
      password: null
    }
    this.handleHandleChange = this.handleHandleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHandleChange(event) {
    this.setState({ handle: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert('New user creation request: ' + this.state.handle + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="sign-up">
        <h5 class="mb-3">Create a new account</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.handle}
            onChange={this.handleHandleChange}
            type="text"
            placeholder="Username"
            required
          />
          <br />
          <PasswordMask
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Password"
            required
          />

          <button id="sign-up-submit" className="btn btn-dark">Sign Up</button>
        </form>
      </div>
    )
  }

}

export default SignUpForm
