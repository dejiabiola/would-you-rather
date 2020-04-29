import React, { Component } from 'react'
import '../syles/NewPoll.scss'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'
import { handleAddNewQuestion } from '../actions/questions'


class NewPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleOptionOne = (e) => {
    const value = e.target.value

    this.setState({
      optionOne: value
    })
  }

  handleOptionTwo = (e) => {
    const value = e.target.value

    this.setState({
      optionTwo: value
    })
  }

  handleNewPollsubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;
    console.log("from here", optionOne, optionTwo, authedUser)
    dispatch(handleAddNewQuestion(optionOne, optionTwo, authedUser))
    this.setState({
      optionOne: '',
      optionTwo: ''
    })
    this.props.history.push('/');
  } 




  render() {
    return (
      <form className="new-poll-body" onSubmit={this.handleNewPollsubmit}>
        <div className="new-poll-header-div">
          <h2 className="new-poll-header">Create New Question</h2>
        </div>
        <div className="new-poll-info">
          <h4>Complete the question</h4>
          <p>Would you rather...</p>
          <input 
            type="text" 
            name="optionOne" 
            className="new-poll-input" 
            placeholder="Enter option one.."
            onChange={this.handleOptionOne}
            />
          <Divider horizontal>Or</Divider>
          <input 
            type="text" 
            name="optionTwo" 
            className="new-poll-input" 
            placeholder="Enter option two.."
            onChange={this.handleOptionTwo}
            />
          <button className="new-poll-submit">Submit</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewPoll)