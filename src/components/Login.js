import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';



class Login extends Component {
  
  state = {
    user: ''
  }

  handleSetUser = (event) => {
    const value = event.target.value
    this.setState({
      user: value
    })
  }

  handleSignIn = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.user))
  }

  render() {
    const { users } = this.props;
    return (
      
        <form onSubmit={this.handleSignIn}>
          <div>
            <h2>Welcome to the Would You Rather Game</h2>
            <p>Please select a user to continue:</p>
            <select name="" id="" onChange={this.handleSetUser}>
              <option value="" disabled selected>Select User</option>
              {users.map(user => (
                <option value={user.id} key={user.id}>{user.name}</option>
              ))}
            </select>
            <div>
              <button>Sign In</button>
            </div>
          </div>
        </form>
      
      
    )
  }
}


function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  }
}


export default connect(mapStateToProps)(Login)