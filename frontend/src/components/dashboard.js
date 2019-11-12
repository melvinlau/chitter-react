import React from 'react'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault()
    // Method call to handle the log out
  }

  render() {
    return (
      <div className="greeting mb-3">
        <h2><strong>{this.props.handle}</strong></h2>
        <div className="float-right">
          <button className="btn btn-dark btn-sm">Sign Out</button>
        </div>
        <h4>@{this.props.handle}</h4>
      </div>
    )
  }
}

export default Dashboard
