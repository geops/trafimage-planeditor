import React from 'react'
import PropTypes from 'prop-types'

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import OnePage from '../components/OnePage'
import Benefits from '../components/Benefits'
import layout_bg_2 from '../img/layoutBG_2.svg'
import layout_bg_3 from '../img/layoutBG_3.svg'
import discount_badge from '../img/discountBadge_1.svg'
import twitter from '../img/Twitter_Logo_Blue.svg'
import card_1 from "../img/cards/trackeramsterdam.png";

export const IndexPageTemplate = ({
  title,
  brand,
  heading,
  benefits
}) => (
  <div style={{position:'relative'}}>
    <section className="topSection">
      <div className="container">
        <div className="row is-white">
          <div className="col-12 col-lg-7">
            <div className="row">
              <div className="headerBadge">
                <span className="brandName">{brand}</span>
                <h1 className="is-bolder">{title}</h1>
                <div className="subtext">
                  <span>unterstützt durch </span>
                  <span className="is-bold">evoq</span>
                  <span> | </span>
                  <span className="is-bold">geops</span>
                </div>
              </div>
            </div>
            <div className="cardViewContainer" >
                <div className="cardViewer" >
                    <img className="l1" src={card_1} alt="" />
                    <img className="" src={card_1} alt="" />
                    <img className="l-1 base" src={card_1} alt="" />
                </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="scrollNav row">
              <a className="navbar-item" href="#benefits">
                  Benefits
              </a>
              <a className="navbar-item" href="#specification">
                Spezifikationen
              </a>
              <a className="navbar-item" href="#price">
                Preise
              </a>
              <a className="navbar-item" href="#contact">
                Kontakt
              </a>
            </div>
            <div className="headerDescription">
              <h1>Attraktive Situationspläne für den öffentlichen Verkehr</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="alignContainer row">
                <button className="btn">Demozungang</button>
                <button className="btn">Preismodelle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <Benefits benefits={benefits} />
    <section className="spezifikationSection" id="specification">
        <img className="backgroundImage" src={layout_bg_2} alt="" />
        <div className="container">
            <div className="rightColumn">
                <h1 className="is-bolder speziHeader">Spezifikationen</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="row specRow">
                    <div className="specCol first col-12 col-sm-4">
                        <h5 className="is-bolder">Vorgebene Elemente</h5>
                        <ul>
                            <li><span>Hintergrundbild inkl.</span></li>
                            <li><span>Nordpfeil, Massstabsbalken</span></li>
                            <li><span>Copyright</span></li>
                            <li><span>Schriftarten</span></li>
                        </ul>
                    </div>
                    <div className="specCol col-12 col-sm-4">
                        <h5 className="is-bolder">Frei verwendbare Elemente</h5>
                        <ul>
                            <li><span>Piktogramme</span></li>
                            <li><span>Linien (Wegführung)</span></li>
                            <li><span>Situationsschild</span></li>
                        </ul>
                    </div>
                    <div className="specCol col-12 col-sm-4">
                        <h5 className="is-bolder">Technisches</h5>
                        <ul>
                            <li><span>Bildausgabe: PDF</span></li>
                            <li><span>FOrmat: XX cm x XX cm</span></li>
                            <li><span>Auflösung: 300 dpi</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <img className="backgroundImage bottomImage" src={layout_bg_3} alt="" />
    </section>
      <section className="priceSection" id="price">
          <div className="container">
              <div className="rightColumn">
                  <img className="discountBadge" src={discount_badge} alt="" />
                  <h1 className="is-bolder priceHeader">Preise</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className="priceCardArea row">
                      <div className="col-6 col-lg-3">
                          <div className="priceCard">
                              <div className="priceCardHeader">
                                  <div className="padder">
                                      <span className="brandName">{brand} </span>
                                      <span className="is-bolder title">{title}</span>
                                      <h2 className="is-bolder">FREE</h2>
                                  </div>
                                  <img className="backgroundImage" src={layout_bg_2} alt="" />
                              </div>
                              <div className="priceCardBody">
                                  <div className="desc">
                                      <span className="">Für Transport- unternehmen mit</span><br />
                                      <span className="is-bolder">bis zu<br />10 Haltestellen *</span>
                                  </div>
                                  <hr />
                                  <h1 className="gratis">gratis</h1>
                                  <button className="btn blue-btn">Anmelden</button>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 col-lg-3">
                          <div className="priceCard">
                              <div className="priceCardHeader">
                                  <div className="padder">
                                      <span className="brandName">{brand} </span>
                                      <span className="is-bolder title">{title}</span>
                                      <h2 className="is-bolder">MINI</h2>
                                  </div>
                                  <img className="backgroundImage" src={layout_bg_2} alt="" />
                              </div>
                              <div className="priceCardBody">
                                  <div className="desc">
                                      <span className="">Für Transport- unternehmen mit</span><br />
                                      <span className="is-bolder">11-200<br />Haltestellen *</span><br />
                                      <span className="">oder</span><br />
                                      <span className="is-bolder">1-10 Bahnhöfe</span>
                                  </div>
                                  <hr />
                                  <div className="price">
                                      <span className="is-smaller">Normalpreis</span>
                                      <h4 className="is-bolder oldPrice">2'700.-</h4>
                                      <span className="is-cyan">Mit 10%</span><br />
                                      <span className="is-cyan">Einführungsrabatt</span>
                                      <h2 className="is-bolder is-cyan">2'430.-</h2>
                                      <span className="is-cyan">(CHF/Jahr)</span>
                                  </div>
                                  <button className="btn">Anmelden</button>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 col-lg-3">
                          <div className="priceCard">
                              <div className="priceCardHeader">
                                  <div className="padder">
                                      <span className="brandName">{brand} </span>
                                      <span className="is-bolder title">{title}</span>
                                      <h2 className="is-bolder">MIDI</h2>
                                  </div>
                                  <img className="backgroundImage" src={layout_bg_2} alt="" />
                              </div>
                              <div className="priceCardBody">
                                  <div className="desc">
                                      <span className="">Für Transport- unternehmen mit</span><br />
                                      <span className="is-bolder">201-500<br />Haltestellen *</span><br />
                                      <span className="">oder</span><br />
                                      <span className="is-bolder">11-100 Bahnhöfe</span>
                                  </div>
                                  <hr />
                                  <div className="price">
                                      <span className="is-smaller">Normalpreis</span>
                                      <h4 className="is-bolder oldPrice">5'900.-</h4>
                                      <span className="is-cyan">Mit 10%</span><br />
                                      <span className="is-cyan">Einführungsrabatt</span>
                                      <h2 className="is-bolder is-cyan">5'310.-</h2>
                                      <span className="is-cyan">(CHF/Jahr)</span>
                                  </div>
                                  <button className="btn">Anmelden</button>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 col-lg-3">
                          <div className="priceCard">
                              <div className="priceCardHeader">
                                  <div className="padder">
                                      <span className="brandName">{brand} </span>
                                      <span className="is-bolder title">{title}</span>
                                      <h2 className="is-bolder">MAXI</h2>
                                  </div>
                                  <img className="backgroundImage" src={layout_bg_2} alt="" />
                              </div>
                              <div className="priceCardBody">
                                  <div className="desc">
                                      <span className="">Für Transport- unternehmen mit</span><br />
                                      <span className="is-bolder">mehr als 501<br />Haltestellen *</span><br />
                                      <span className="">oder</span><br />
                                      <span className="is-bolder">101-200 Bahnhöfe</span>
                                  </div>
                                  <hr />
                                  <div className="price">
                                      <span className="is-smaller">Normalpreis</span>
                                      <h4 className="is-bolder oldPrice">8'400.-</h4>
                                      <span className="is-cyan">Mit 10%</span><br />
                                      <span className="is-cyan">Einführungsrabatt</span>
                                      <h2 className="is-bolder is-cyan">7'560.-</h2>
                                      <span className="is-cyan">(CHF/Jahr)</span>
                                  </div>
                                  <button className="btn">Anmelden</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="conditions is-smaller">
                      <p>* Gemeint ist der Gesamtumfang an Haltestellen, unabhängig von der Anzahl <br />tatsächlich mit PlanEditor bearbeiteter Haltestellen</p>
                      <span className="is-bolder">Im Preis inbegriffen sind:</span>
                      <ul>
                          <li>Freie Verwendung ger generierten Pläne (Einhaltung Copyright)</li>
                          <li>Wartung und Betrieb des Portals</li>
                          <li>Automatische Übernahme von Weiterentwicklungen</li>
                          <li>Wöchentliche Aktualisierung des Kartenbildes (OpenStreetMap)</li>
                          <li>Benutzerverwaltung</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      <section className="contactSection" id="contact">
          <img className="backgroundImage" src={layout_bg_2} alt="" />
          <div className="container">
              <div className="rightColumn">
                  <h1 className="is-bolder contactHeader">Noch Fragen ?</h1>
                  <h5>Wir freuen uns über Ihre Kontaktaufnahme und helfen bei<br />Fragen gerne weiter.</h5>
                  <p>
                      <span className="is-bolder">Ihr persönlicher Kontakt</span><br />
                      <span className="">Mario Härtwig</span><br />
                      <span className="">T 00 000 00 00</span><br />
                      <span className="">E mario.haertwig@geops.de</span>
                  </p>
                  <p>
                      <span className="is-bolder">Kontakt</span><br />
                      <span className="">geOps AG</span><br />
                      <span className="">Eggstr. 42</span><br />
                      <span className="">4402 Frankendorf</span><br />
                      <span className="">info@geops.ch</span>
                  </p>
                  <p>
                      <span className="is-bolder">Besuchen Sie uns auf Twitter</span><br />
                      <img className="twitter" src={twitter} alt="" />
                  </p>
              </div>
          </div>
      </section>
      <div className="aboveFooter"></div>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  brand: PropTypes.string,
  heading: PropTypes.string,
  benefits: PropTypes.array,
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    console.log(addLocaleData(en))
    return (
        <OnePage>
            <IndexPageTemplate
                title={frontmatter.title}
                brand={frontmatter.brand}
                heading={frontmatter.heading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                benefits={frontmatter.benefits}
            />
        </OnePage>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }){
      frontmatter {
        title
        brand
        benefits {
          heading
          subheading
          text
        }
      }
    }
  }
`
