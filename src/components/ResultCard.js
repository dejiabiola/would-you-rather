import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress } from 'semantic-ui-react'


class ResultCard extends Component {
  render() {
    return (
      <div className='result-card'>
        <p>Be a front end developer</p>
        <Progress percent={30} progress large style={{margin: 0, width:'100%'}}/>
        <p>3 out of 5</p>
      </div>
    )
  }
}


export default connect()(ResultCard)