import React, { Component } from 'react'
import '../styles/NewPoll.scss'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'
import { handleAddNewQuestion } from '../actions/shared'
import { Button, Segment, Dimmer, Loader } from 'semantic-ui-react'

class NewPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    isLoading: false
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
      isLoading: true
    })
    setTimeout(() => {
      this.setState({
        optionOne: '',
        optionTwo: '',
        isLoading: false
      })
      this.props.history.push('/');
    }, 1000)
    
    
  } 

  render() {
  

    return (
      <Segment style={{border: 'none', boxShadow: 'none'}}>
        <Dimmer active={this.state.isLoading === true}>
          <Loader size='big' disabled={this.state.isLoading === false}>Loading</Loader>
        </Dimmer>

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
          <Button 
            color={'green'} 
            size={'large'} 
            disabled={this.state.optionOne === '' || this.state.optionTwo === ''}
            fluid
            >
            Submit
          </Button>
        </div>
      </form>  
      </Segment>
    )
  }
}



function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewPoll)