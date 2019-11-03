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
    event.preventDefault();
    let postData = `{"user": {"handle": "${this.state.handle}", "password": "${this.state.password}"}}`
    console.log(postData)
    fetch(
      'https://chitter-backend-api.herokuapp.com/users',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(postData)
      }
    ).then((response) => response.json())
    .then((data) => {
      alert(data.id + data.handle)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="sign-up">
        <h5 class="mb-3">Create a new account</h5>
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
