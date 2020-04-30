import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { getAllUsers } from '../actions/users';
import { Dropdown, Button } from 'semantic-ui-react';

class Login extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers())
  }
  state = {
    user: ''
  }

  handleSetUser = (event, { value }) => {
    this.setState({
      user: value
    })
  }

  handleSignIn = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.user))
  }

  render() {
    const { userOptions } = this.props;
    return (
      
        <form onSubmit={this.handleSignIn} className="login-form-div">
          <div>
            <h2 style={{textAlign: 'center'}}>Welcome to the Would You Rather Game</h2>
            <div className='login-info'>
              <p>Please select a user to continue:</p>
              <Dropdown
                placeholder='Select User'
                fluid
                selection
                options={userOptions}
                onChange={this.handleSetUser}
                required
                scrolling
                style={{marginBottom: '30px'}}
              />
              <Button color={'green'} fluid disabled={this.state.user === ''}>Log In</Button>
            </div>
          </div>
        </form>
      
      
    )
  }
}



function mapStateToProps({ users }) {
  const userOptions = Object.values(users).map(user => {
    return {
      key: user.id,
      text: user.name,
      value: user.id,
      image: {
        avatar: true,
        src: user.avatarURL
      }
    }
  })

  return {
    users: Object.values(users),
    userOptions
  }
}


export default connect(mapStateToProps)(Login)