import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import '../styles/PollTeaser.scss'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


class PollTeaser extends Component {
  
  render() {
    const { view, answeredQ, unAnsweredQ, users } = this.props;
    const questionsToDisplay = view === 'unAnswered' ? unAnsweredQ : view === 'answered' ? answeredQ : undefined
    return (
      <Fragment>
        {questionsToDisplay !== undefined && questionsToDisplay.map(question => (
          <div className="teaser-body" key={question.id}>
            <div className="teaser-header-div">
              <h3 className="teaser-header">{users[question.author].name} asks:</h3>
            </div>
            <div className="teaser-inner-div">
              <div className="teaser-image-div">
                <img src={users[question.author].avatarURL} alt={`${users[question.author].name} avatar`} className="teaser-image"/>
              </div>
              <div className="teaser-info-div">
                <h3 className="teaser-info-header">Would you rather</h3>
                <p className="teaser-info">{question.optionOne.text}...</p>
                {question.hasLiked ?
                  <Link to={`/results/${question.id}`}>
                    <Button color={'teal'} fluid>View Result</Button>
                  </Link> :
                  <Link to={`/questions/${question.id}`}>
                    <Button color={'green'} fluid>View Poll</Button>
                  </Link>
                }
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
  )).sort((a, b) => b.timestamp - a.timestamp).map(question => {
    return {
      ...question,
      hasLiked: true
    }
  })
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