import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PollTeaser from './PollTeaser'
import '../syles/Dashboard.scss'


class DashBoard extends Component {
  render() {
    return (
      <Fragment>
        <div className="dashboard">
          <div className="dashboard-button-div">
            <button className="dashboard-button active-button">Unanswered Question</button>
            <button className="dashboard-button">Answered Question</button>
          </div>
          <div className="teasers">
            <PollTeaser />
          </div>
        </div>
        
      </Fragment>
    )
  }
}


export default connect()(DashBoard)