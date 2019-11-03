import React from 'react'

class SignUp extends React.Component {

  render() {
    return (
      <div className="sign-up">
        <h5 class="mb-3">Create a new account</h5>
        <input id="sign-up-handle" type="text" placeholder="Username" required /> <br />
        <input id="sign-up-password" type="password" placeholder="Password" required /> <br />
        <input id="sign-up-submit" className="btn btn-dark" type="submit" value="Sign Up" />
      </div>
    )
  }

}

export default SignUp
