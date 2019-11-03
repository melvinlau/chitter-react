import React from 'react'

import SignUpForm from './sign-up-form'
import SignInForm from './sign-in-form'
import Dashboard from './dashboard'

class Sidebar extends React.Component {

  constructor(props) {
    // Inherits the props defined by the App when App renders a Sidebar
    super(props)
    this.state = {
      isLoggedin: props.isLoggedIn
    }
  }

  render() {

    return (
      <div>
        <SignUpForm />
        <br />
        <SignInForm />
      </div>
    )
  }

}

export default Sidebar
