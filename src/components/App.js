import React, { Component, Fragment } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import NavBar from './Nav'
import NewPoll from './NewPoll'
import LeaderBoard from './LeaderBoard'
import PollQuestion from './PollQuestion'
import ResultPage from './ResultPage'
import NoMatch from './NoMatch'
import { getAllQuestions } from '../actions/questions'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(getAllQuestions())
  }

  render() {
    const { authedUser } = this.props

    return (
      <Router>
        <Fragment>
          {authedUser === null ?
            <Login /> :
            <div>
              <NavBar />
              <div className="app-body">
                <Switch>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/add' component={NewPoll} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path='/questions/:question_id' component={PollQuestion} />
                  <Route path='/results/:question_id' component={ResultPage} />
                  <Route path="/unknownId" component={NoMatch} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          } 
        </Fragment>
      </Router>
    );
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
