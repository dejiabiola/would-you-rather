import React, { Component } from 'react';
import '../syles/PollQuestion.scss'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PollQuestion extends Component {
  render() {
    const { author, avatar, optionOne, optionTwo } = this.props.questionData;
    return (
      <form className="teaser-body">
        <div className="teaser-header-div">
          <h2 className="teaser-header">{author} asks:</h2>
        </div>
        <div className="teaser-inner-div">
          <div className="teaser-image-div">
            <img src={avatar} alt={`${author} avatar`} className="teaser-image"/>
          </div>
          <div className="question-info-div">
            <h3 className="question-info-header">Would You Rather</h3>
            <input type="radio" name="poll-answer" id="optionOne" value="optionOne" />
            <label htmlFor="optionOne">{optionOne}</label><br /><br />
            <input type="radio" name="poll-answer" id="optionTwo" value="option2" />
            <label htmlFor="optionTwo">{optionTwo}</label><br />
            <Link to='/result'>
              <button className="teaser-button">Submit</button>
            </Link>
          </div>
        </div>
      </form>
    )
  }
}

function mapStateToProps({users, questions, authedUser}, props) {
  const { question_id } = props.match.params
  const questionAsker = users[questions[question_id].author]
  const questionData = {
    author: questionAsker.name,
    avatar: questionAsker.avatarURL,
    optionOne: questions[question_id].optionOne.text,
    optionTwo: questions[question_id].optionTwo.text,
    authedUser
  }


  return {
    questionData
  }
}

export default connect(mapStateToProps)(PollQuestion)
