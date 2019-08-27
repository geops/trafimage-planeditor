import React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Link } from "gatsby";
import evoq from "../../static/img/evoq_logo_weiss_RGB.png";
import geOps from "../../static/img/geOps_logo_white.png";

const Footer = class extends React.Component {
  state = {
    locale: this.props.locale,
    messages: this.props.messages
  };

  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
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
          <div className="expander" />
          <div>
            <span className="brandName">Trafimage </span>
            <span className="is-bolder title">Mapset </span>
            <span className="d-inline d-md-none">
              <br />
            </span>
            <span className="is-smaller">
              <FormattedMessage id="generic.powered by" />{" "}
            </span>
          </div>
          <div>
            <img className="logo first" src={evoq} alt="" />
            <span> | </span>
            <img className="logo" src={geOps} alt="" />
          </div>
        </footer>
      </IntlProvider>
    );
  }
};

export default Footer;
