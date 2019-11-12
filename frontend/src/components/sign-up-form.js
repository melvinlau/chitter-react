import React from 'react'
import PasswordMask from 'react-password-mask'

class SignUpForm extends React.Component {

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
    this.props.handleSignUp(this.state.handle, this.state.password)
  }

  render() {
    return (
      <div className="sign-up">
        <h5 className="mb-3">Create a new account</h5>
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
          <button id="sign-up-submit" className="btn btn-dark">Sign Up</button>
        </form>
      </div>
    )
  }

}

export default SignUpForm
