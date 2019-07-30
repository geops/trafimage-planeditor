import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="menu">
          <ul className="menu-list">
            <li>
              <Link className="navbar-item" to="/">
                Impressum
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="is-smaller">Der </span>
          <span className="brandName">Trafimage </span>
          <span className="is-bolder title">PlanEditor </span>
          <span className="is-smaller">wird unterstützt durch </span>
          <span className="logo">EVOQ</span>
          <span> | </span>
          <span className="logo">geOps</span>
        </div>
      </footer>
    )
  }
}

export default Footer
