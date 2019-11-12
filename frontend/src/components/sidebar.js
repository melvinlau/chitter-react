import React from 'react'

import SignUpForm from './sign-up-form'
import SignInForm from './sign-in-form'
import Dashboard from './dashboard'
import CreatePostForm from './create-post-form'

class Sidebar extends React.Component {

  constructor(props) {
    // Inherits the props defined by the App when App renders a Sidebar
    super(props)
    this.state = {
      isLoggedin: props.isLoggedIn
    }
  }

  render() {

    if (this.props.isLoggedIn) {
      return (
        <div>
          <CreatePostForm />
        </div>
      )
    } else {
      return (
        <div>
          <SignUpForm
            handleSignUp={this.props.handleSignUp}
          />
          <br />
          <SignInForm
            handleSignIn={this.props.handleSignIn}
          />
        </div>
      )
    }

  }

}

export default Sidebar
