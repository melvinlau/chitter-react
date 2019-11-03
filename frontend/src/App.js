import React from 'react'
import logo from './logo.svg'
import './App.css'

import Heading from './components/heading'
import Sidebar from './components/sidebar'
import Feed from './components/feed'

class App extends React.Component {

  state = {
    feed: []
  }

  componentDidMount() {

    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(res => res.json())
    .then((data) => {
      this.setState({
          feed: data
      })
    })
    .catch(console.log);

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
            <Sidebar />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
