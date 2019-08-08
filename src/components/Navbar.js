import React from 'react'
import {FormattedMessage, IntlProvider} from 'react-intl'
import { Link } from 'gatsby'
import login from '../img/sign-in-alt-solid.svg'
import logo from '../img/Mapset_Logo_RGB_blau.svg'

import layout_bg_4 from '../img/layoutBG_4.svg'

const Navbar = class extends React.Component {
  state = {
    locale: this.props.locale,
    messages: this.props.messages,
    active: false,
    navBarActiveClass: '',
  }
  
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
        {
          active: !this.state.active,
        },
        // after state has been updated,
        () => {
          // set the class in state for the navbar accordingly
          this.state.active
              ? this.setState({
                navBarActiveClass: 'is-active',
              })
              : this.setState({
                navBarActiveClass: '',
              })
        }
    )
  }
  
  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <nav
            className="navbar blueBack"
            role="navigation"
            aria-label="main-navigation"
        >
          <img className="backgroundImage hide-on-mobile" src={layout_bg_4} alt=""/>
          <div className="container">
              <div className="navbar-end">
                  {/* Hamburger menu */}
                  <div
                      className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                      data-target="navMenu"
                      onClick={() => this.toggleHamburger()}
                  >
                      <span />
                      <span />
                      <span />
                  </div>
              </div>
              <div>
              </div>
              <div
                  id="navMenu"
                  className={`navbar-menu`}
              >
                  <div className="navbar-end has-text-centered">
                      <Link className="navbar-item" to="/">
                          <FormattedMessage id="generic.navbar.Support" />
                      </Link>
                      <Link className="navbar-item" to="/">
                          <FormattedMessage id="generic.navbar.Login" />
                          <img className="icon is-small is-white" src={login} alt="" />
                      </Link>
                  </div>
              </div>
          </div>
        </nav>
      </IntlProvider>
    )
  }
}

export default Navbar
