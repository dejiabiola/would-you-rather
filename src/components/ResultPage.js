import React, { Component } from 'react';
import '../syles/ResultPage.scss'
import { connect } from 'react-redux';
import ResultCard from './ResultCard';



class ResultPage extends Component {
  render() {
    return (
      <form className="teaser-body">
        <div className="teaser-header-div">
          <h2 className="teaser-header">Asked by Sarah Edo</h2>
        </div>
        <div className="teaser-inner-div">
          <div className="result-image-div">
            <img src="https://res.cloudinary.com/dejiabiola/image/upload/v1588060313/girl-1.svg" alt="edo" className="teaser-image"/>
          </div>
          <div className="question-info-div">
            <h3 className="question-info-header">Results</h3>
            <h5>Would you rather...</h5>
            <ResultCard />
            <ResultCard />
          </div>
        </div>
      </form>
    )
  }
} 

export default connect()(ResultPage)