import React, { Component } from 'react';
import '../styles/ResultPage.scss'
import { connect } from 'react-redux';
import ResultCard from './ResultCard';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'

class ResultPage extends Component {
  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    const { idValid } = this.props;

    if (idValid === false) {
      return <Redirect to='/unknownId' />
    }

    const { name, avatar } = this.props
    return (
      <form className="teaser-body">
        <div className="teaser-header-div">
          <h2 className="teaser-header">Asked by {name}</h2>
        </div>
        <div className="teaser-inner-div">
          <div className="result-image-div">
            <img src={avatar} alt={`${name} avatar`} className="teaser-image"/>
          </div>
          <div className="question-info-div">
            <h3 className="question-info-header">Results</h3>
            <h5>Would you rather...</h5>
            <ResultCard />
            <Button size="tiny" floated="right" onClick={this.handleClick}>
              Back
            </Button>
          </div>
        </div>
      </form>
    )
  }
} 

function mapStateToProps({users, questions}, props) {
  const {question_id} = props.match.params
  const isIdValid = Object.keys(questions).includes(question_id)
  if (!isIdValid) {
    return {
      idValid: false
    }
  }
  const user = users[questions[question_id].author]
  return {
    id: user.id,
    name: user.name,
    avatar: user.avatarURL
  }
}

export default connect(mapStateToProps)(ResultPage)