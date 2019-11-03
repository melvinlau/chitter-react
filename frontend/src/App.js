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
      session_key: null
    }
  }

  handleSignUp(handle, password) {
    // Post API here
  }

  handleSignIn(handle, password) {
    // Post API here
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
    .catch(console.log);
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
            <Sidebar isLoggedIn={this.state.isLoggedIn} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
