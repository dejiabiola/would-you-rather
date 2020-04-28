import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../syles/PollTeaser.scss'
import { Link } from 'react-router-dom';



class PollTeaser extends Component {
  
  render() {
    const { view, answeredQ, unAnsweredQ, users } = this.props;
    const questionsToDisplay = view === 'unAnswered' ? unAnsweredQ : view === 'answered' ? answeredQ : undefined
    return (
      <Fragment>
        {questionsToDisplay !== undefined && questionsToDisplay.map(question => (
          <div className="teaser-body" key={question.id}>
            <div className="teaser-header-div">
              <h2 className="teaser-header">{users[question.author].name} asks:</h2>
            </div>
            <div className="teaser-inner-div">
              <div className="teaser-image-div">
                <img src="https://res.cloudinary.com/dejiabiola/image/upload/v1588060313/girl-1.svg" alt="edo" className="teaser-image"/>
              </div>
              <div className="teaser-info-div">
                <h3 className="teaser-info-header">Would you rather</h3>
                <p className="teaser-info">{question.optionOne.text}...</p>
                <Link to='/questions/123'><button className="teaser-button">View Poll</button></Link>
              </div>
            </div>
          </div>
        ))}
      </Fragment>    
    )
  }
}

function mapStateToProps({ users, authedUser, questions}) {
  const answeredIds = Object.keys(users[authedUser].answers);
  const answeredQuestions = Object.values(questions).filter(question => (
    answeredIds.includes(question.id)
  )).sort((a, b) => b.timestamp - a.timestamp)
  const unansweredQuestions = Object.values(questions).filter(question => (
    !answeredIds.includes(question.id)
  )).sort((a, b) => b.timestamp - a.timestamp)
  return {
    answeredQ: answeredQuestions,
    unAnsweredQ: unansweredQuestions,
    users
  }
}

export default connect(mapStateToProps)(PollTeaser)