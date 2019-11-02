import React from 'react'

const Feed = ({ feed }) => {
  return (
    <div>
      <center><h1>Feed</h1></center>
      {feed.map((peep) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{peep.user.handle}</h5>
            <p class="card-text">{peep.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Feed
