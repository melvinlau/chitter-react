import React from 'react';
import logo from './logo.svg';
import './App.css';

import Feed from './components/feed';

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

      <div>
        <Feed feed={this.state.feed} />
      </div>

    );
  }
}

export default App;
