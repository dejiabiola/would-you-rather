import React, { Component } from 'react'
import '../syles/NewPoll.scss'
import { connect } from 'react-redux'



class NewPoll extends Component {
  render() {
    return (
      <form className="new-poll-body">
        <div className="new-poll-header-div">
          <h2 className="new-poll-header">Create New Question</h2>
        </div>
        <div className="new-poll-info">
          <h4>Complete the question</h4>
          <p>Would you rather...</p>
          <input type="text" name="" id="" className="new-poll-input" placeholder="Enter option one.."/>
          <p>OR</p>
          <input type="text" name="" id="" className="new-poll-input" placeholder="Enter option two.."/>
          <button className="new-poll-submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default connect()(NewPoll)