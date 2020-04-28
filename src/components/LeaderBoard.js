import React, { Component } from 'react';
import '../syles/LeaderBoard.scss';
import { connect } from 'react-redux';



class LeaderBoard extends Component {
  render() {
    return (
      <div className="leaderboard-outer-body">
        <h1>LeaderBoard</h1>
        <div className="leaderboard-card">
          <div className="leaderboard-image-div">
            <img src="https://res.cloudinary.com/dejiabiola/image/upload/v1588060313/girl-1.svg" alt="edo"/>
          </div>
          <div className="leaderboard-info">
            <h2>Sarah Edo</h2>
            <table className="lb-answered-questions-div">
              <tr>
                <td className="title">Answered Questions:</td>
                <td>7</td>
              </tr>
              <tr>
                <td className="title">Created Questions:</td>
                <td>3</td>
              </tr>
              
            </table>
          </div>
          <div className="score-rank">
            <div className="rank">
              <span>Rank</span>
              <span className="rounded">1</span>
            </div>
            <div className="score">
              <span>Score</span>
              <span className="rounded">4</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect()(LeaderBoard)