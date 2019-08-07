import React from 'react'

const Scroller = class extends React.Component {
  TOP_MARGIN = 50

  handleScroll = () => {
    if(window.scrollY < this.benefits){
      this.benefitsScroller.classList.remove('active')
      this.specificationScroller.classList.remove('active')
      this.priceScroller.classList.remove('active')
      this.contactScroller.classList.remove('active')
    } else if(window.scrollY < this.specification){
      this.benefitsScroller.classList.add('active')
      this.specificationScroller.classList.remove('active')
      this.priceScroller.classList.remove('active')
      this.contactScroller.classList.remove('active')
    } else if(window.scrollY < this.price){
      this.specificationScroller.classList.add('active')
      this.benefitsScroller.classList.remove('active')
      this.priceScroller.classList.remove('active')
      this.contactScroller.classList.remove('active')
    } else if(window.scrollY < this.windowBottom){
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
    if(window.scrollY < this.benefits + this.TOP_MARGIN){
      this.scroller.classList.remove('fixed')
      this.scroller.style.marginLeft = 0
    } else {
      this.scroller.style.marginLeft = document.getElementsByClassName('container')[0].getBoundingClientRect().x
      this.scroller.classList.add('fixed')
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.benefits = document.getElementById('benefits').getBoundingClientRect().top - this.TOP_MARGIN
    this.specification = document.getElementById('specification').getBoundingClientRect().top - this.TOP_MARGIN
    this.price = document.getElementById('price').getBoundingClientRect().top - this.TOP_MARGIN
    this.contact = document.getElementById('contact').getBoundingClientRect().top - this.TOP_MARGIN
    this.benefitsScroller = document.getElementById('benefitsScroller')
    this.specificationScroller = document.getElementById('specificationScroller')
    this.priceScroller = document.getElementById('priceScroller')
    this.contactScroller = document.getElementById('contactScroller')
    this.windowBottom = document.body.getBoundingClientRect().bottom - window.screen.height
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
              <span>Benefits</span>
            </a>
            <a className="navbar-item" href="#specification" id="specificationScroller">
              <svg className="listNavImage" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M24 24H0V0h24v24z"/>
                <circle fill="currentColor" cx="12" cy="12" r="8"/>
              </svg>
              <span>Spezifikationen</span>
            </a>
            <a className="navbar-item" href="#price" id="priceScroller">
              <svg className="listNavImage" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M24 24H0V0h24v24z"/>
                <circle fill="currentColor" cx="12" cy="12" r="8"/>
              </svg>
              <span>Preise</span>
            </a>
            <a className="navbar-item" href="#contact" id="contactScroller">
              <svg className="listNavImage" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M24 24H0V0h24v24z"/>
                <circle fill="currentColor" cx="12" cy="12" r="8"/>
              </svg>
              <span>Kontakt</span>
            </a>
          </div>
        </div>
    )
  }
}

export default Scroller