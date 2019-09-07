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
    event.preventDefault();
    userManager.signinRedirect();
  };

  logout = event => {
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
                    className="navbar-item is-smaller"
                    onClick={event => {
                      this.logout(event);
                    }}
                    to="/"
                  >
                    <FormattedMessage id={`generic.navbar.Logout`} />
                    {"\u00A0"}
                    {user.profile.nickname}
                    <svg
                      className="icon is-small"
                      width="24"
                      height="24"
                      viewBox="0 0 144 144"
                      fill="#3c89ca"
                    >
                      <polygon
                        id="XMLID_4_"
                        points="99.2,17 99.2,51.6 140.6,51.6 140.6,92.9 99.2,92.9 99.2,127.3 36.9,72.2 "
                      />
                      <path
                        id="XMLID_8_"
                        d="M2.4,105.5V38.9C2.4,26.8,12.2,17,24.3,17h33.5v20.6H27.5c-2.3,0-4.2,1.9-4.2,4.2v60.6c0,2.3,1.9,4.2,4.2,4.2h30.3v20.8H24.3C12.2,127.3,2.4,117.6,2.4,105.5z"
                      />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    className="navbar-item is-smaller"
                    onClick={event => {
                      this.login(event);
                    }}
                    to="/"
                  >
                    <FormattedMessage id="generic.navbar.Login" />
                    <svg
                      className="icon is-small"
                      width="24"
                      height="24"
                      viewBox="0 0 144 144"
                      fill="#3c89ca"
                    >
                      <polygon
                        id="XMLID_4_"
                        points="43.8,127.3 43.8,92.8 2.4,92.8 2.4,51.5 43.8,51.5 43.8,17 106.1,72.2 "
                      />
                      <path
                        id="XMLID_8_"
                        d="M140.6,38.9v66.6c0,12.1-9.8,21.8-21.8,21.8H85.2v-20.6h30.3c2.3,0,4.2-1.9,4.2-4.2V42c0-2.3-1.9-4.2-4.2-4.2H85.2V17h33.5C130.8,17,140.6,26.8,140.6,38.9z"
                      />
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
                    className="navbar-item is-smaller"
                    onClick={event => {
                      this.logout(event);
                    }}
                    to="/"
                  >
                    <FormattedMessage id={`generic.navbar.Logout`} />
                    {"\u00A0"}
                    {user.profile.nickname}
                    <svg
                      className="icon is-small"
                      width="24"
                      height="24"
                      viewBox="0 0 144 144"
                      fill="white"
                    >
                      <polygon
                        id="XMLID_4_"
                        points="99.2,17 99.2,51.6 140.6,51.6 140.6,92.9 99.2,92.9 99.2,127.3 36.9,72.2 "
                      />
                      <path
                        id="XMLID_8_"
                        d="M2.4,105.5V38.9C2.4,26.8,12.2,17,24.3,17h33.5v20.6H27.5c-2.3,0-4.2,1.9-4.2,4.2v60.6c0,2.3,1.9,4.2,4.2,4.2h30.3v20.8H24.3C12.2,127.3,2.4,117.6,2.4,105.5z"
                      />
                    </svg>
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
                      className="icon is-small"
                      width="24"
                      height="24"
                      viewBox="0 0 144 144"
                      fill="white"
                    >
                      <polygon
                        id="XMLID_4_"
                        points="43.8,127.3 43.8,92.8 2.4,92.8 2.4,51.5 43.8,51.5 43.8,17 106.1,72.2 "
                      />
                      <path
                        id="XMLID_8_"
                        d="M140.6,38.9v66.6c0,12.1-9.8,21.8-21.8,21.8H85.2v-20.6h30.3c2.3,0,4.2-1.9,4.2-4.2V42c0-2.3-1.9-4.2-4.2-4.2H85.2V17h33.5C130.8,17,140.6,26.8,140.6,38.9z"
                      />
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
