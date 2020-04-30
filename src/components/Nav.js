import React, { Component, Fragment } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logOutUser } from '../actions/authedUser'


class Navbar extends Component {
  
  handleSignOut = (e) => {
    this.props.dispatch(logOutUser())
  }

  render() {
    const { user } = this.props
    const { pathname } = this.props.location
    return (
      <Fragment>
        <Menu tabular size={"massive"} stackable>
          <Menu.Item
            as={Link}
            to="/"
            name='home'
            active={pathname === '/'}
          />
          <Menu.Item
            as={Link}
            to="/add"
            name='new poll'
            active={pathname === '/add'}
          />
          <Menu.Item
            as={Link}
            to='/leaderboard'
            name='leaderboard' 
            active={pathname === '/leaderboard'}
          />
          <Menu.Menu position='right'>
            <span className="span">
              <span style={{marginRight: '2px'}}>Welcome {user.name}</span>
              <Image
                src={user.avatarURL}
                avatar
                circular={true}
                alt={user.name}
                verticalAlign={"bottom"}
                className={"nav-avatar"}
              />
            </span>
            <Menu.Item
              name='logout'
              onClick={this.handleSignOut}
            />
          </Menu.Menu>
        </Menu>
      </Fragment>
    )
  }
}



function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  }
}


export default withRouter(connect(mapStateToProps)(Navbar))