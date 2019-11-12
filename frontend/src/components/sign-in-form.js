import React from 'react'
import PasswordMask from 'react-password-mask'

class SignInForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      handle: null,
      password: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSignIn(this.state.handle, this.state.password)
  }

  render() {
    return (
      <div className="sign-in">
        <h5 className="mb-3">Sign in to your account</h5>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.handle}
            onChange={this.handleChange}
            type="text"
            name="handle"
            placeholder="Username"
            required
          />
          <br />
          <PasswordMask
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="Password"
            required
          />
          <button id="sign-in-submit" className="btn btn-dark">Sign In</button>
        </form>
      </div>
    )
  }
}

export default SignInForm
