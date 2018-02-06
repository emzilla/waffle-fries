import React from 'react'
import Link from 'gatsby-link'

class AppLayout extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <h1>
          <Link to={'/'} >
            Emily Davidson
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>
            Emily Davidson
          </Link>
        </h3>
      )
    }
    return (
      <div>
        {header}
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
