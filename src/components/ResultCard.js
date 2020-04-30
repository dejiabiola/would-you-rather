import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Progress } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';

class ResultCard extends Component { 
  render() {
    const { total, userOptions, highest } = this.props;
    return (
      <Fragment>
        {userOptions.map((option, i) => (
          <div className='result-card' key={i}>
            {option.userVoted === true && (
              <div style={{display:'flex', justifyContent:'flex-end'}}>
                <div>
                  <span style={{fontSize: '1.5rem'}}>Your vote</span>
                  <Rating 
                    icon='heart' 
                    defaultRating={1} 
                    maxRating={1} 
                    size='huge' 
                    />
                </div>
              </div>
            )}
            <p>{option.text}</p>
            <Progress 
              percent={option.percentVote} 
              progress 
              large="true" 
              style={{margin: 0, width:'100%'}}
              color={option.noOfVotes === highest ? 'green' : 'grey'}
              />
            <p style={{textAlign:'center', marginTop:'10px'}}>{option.noOfVotes} out of {total}</p>
          </div>
        ))}
      </Fragment>
    )
  }
}

function mapStateToProps({ questions, authedUser }, props) {
  const {question_id} = props.match.params;
  const question = questions[question_id];
  const total = question.optionOne.votes.length + question.optionTwo.votes.length;
  const biggestVote = (optionOne, optionTwo) => {
    if (optionOne === optionTwo) {
      return null;
    }
    return Math.max(optionOne, optionTwo)
  }
  return {
    total: total,
    userOptions: [
      {
        userVoted: question.optionOne.votes.includes(authedUser) ? true : false,
        noOfVotes: question.optionOne.votes.length,
        percentVote: (+(question.optionOne.votes.length / total) * 100).toFixed(1),
        text: question.optionOne.text
      },
      {
        userVoted: question.optionTwo.votes.includes(authedUser) ? true : false,
        noOfVotes: question.optionTwo.votes.length,
        percentVote: (+(question.optionTwo.votes.length / total) * 100).toFixed(1),
        text: question.optionTwo.text
      }
    ],
    highest: biggestVote(question.optionOne.votes.length, question.optionTwo.votes.length)
  }
}


export default withRouter(connect(mapStateToProps)(ResultCard))