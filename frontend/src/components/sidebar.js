import React from 'react'

import SignUpForm from './sign-up-form'
import SignInForm from './sign-in-form'
import Dashboard from './dashboard'
import CreatePostForm from './create-post-form'

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    if (this.props.isLoggedIn) {
      return (
        <div>
          <Dashboard handle={this.props.handle} />
          <CreatePostForm handleCreatePost={this.props.handleCreatePost} />
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
