import React from 'react'
import {FormattedMessage, IntlProvider} from 'react-intl'
import { Link } from 'gatsby'
import login from '../img/sign-in-alt-solid.svg'

const Navbar = class extends React.Component {
  state = {
    locale: this.props.locale,
    messages: this.props.messages
  }
  
  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <nav
            className="navbar is-transparent"
            role="navigation"
            aria-label="main-navigation"
        >
          <div className="container">
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
        </nav>
      </IntlProvider>
    )
  }
}

export default Navbar
