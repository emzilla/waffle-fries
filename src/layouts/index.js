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
        <Menu links={
            [
              {path: '/', name: 'Emily Davidson'},
              {path: '/about', name: 'about'},
              {path: '/posts', name: 'posts'},              
            ]
          }
        />
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
