import React, { Component, Fragment } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { user } = this.props
    const { activeItem } = this.state
    
    return (
      <Fragment>
        <Menu tabular size={"massive"}>
          <Menu.Item
            as={Link}
            to="/"
            name='home'
            onClick={this.handleItemClick}
            active={activeItem === 'home'}
          />
          <Menu.Item
            as={Link}
            to="/add"
            name='new poll'
            onClick={this.handleItemClick}
            active={activeItem === 'new poll'}
          />
          <Menu.Item
            as={Link}
            to='/leaderboard'
            name='leaderboard' 
            onClick={this.handleItemClick}
            active={activeItem === 'leaderboard'}
          />
          <Menu.Menu position='right'>
            <span className="span">
              <Image
                src={user.avatarURL}
                avatar
                circular={true}
                alt={user.name}
                verticalAlign={"bottom"}
                className={"nav-avatar"}
              />
              {user.name}
            </span>
            <Menu.Item
              as={Link}
              to='logout'
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


export default connect(mapStateToProps)(Navbar)