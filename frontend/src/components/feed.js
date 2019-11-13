import React from 'react'

class Feed extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.feed.map((peep) => (

          <div className="peep m-3 p-4" key={peep.id}>
            <div className="author mb-2">
              <strong>{peep.user.handle}</strong>
              <span className="handle ml-2">@{peep.user.handle}</span>
            </div>
            <div className="peep-content mb-3">{peep.body}</div>
            <div className="float-right">
              <button
                className="btn btn-dark btn-sm">
                Delete
              </button>
            </div>
            <div className="peep-timestamp">
              {peep.created_at}
            </div>
          </div>

        ))}
      </div>
    )
  }

}

export default Feed
