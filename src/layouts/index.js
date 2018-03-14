import React from 'react'
import Link from 'gatsby-link'
import { Menu } from '../components/'

class AppLayout extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    return (
      <div>
        {header}
        <Menu>
          <ul>
            <li><Link to={'/'}>Emily Davidson</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>
          </ul>
        </Menu>
        {children()}
      </div>
    )
  }
}

AppLayout.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default AppLayout
