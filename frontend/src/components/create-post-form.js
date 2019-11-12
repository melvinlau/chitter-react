import React from 'react'

class CreatePostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleCreatePost(this.state.handle, this.state.password)
  }

  render() {
    return (
      <div className="create-post mt-5">
        <div class="mb-3"><strong>Post a new peep:</strong></div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.handle}
            onChange={this.handleChange}
            rows="6"
            maxlength="280"
            name="message"
            placeholder="What are you up to?"
            required >
          </textarea>
          <br />
          <button id="create-post-submit" className="btn btn-dark mt-3">Post</button>
        </form>
      </div>
    )
  }

}

export default CreatePostForm
