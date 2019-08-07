import React from 'react'
import {FormattedMessage} from 'react-intl'

const Scroller = class extends React.Component {
  TOP_MARGIN = 100

  handleScroll = () => {
    if(document.getElementById('benefits').getBoundingClientRect().top - this.TOP_MARGIN > 0){
      this.benefitsScroller.classList.remove('active')
      this.specificationScroller.classList.remove('active')
      this.priceScroller.classList.remove('active')
      this.contactScroller.classList.remove('active')
    } else if(document.getElementById('specification').getBoundingClientRect().top - this.TOP_MARGIN > 0){
      this.benefitsScroller.classList.add('active')
      this.specificationScroller.classList.remove('active')
      this.priceScroller.classList.remove('active')
      this.contactScroller.classList.remove('active')
    } else if(document.getElementById('price').getBoundingClientRect().top - this.TOP_MARGIN > 0){
      this.specificationScroller.classList.add('active')
      this.benefitsScroller.classList.remove('active')
      this.priceScroller.classList.remove('active')
      this.contactScroller.classList.remove('active')
    } else if(document.getElementById('contact').getBoundingClientRect().bottom - window.innerHeight > 0){
      this.priceScroller.classList.add('active')
      this.benefitsScroller.classList.remove('active')
      this.specificationScroller.classList.remove('active')
      this.contactScroller.classList.remove('active')
    } else {
      this.contactScroller.classList.add('active')
      this.benefitsScroller.classList.remove('active')
      this.specificationScroller.classList.remove('active')
      this.priceScroller.classList.remove('active')
    }
    if(document.getElementById('benefits').getBoundingClientRect().top - this.TOP_MARGIN > 0){
      this.scroller.classList.remove('fixed')
    } else {
      this.scroller.classList.add('fixed')
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.benefitsScroller = document.getElementById('benefitsScroller')
    this.specificationScroller = document.getElementById('specificationScroller')
    this.priceScroller = document.getElementById('priceScroller')
    this.contactScroller = document.getElementById('contactScroller')
    this.scroller = document.getElementById('scroller')
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
        <div className="scroller">
          <div className="thinColumnScroller" id="scroller">
            <a className="navbar-item" href="#benefits" id="benefitsScroller">
              <svg className="listNavImage" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M24 24H0V0h24v24z"/>
                <circle fill="currentColor" cx="12" cy="12" r="8"/>
              </svg>
              <span><FormattedMessage id="generic.Benefits" /></span>
            </a>
            <a className="navbar-item" href="#specification" id="specificationScroller">
              <svg className="listNavImage" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M24 24H0V0h24v24z"/>
                <circle fill="currentColor" cx="12" cy="12" r="8"/>
              </svg>
              <span><FormattedMessage id="generic.So funktioniert's" /></span>
            </a>
            <a className="navbar-item" href="#price" id="priceScroller">
              <svg className="listNavImage" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M24 24H0V0h24v24z"/>
                <circle fill="currentColor" cx="12" cy="12" r="8"/>
              </svg>
              <span><FormattedMessage id="generic.Preise" /></span>
            </a>
            <a className="navbar-item" href="#contact" id="contactScroller">
              <svg className="listNavImage" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M24 24H0V0h24v24z"/>
                <circle fill="currentColor" cx="12" cy="12" r="8"/>
              </svg>
              <span><FormattedMessage id="generic.Kontakt" /></span>
            </a>
          </div>
        </div>
    )
  }
}

export default Scroller