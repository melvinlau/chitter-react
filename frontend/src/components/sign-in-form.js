import React from 'react'

class SignInForm extends React.Component {
  render() {
    return (
      <div className="sign-in">
        <h5 className="mb-3">Sign in to your account</h5>
        <input id="sign-in-handle" type="text" placeholder="Username" required /> <br />
        <input id="sign-in-password" type="password" placeholder="Password" required /> <br />
        <button id="sign-in-submit" className="btn btn-dark">Sign In</button>
      </div>
    )
  }
}

export default SignInForm
