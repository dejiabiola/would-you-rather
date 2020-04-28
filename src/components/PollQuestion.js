import React, { Component } from 'react';
import '../syles/PollQuestion.scss'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PollQuestion extends Component {
  render() {
    return (
      <form className="teaser-body">
        <div className="teaser-header-div">
          <h2 className="teaser-header">Sarah Edo asks:</h2>
        </div>
        <div className="teaser-inner-div">
          <div className="teaser-image-div">
            <img src="https://res.cloudinary.com/dejiabiola/image/upload/v1588060313/girl-1.svg" alt="edo" className="teaser-image"/>
          </div>
          <div className="question-info-div">
            <h3 className="question-info-header">Would You Rather</h3>
            <input type="radio" name="poll-answer" value="option1" />
            <label for="male">Ride a bicycle</label><br /><br />
            <input type="radio" name="poll-answer" value="option2" />
            <label for="male">Tour the world</label><br />
            <Link to='/result'>
              <button className="teaser-button">Submit</button>
            </Link>
          </div>
        </div>
      </form>
    )
  }
}


export default connect()(PollQuestion)
