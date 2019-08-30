import React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Link } from "gatsby";
import layout_bg_4 from "../img/layoutBG_4.svg";
import layout_bg_2 from "../img/layoutBG_2.png";
import mapset_banner from "../img/Mapset_Logo_RGB_weiss.svg";

const Navbar = class extends React.Component {
  state = {
    locale: this.props.locale,
    messages: this.props.messages,
    active: false,
    navBarActiveClass: ""
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
              </div>
              <img
                className="mobileBackgroundImageBottom"
                src={layout_bg_2}
                alt=""
              />
              <div className="mobile-menu-bottom-space" />
            </div>
            <div id="navMenu" className="navbar-menu d-none d-md-block">
              <div className="navbar-end has-text-centered"></div>
            </div>
          </div>
        </nav>
      </IntlProvider>
    );
  }
};

export default Navbar;
