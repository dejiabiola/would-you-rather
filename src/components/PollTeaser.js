import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../syles/PollTeaser.scss'
import { Link } from 'react-router-dom';



class PollTeaser extends Component {
  render() {
    return (
      <div className="teaser-body">
        <div className="teaser-header-div">
          <h2 className="teaser-header">Sarah Edo asks:</h2>
        </div>
        <div className="teaser-inner-div">
          <div className="teaser-image-div">
            <img src="https://res.cloudinary.com/dejiabiola/image/upload/v1588060313/girl-1.svg" alt="edo" className="teaser-image"/>
          </div>
          <div className="teaser-info-div">
            <h3 className="teaser-info-header">Would you rather</h3>
            <p className="teaser-info">...a...</p>
            <Link to='/questions/123'><button className="teaser-button">View Poll</button></Link>
          </div>
        </div>
      </div>
    )
  }
}



export default connect()(PollTeaser)