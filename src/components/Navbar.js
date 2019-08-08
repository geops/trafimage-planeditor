import React from 'react'
import {FormattedMessage, IntlProvider} from 'react-intl'
import { Link } from 'gatsby'
import layout_bg_4 from '../img/layoutBG_4.svg'
import layout_bg_2 from "../img/layoutBG_2.png";
import mapset_banner from "../img/Mapset_Logo_RGB_weiss.svg";

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
          if(this.state.active) {
              this.setState({
                  navBarActiveClass: 'is-active',
              })
              document.body.style.overflow="hidden"
          } else {
              this.setState({
                  navBarActiveClass: '',
              })
              document.body.style.overflow="scroll"
          }
        }
    )
  }
  
  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <nav
            className="navbar"
            role="navigation"
            aria-label="main-navigation"
        >
          <img className="backgroundImage d-none d-md-block" src={layout_bg_4} alt=""/>
          <div className="container">
              <div className="navbar-start">
                  <div className="headerBadge d-block d-md-none">
                      <img className="main-heading" src={mapset_banner} alt="" />
                      <div className="subtext">
                          <span><FormattedMessage id="generic.powered by" /> </span>
                          <span className="is-bolder">evoq</span>
                          <span className="is-bolder"> | </span>
                          <span className="is-bolder">geops</span>
                      </div>
                  </div>
              </div>
              <div className="navbar-end d-block d-md-none">
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
              {/*mobile menu, expanded by hamburger*/}
              <div className={`mobile-menu ${this.state.navBarActiveClass} d-block d-md-none`}>
                  <div className="mobile-menu-space" />
                  <img className="mobileBackgroundImageTop" src={layout_bg_2} alt="" />
                  <div className="whiteBack menu-list">
                      <a className="navbar-item is-bolder" href="#benefits">
                          <FormattedMessage id="generic.Benefits" />
                      </a>
                      <a className="navbar-item is-bolder" href="#specification">
                          <FormattedMessage id="generic.So funktioniert's" />
                      </a>
                      <a className="navbar-item is-bolder" href="#price">
                          <FormattedMessage id="generic.Preise" />
                      </a>
                      <a className="navbar-item is-bolder" href="#contact">
                          <FormattedMessage id="generic.Kontakt" />
                      </a>
                      <span className="h-rule" />
                      <Link className="navbar-item" to="/">
                          <FormattedMessage id="generic.navbar.Support" />
                      </Link>
                      <Link className="navbar-item" to="/">
                          <FormattedMessage id="generic.navbar.Login" />
                          <svg className="icon is-small is-blue" width="24" height="24" viewBox="0 0 512 512">
                              <path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path>
                          </svg>
                      </Link>
                  </div>
                  <img className="mobileBackgroundImageBottom" src={layout_bg_2} alt="" />
                  <div className="mobile-menu-bottom-space" />
              </div>
              <div id="navMenu" className="navbar-menu d-none d-md-block">
                  <div className="navbar-end has-text-centered">
                      <Link className="navbar-item" to="/">
                          <FormattedMessage id="generic.navbar.Support" />
                      </Link>
                      <Link className="navbar-item" to="/">
                          <FormattedMessage id="generic.navbar.Login" />
                          <svg className="icon is-small is-white" width="24" height="24" viewBox="0 0 512 512">
                              <path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path>
                          </svg>
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
