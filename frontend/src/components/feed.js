import React from 'react'

const Feed = ({ feed }) => {
  return (
    <div>
      {feed.map((peep) => (

        <div className="peep m-3 p-4" key={peep.id}>
          <div className="author mb-2">
            <strong>{peep.user.handle}</strong>
            <span className="handle ml-2">@{peep.user.handle}</span>
          </div>
          <div className="peep-content mb-3">{peep.body}</div>
          <div className="float-right">
            <input className="btn btn-dark btn-sm" type="submit" value="Delete" />
          </div>
          <div className="peep-timestamp">
            {peep.created_at}
          </div>
        </div>

      ))}
    </div>
  )
}

export default Feed
