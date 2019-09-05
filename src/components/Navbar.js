import React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Link } from "gatsby";

import layout_bg_4 from "../img/layoutBG_4.svg";
import layout_bg_2 from "../img/layoutBG_2.png";
import mapset_banner from "../img/Mapset_Logo_RGB_weiss.svg";
import userManager from "../utils/userManager";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale,
      messages: this.props.messages,
      active: false,
      navBarActiveClass: ""
    };
  }

  login = event => {
    console.log("here login");
    event.preventDefault();
    userManager.signinRedirect();
  };

  logout = event => {
    console.log("logged out");
    localStorage.removeItem("userNickname");
    userManager.signoutRedirect();
  };

  toggleHamburger = (callback = null) => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        if (this.state.active) {
          this.setState({
            navBarActiveClass: "is-active"
          });
          document.body.style.position = "fixed";
        } else {
          this.setState({
            navBarActiveClass: ""
          });
          document.body.style.position = "static";
        }
        if (callback) callback();
      }
    );
  };

  mobileMenuLinkClick = target => {
    this.toggleHamburger(() => {
      // toggle the active boolean in the state
      window.scrollTo(0, document.getElementById(target).offsetTop);
    });
  };

  render() {
    const { user } = this.props;
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <nav className="navbar" role="navigation" aria-label="main-navigation">
          <img
            className="backgroundImage d-none d-md-block"
            src={layout_bg_4}
            alt=""
          />
          <div className="container">
            <div className="navbar-start">
              <div className="headerBadge d-block d-md-none">
                <img className="main-heading" src={mapset_banner} alt="" />
                <div className="subtext">
                  <span>
                    <FormattedMessage id="generic.powered by" />{" "}
                  </span>
                  <span className="is-bolder">geops</span>
                  <span className="is-bolder"> | </span>
                  <span className="is-bolder">evoq</span>
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
            <div
              className={`mobile-menu ${this.state.navBarActiveClass} d-block d-md-none`}
            >
              <div className="mobile-menu-space" />
              <img
                className="mobileBackgroundImageTop"
                src={layout_bg_2}
                alt=""
              />
              <div className="whiteBack menu-list">
                <a
                  className="navbar-item is-bolder"
                  href="#benefits"
                  onClick={() => this.mobileMenuLinkClick("benefits")}
                >
                  <FormattedMessage id="generic.Benefits" />
                </a>
                <a
                  className="navbar-item is-bolder"
                  href="#features"
                  onClick={() => this.mobileMenuLinkClick("features")}
                >
                  <FormattedMessage id="generic.So funktioniert's" />
                </a>
                <a
                  className="navbar-item is-bolder"
                  href="#price"
                  onClick={() => this.mobileMenuLinkClick("price")}
                >
                  <FormattedMessage id="generic.Preise" />
                </a>
                <a
                  className="navbar-item is-bolder"
                  href="#contact"
                  onClick={() => this.mobileMenuLinkClick("contact")}
                >
                  <FormattedMessage id="generic.Kontakt" />
                </a>
                <a
                  className="navbar-item is-bolder"
                  href="#license"
                  onClick={() => this.mobileMenuLinkClick("license")}
                >
                  <FormattedMessage id="generic.License" />
                </a>
                <span className="h-rule" />
                {user ? (
                  <Link
                    className="navbar-item"
                    onClick={event => {
                      this.logout(event);
                    }}
                    to="/"
                  >
                    <svg
                      className="icon is-blue"
                      viewBox="0 0 42.26 59.55"
                      width="24"
                      height="24"
                      fill="blue"
                    >
                      <g data-name="Ebene 2">
                        <path d="M40.76,29.13H8.58V15.69a12.69,12.69,0,0,1,25.38,0v4.16h3V15.69a15.69,15.69,0,0,0-31.38,0V29.13H1.5A1.5,1.5,0,0,0,0,30.63V52.47a7.09,7.09,0,0,0,7.08,7.08h28.1a7.09,7.09,0,0,0,7.08-7.08V30.63A1.5,1.5,0,0,0,40.76,29.13Zm-1.5,23.34a4,4,0,0,1-4.08,4.08H7.08A4,4,0,0,1,3,52.47V32.13H39.26Z" />
                        <path d="M24.57,40.55a3.31,3.31,0,1,0-4.82,3L18,49.78h6.61l-1.79-6.33A3.22,3.22,0,0,0,24.57,40.55Z" />
                      </g>
                    </svg>
                    <FormattedMessage id={`generic.navbar.Logout`} />
                    {"\u00A0"}
                    {user.profile.nickname}
                  </Link>
                ) : (
                  <Link
                    className="navbar-item"
                    onClick={event => {
                      this.login(event);
                    }}
                    to="/"
                  >
                    <FormattedMessage id="generic.navbar.Login" />
                    <svg
                      className="icon is-small is-blue"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                      ></path>
                    </svg>
                  </Link>
                )}
              </div>
              <img
                className="mobileBackgroundImageBottom"
                src={layout_bg_2}
                alt=""
              />
              <div className="mobile-menu-bottom-space" />
            </div>
            <div id="navMenu" className="navbar-menu d-none d-md-block">
              <div className="navbar-end has-text-centered">
                {user ? (
                  <Link
                    className="navbar-item"
                    onClick={event => {
                      this.logout(event);
                    }}
                    to="/"
                  >
                    <svg
                      className="icon is-blue"
                      viewBox="0 0 42.26 59.55"
                      width="24"
                      height="24"
                      fill="white"
                    >
                      <g data-name="Ebene 2">
                        <path d="M40.76,29.13H8.58V15.69a12.69,12.69,0,0,1,25.38,0v4.16h3V15.69a15.69,15.69,0,0,0-31.38,0V29.13H1.5A1.5,1.5,0,0,0,0,30.63V52.47a7.09,7.09,0,0,0,7.08,7.08h28.1a7.09,7.09,0,0,0,7.08-7.08V30.63A1.5,1.5,0,0,0,40.76,29.13Zm-1.5,23.34a4,4,0,0,1-4.08,4.08H7.08A4,4,0,0,1,3,52.47V32.13H39.26Z" />
                        <path d="M24.57,40.55a3.31,3.31,0,1,0-4.82,3L18,49.78h6.61l-1.79-6.33A3.22,3.22,0,0,0,24.57,40.55Z" />
                      </g>
                    </svg>
                    <FormattedMessage id={`generic.navbar.Logout`} />
                    {"\u00A0"}
                    {user.profile.nickname}
                  </Link>
                ) : (
                  <Link
                    className="navbar-item"
                    onClick={event => {
                      this.login(event);
                    }}
                    to="/"
                  >
                    <FormattedMessage id="generic.navbar.Login" />
                    <svg
                      className="icon is-small is-white"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                      ></path>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </IntlProvider>
    );
  }
}

export default Navbar;
