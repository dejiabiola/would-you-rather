import React, { Component, Fragment } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import NavBar from './Nav'
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard';
import PollQuestion from './PollQuestion';
import ResultPage from './ResultPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props;

    if (authedUser === null) {
      return <Login />
    }
    return (
      <Router>
        <Fragment>
          <NavBar />
          <div className="app-body">
            <Route path='/' exact component={Dashboard} />
            <Route path='/add' component={NewPoll} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path='/questions/:question_id' component={PollQuestion} />
            <Route path='/result' component={ResultPage} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}


export default connect(mapStateToProps)(App)
