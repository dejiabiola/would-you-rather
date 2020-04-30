import React, { Component } from 'react';
import '../styles/LeaderBoard.scss';
import { connect } from 'react-redux';



class LeaderBoard extends Component {
  render() {
    const { leaderboardInfo } = this.props;
    return (
      <div className="leaderboard-outer-body">
        <h1>LeaderBoard</h1>
        {leaderboardInfo.map((user, i) => (
          <div className="leaderboard-card" key={user.id}>
            <div className="leaderboard-image-div">
              <img src={user.avatar} alt={user.name}/>
            </div>
            <div className="leaderboard-info">
              <h2>{user.name}</h2>
              <table className="lb-answered-questions-div">
                <tbody>
                <tr>
                  <td className="title">Answered Questions:</td>
                  <td>{user.answeredLength}</td>
                </tr>
                <tr>
                  <td className="title">Created Questions:</td>
                  <td>{user.questionsLength}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="score-rank">
              <div className="rank">
                <span>Rank</span>
                <span className="rounded">{i + 1}</span>
              </div>
              <div className="score">
                <span>Score</span>
                <span className="rounded">{user.total}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const leaderboardInfo = Object.values(users).map(user => ({
    avatar: user.avatarURL,
    id: user.id,
    name: user.name,
    answeredLength: Object.values(user.answers).length,
    questionsLength: user.questions.length,
    total: Object.values(user.answers).length + user.questions.length
  }))
  .sort((a,b) => b.total - a.total)

  return {leaderboardInfo}
}

export default connect(mapStateToProps)(LeaderBoard)