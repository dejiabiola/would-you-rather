import React, { Component } from 'react';
import '../styles/PollQuestion.scss'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/shared';
import { Button } from 'semantic-ui-react';
class PollQuestion extends Component {
  state = {
    selectedOption: '',
    answered: false
  }

  handleChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    })

  }

  handleSubmitAnswer = (e) => {
    e.preventDefault()
    const answer = this.state.selectedOption
    const { authedUser, dispatch } = this.props 
    const { question_id } = this.props.match.params
    dispatch(handleSaveQuestionAnswer(authedUser, question_id, answer))
    this.setState({
      answered: true
    })
  }

  render() {
    const { idValid } = this.props;

    if (idValid === false) {
      return <Redirect to='/' />
    }

    const { author, avatar, optionOne, optionTwo, hasAnswered } = this.props.questionData;
    const { question_id } = this.props.match.params;
    const { selectedOption, answered } = this.state;

    if (answered) {
      return <Redirect to={`/results/${question_id}`} />
    }

    if (hasAnswered) {
      return <Redirect to='/' />
    }

    return (
      <form className="teaser-body" onSubmit={this.handleSubmitAnswer}>
        <div className="teaser-header-div">
          <h2 className="teaser-header">{author} asks:</h2>
        </div>
        <div className="teaser-inner-div">
          <div className="teaser-image-div">
            <img src={avatar} alt={`${author} avatar`} className="teaser-image"/>
          </div>
          <div className="question-info-div">
            <h3 className="question-info-header">Would You Rather</h3>
            <input 
              type="radio" 
              name="poll-answer" 
              id="optionOne" 
              value="optionOne" 
              onChange={this.handleChange}
              checked={selectedOption === 'optionOne'}
              />
            <label htmlFor="optionOne">{optionOne}</label><br /><br />
            <input 
              type="radio" 
              name="poll-answer" 
              id="optionTwo" 
              value="optionTwo" 
              onChange={this.handleChange}
              checked={selectedOption === 'optionTwo'}
            />
            <label htmlFor="optionTwo">{optionTwo}</label><br /><br />
            <Button color={'green'} fluid disabled={this.state.selectedOption === ''}>Submit</Button>
          </div>
        </div>
      </form>
    )
  }
}

function mapStateToProps({users, questions, authedUser}, props) {
  const { question_id } = props.match.params
  const isIdValid = Object.keys(questions).includes(question_id)
  if (!isIdValid) {
    return {
      idValid: false
    }
  }
  const questionAsker = users[questions[question_id].author]
  const questionData = {
    author: questionAsker.name,
    avatar: questionAsker.avatarURL,
    optionOne: questions[question_id].optionOne.text,
    optionTwo: questions[question_id].optionTwo.text,
    hasAnswered: Object.keys(users[authedUser].answers).includes(question_id)
  }


  return {
    questionData,
    authedUser,
    idValid: true
  }
}

export default connect(mapStateToProps)(PollQuestion)
