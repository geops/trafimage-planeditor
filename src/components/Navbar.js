import React from 'react'
import { Link } from 'gatsby'
import login from '../img/sign-in-alt-solid.svg'

const Navbar = class extends React.Component {

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/">
              Support
            </Link>
            <Link className="navbar-item" to="/">
              Login
              <img className="icon is-small is-white" src={login} alt="" />
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
