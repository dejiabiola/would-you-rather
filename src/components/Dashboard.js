import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PollTeaser from './PollTeaser'
import '../styles/Dashboard.scss'

class DashBoard extends Component {
  state = {
    active: 'unAnswered'
  }

  showUnansweredQuestions = () => {
    this.setState({
      active: 'unAnswered'
    })
  }

  showAnsweredQuestions = () => {
    this.setState({
      active: 'answered'
    })
  }


  render() {
    return (
      <Fragment>
        <div className="dashboard">
          <div className="dashboard-button-div">
            <button 
              id={this.state.active === 'unAnswered' ? 'active-button' : undefined}
              onClick={this.showUnansweredQuestions}>
              Unanswered Questions
            </button>
            <button 
              id={this.state.active === 'answered' ? 'active-button' : undefined}
              onClick={this.showAnsweredQuestions}>
              Answered Questions
            </button>
          </div>
          <div className="teasers">
            <PollTeaser view={this.state.active}/>
          </div>
        </div>
        
      </Fragment>
    )
  }
}



export default connect()(DashBoard)