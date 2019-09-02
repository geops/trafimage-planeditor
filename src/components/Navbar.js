import React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Link } from "gatsby";

import layout_bg_4 from "../img/layoutBG_4.svg";
import layout_bg_2 from "../img/layoutBG_2.png";
import mapset_banner from "../img/Mapset_Logo_RGB_weiss.svg";
import login from "../img/login.svg";
import logout from "../img/logout.svg";
import userManager from "../utils/userManager";

class Navbar extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    locale: this.props.locale,
    messages: this.props.messages,
    active: false,
    navBarActiveClass: "",
    user: ""
  };

  this.getNickName = this.getNickName.bind(this);
}

  login = event => {
    event.preventDefault();
    userManager.signinRedirect();
  };

  getNickName = () => {
    let nickname;
     userManager.getUser().then(function(user) {
    //   localStorage.setItem("pe.signin", true);
       if (user) {
         console.log('user nickname is ',user.profile.nickname)
         nickname = user.profile.nickname;
         localStorage.setItem('userNickname',user.profile.nickname)
      } else {
        nickname=""
        console.log("User not logged in");
      }
     });
     console.log('nickname ',nickname)
     // this.setState({user:nickname})
    return nickname
  }

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
    console.log(this.getNickName())
    console.log('state ',localStorage.getItem('userNickname'))
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
                <Link className="navbar-item" to="/">
                  <FormattedMessage id="generic.navbar.Login" />
                  <svg
                    className="icon is-small is-blue"
                    width="24"
                    height="24"
                    viewBox="0 0 42.26 59.55"
                  >
                    <g data-name="Ebene 2">
                      <path d="M40.76 29.14H37V15.69a15.69 15.69 0 0 0-31.38 0v13.45H1.5a1.5 1.5 0 0 0-1.5 1.5v21.84a7.08 7.08 0 0 0 7.08 7.07h28.1a7.08 7.08 0 0 0 7.08-7.07V30.64a1.5 1.5 0 0 0-1.5-1.5zM8.58 15.69a12.69 12.69 0 0 1 25.38 0v13.45H8.58zm30.68 36.79a4 4 0 0 1-4.08 4.07H7.08A4 4 0 0 1 3 52.48V32.14h36.26z" />
                      <path d="M24.58 40.56a3.31 3.31 0 1 0-6.62 0 3.24 3.24 0 0 0 1.79 3L18 49.79h6.62l-1.79-6.34a3.21 3.21 0 0 0 1.75-2.89z" />
                    </g>
                  </svg>
                </Link>
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
                {localStorage['userNickname'] ?
                <Link
                className="navbar-item"
                onClick={event => {
                  this.login(event);
                }}
                to="/"
              >
                <svg className="icon is-small is-blue"
                viewBox="0 0 42.26 59.55"
                width="24"
                height="24"
                fill="white"
                ><g data-name="Ebene 2">
                  <path d="M40.76,29.13H8.58V15.69a12.69,12.69,0,0,1,25.38,0v4.16h3V15.69a15.69,15.69,0,0,0-31.38,0V29.13H1.5A1.5,1.5,0,0,0,0,30.63V52.47a7.09,7.09,0,0,0,7.08,7.08h28.1a7.09,7.09,0,0,0,7.08-7.08V30.63A1.5,1.5,0,0,0,40.76,29.13Zm-1.5,23.34a4,4,0,0,1-4.08,4.08H7.08A4,4,0,0,1,3,52.47V32.13H39.26Z"/>
                  <path d="M24.57,40.55a3.31,3.31,0,1,0-4.82,3L18,49.78h6.61l-1.79-6.33A3.22,3.22,0,0,0,24.57,40.55Z"/>
                  </g></svg>
                  <FormattedMessage id={`generic.navbar.Logout`} />
              </Link>:
              <Link
              className="navbar-item"
              onClick={event => {
                this.login(event);
              }}
              to="/"
            >
              <svg
                className="icon is-small is-blue"
                width="24"
                height="24"
                viewBox="0 0 42.26 59.55"
                fill="white"
              >
                <g data-name="Ebene 2">
                  <path d="M40.76 29.14H37V15.69a15.69 15.69 0 0 0-31.38 0v13.45H1.5a1.5 1.5 0 0 0-1.5 1.5v21.84a7.08 7.08 0 0 0 7.08 7.07h28.1a7.08 7.08 0 0 0 7.08-7.07V30.64a1.5 1.5 0 0 0-1.5-1.5zM8.58 15.69a12.69 12.69 0 0 1 25.38 0v13.45H8.58zm30.68 36.79a4 4 0 0 1-4.08 4.07H7.08A4 4 0 0 1 3 52.48V32.14h36.26z" />
                  <path d="M24.58 40.56a3.31 3.31 0 1 0-6.62 0 3.24 3.24 0 0 0 1.79 3L18 49.79h6.62l-1.79-6.34a3.21 3.21 0 0 0 1.75-2.89z" />
                </g>
              </svg>
              <FormattedMessage id="generic.navbar.Login" />
            </Link>
              }
              </div>
            </div>
          </div>
        </nav>
      </IntlProvider>
    );
  }
};

export default Navbar;
