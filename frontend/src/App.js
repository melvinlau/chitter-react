import React from 'react'

import logo from './logo.svg'
import './App.css'

import Heading from './components/heading'
import Feed from './components/feed'
import Sidebar from './components/sidebar'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      feed: [],
      isLoggedin: false,
      user: {
        id: null,
        handle: null
      },
      session: {
        user_id: null,
        session_key: null
      }
    }
    // Function bindings
    this.getFeed = this.getFeed.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleCreatePost = this.handleCreatePost.bind(this)
  }

  handleSignUp(handle, password) {
    let signUpData = {
      'user': {
        'handle': handle,
        'password': password
      }
    }
    fetch(
      'https://chitter-backend-api.herokuapp.com/users',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(signUpData)
      }
    )
    .then(response => response.json())
    .then(data => {
      this.setState({
        user: {
          id: data.id,
          handle: data.handle
        }
      })
    })
    .then(
      this.handleSignIn(handle, password)
    )
    .catch(console.log)
  }

  handleSignIn(handle, password) {
    let signInData = {
      'session': {
        'handle': handle,
        'password': password
      }
    }
    fetch(
      'https://chitter-backend-api.herokuapp.com/sessions',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(signInData)
      }
    )
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.session_key) {
        this.setState({
          isLoggedIn: true,
          user: {
            handle: handle
          },
          session: {
            user_id: data.user_id,
            session_key: data.session_key
          }
        })
      }
    })
    .catch(console.log)
  }

  handleCreatePost(message) {
    let createPostData = {
      'peep': {
        'user_id': this.state.session.user_id,
        'body': message
      }
    }
    console.log(this.state.session.session_key)
    console.log({'Authorization': `Token token=${this.state.session.session_key}`})
    fetch(
      'https://chitter-backend-api.herokuapp.com/peeps',
      {
        headers: {
          'Authorization': `Token token=${this.state.session.session_key}`,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(createPostData)
      }
    )
    .then(response => response.json())
    .then(this.getFeed())
    .catch(console.log)
  }

  // Fetches the FEED using the Makers backend API
  getFeed() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then((response) => { return response.json() })
    .then((data) => {
      this.setState({
          feed: data
      })
    })
    .catch(console.log)
  }

  componentDidMount() {
    this.getFeed()
  }

  render() {
    return (
      <div className="container">
        <Heading />
        <div className="row">
          <div className="col-8 pl-3 py-2">
            <Feed feed={this.state.feed} />
          </div>
          <div className="col-4 pr-3 py-2">
            <Sidebar
              handle={this.state.user.handle}
              isLoggedIn={this.state.isLoggedIn}
              handleSignUp={this.handleSignUp}
              handleSignIn={this.handleSignIn}
              handleCreatePost={this.handleCreatePost}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
