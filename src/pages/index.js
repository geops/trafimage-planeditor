import React from 'react'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/Layout'
import { Remarkable } from 'remarkable';

import layout_bg_1 from "../img/layoutBG_1.svg";
import layout_bg_2 from '../img/layoutBG_2.svg'
import layout_bg_3 from '../img/layoutBG_3.svg'
import mapset_banner from '../../static/img/Mapset_Logo_RGB_weiss.svg'
import twitter from '../img/social/Twitter_Logo_Blue.svg'
import card_1 from "../img/cards/trackeramsterdam.png";
import Scroller from "../components/Scroller";

// import benefits and features data, for the language needed
import fr_benefits from '../data/benefits/de.json'
import de_benefits from '../data/benefits/fr.json'
import fr_features from '../data/features/de.json'
import de_features from '../data/features/fr.json'

const accordionHandler = function(id){
    console.log(id)
    let item = document.getElementsByName(id)[0]
    if(item.classList.contains('is-expanded')){
        document.getElementsByClassName('accordion-item')[id].classList.remove('is-expanded')
    } else {
        document.getElementsByClassName('accordion-item')[id].classList.add('is-expanded')
    }
}

export const IndexPageTemplate = ({locale}) => {
    let benefits
    let features
    switch(locale) {
        case 'fr': {
            benefits = fr_benefits.benefits
            features = fr_features.features
            break;
        }
        default: {
            benefits = de_benefits.benefits
            features = de_features.features
            break;
        }
    }
    let md = new Remarkable();
    md.set({
        html: true,
        breaks: true
    });
    return (
        <div style={{position:'relative'}}>
            <section className="topSection">
                <div className="container">
                    <div className="row is-white">
                        <div className="col-12 col-lg-7">
                            <div className="row">
                                <div className="headerBadge">
                                    <img className="main-heading" src={mapset_banner} alt="" />
                                    <div className="subtext">
                                        <span><FormattedMessage id="generic.powered by" /> </span>
                                        <span className="is-bolder">evoq</span>
                                        <span className="is-bolder"> | </span>
                                        <span className="is-bolder">geops</span>
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
                                    <FormattedMessage id="generic.Benefits" />
                                </a>
                                <a className="navbar-item" href="#specification">
                                    <FormattedMessage id="generic.So funktioniert's" />
                                </a>
                                <a className="navbar-item" href="#price">
                                    <FormattedMessage id="generic.Preise" />
                                </a>
                                <a className="navbar-item" href="#contact">
                                    <FormattedMessage id="generic.Kontakt" />
                                </a>
                            </div>
                            <div className="headerDescription">
                                <h2><FormattedMessage id="content.page header" /></h2>
                                <p><FormattedMessage id="content.page header description" /></p>
                                <div className="alignContainer row">
                                    <button className="btn"><FormattedMessage id="generic.Demozugang" /></button>
                                    <button className="btn"><FormattedMessage id="generic.Registrieren" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="backgroundImage" src={layout_bg_1} alt=""/>
            </section> {/* top section */}
            <section className="benefitsSection" id="benefits">
                <Scroller/>
                <div className="cardViewContainer">
                    <div className="cardViewer">
                        <img className="base" src={card_1} alt=""/>
                    </div>
                </div>
                <div className="container">
                    <h1 className="is-bolder benefitsHeader rightColumn"><FormattedMessage id="generic.Benefits" /></h1>
                    <div className="accordion rightColumn">
                        {benefits && benefits.map( (benefit, id) => (
                            // TODO style benefit list to match design
                            <div className="accordion-item" key={"benefit_"+id} name={"benefit_"+id}>
                                <button onClick={() => accordionHandler("benefit_"+id)}>
                                    <h5 className="item-head">
                                        <span dangerouslySetInnerHTML={{ __html: md.render(benefit.heading) }} />
                                        <svg className="accordionStateImage plus" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                        </svg>
                                        <svg className="accordionStateImage minus" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M19 13H5v-2h14v2z" fill="currentColor" />
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                        </svg>
                                    </h5>
                                </button>
                                <div className="content">
                                    <p>{benefit.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <img className="backgroundImage" src={layout_bg_2} alt="" />
            </section> {/* benefits section */}
            <section className="featureSection" id="features">
                <div className="container">
                    <div className="rightColumn">
                        <h1 className="is-bolder featuresHeader"><FormattedMessage id="generic.So funktioniert's" /></h1>
                        <p><FormattedMessage id="content.specification description" /></p>
                        <div className="accordion">
                            {features && features.map( (feature, id) => (
                                // TODO style feature list to match design
                                <div className="accordion-item" key={"feature_"+id} name={"feature_"+id}>
                                    <button onClick={() => accordionHandler("feature_"+id)}>
                                        <h5 className="item-head">
                                            <span dangerouslySetInnerHTML={{ __html: md.render(feature.heading) }} />
                                            <svg className="accordionStateImage plus" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                            </svg>
                                            <svg className="accordionStateImage minus" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M19 13H5v-2h14v2z" fill="currentColor" />
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                            </svg>
                                        </h5>
                                    </button>
                                    <div className="content">
                                        <p>{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <img className="backgroundImage bottomImage" src={layout_bg_3} alt="" />
            </section> {/* specification section */}
            <section className="priceSection" id="price">
                <div className="container">
                    <div className="rightColumn">
                        <h1 className="is-bolder priceHeader"><FormattedMessage id="generic.Preise" /></h1>
                        <p><FormattedMessage id="content.price description" /></p>
                        <div className="priceCardArea row">
                            {/* TODO create price box widget and content, refer to geOps for strategy */}
                            <div className="col-6 col-lg-3">
                                <div className="priceCard">
                                    <div className="priceCardHeader">
                                        <div className="padder">
                                            <span className="brandName">Trafimage </span>
                                            <span className="is-bolder title">Mapset</span>
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
                                        <h2 className="is-blue is-bolder no-subtext">gratis</h2>
                                        <button className="btn blue-btn">Anmelden</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="priceCard">
                                    <div className="priceCardHeader">
                                        <div className="padder">
                                            <span className="brandName">Trafimage </span>
                                            <span className="is-bolder title">Mapset</span>
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
                                            <h2 className="is-bolder">2'700.-</h2>
                                            <span className="subtext">(CHF/Jahr)</span>
                                        </div>
                                        <button className="btn blue-btn">Anmelden</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="priceCard">
                                    <div className="priceCardHeader">
                                        <div className="padder">
                                            <span className="brandName">Trafimage </span>
                                            <span className="is-bolder title">Mapset</span>
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
                                            <h2 className="is-bolder ">5'900.-</h2>
                                            <span className="subtext">(CHF/Jahr)</span>
                                        </div>
                                        <button className="btn blue-btn">Anmelden</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="priceCard">
                                    <div className="priceCardHeader">
                                        <div className="padder">
                                            <span className="brandName">Trafimage </span>
                                            <span className="is-bolder title">Mapset</span>
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
                                            <h2 className="is-bolder ">8'400.-</h2>
                                            <span className="subtext">(CHF/Jahr)</span>
                                        </div>
                                        <button className="btn blue-btn">Anmelden</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="conditions is-smaller">
                            <FormattedMessage
                                id="content.conditions text"
                                defaultMessage="* Gemeint ist der Gesamtumfang an Haltestellen, unabhängig von der Anzahl<br/>tatsächlich mit Mapset bearbeiteter Haltestellen"
                            >{txt => <p>{txt}</p>}</FormattedMessage>
                            <span className="is-bolder"><FormattedMessage id="generic.Im Preis inbegriffen sind:" /></span>
                            <FormattedMessage
                                id="content.included in price"
                                defaultMessage="<li>Freie Verwendung ger generierten Pläne (Einhaltung Copyright)</li>
                            <li>Wartung und Betrieb des Portals</li>
                            <li>Automatische Übernahme von Weiterentwicklungen</li>
                            <li>Wöchentliche Aktualisierung des Kartenbildes (OpenStreetMap)</li>
                            <li>Benutzerverwaltung</li>"
                            />
                        </div>
                    </div>
                </div>
            </section> {/* price section */}
            <section className="contactSection" id="contact">
                <img className="backgroundImage" src={layout_bg_2} alt="" />
                <div className="container">
                    <div className="rightColumn">
                        <h1 className="is-bolder contactHeader"><FormattedMessage id="generic.Noch Fragen ?" /></h1>
                        <h5>Wir freuen uns über Ihre Kontaktaufnahme und helfen bei<br />Fragen gerne weiter.</h5>
                        <p>
                            <span className="is-bolder"><FormattedMessage id="generic.Ihr persönlicher Kontakt" /></span><br />
                            <span className="">Mario Härtwig</span><br />
                            <span className="">T 00 000 00 00</span><br />
                            <span className="">E mario.haertwig@geops.de</span>
                        </p>
                        <p>
                            <span className="is-bolder"><FormattedMessage id="generic.Kontakt" /></span><br />
                            <span className="">geOps AG</span><br />
                            <span className="">Eggstr. 42</span><br />
                            <span className="">4402 Frankendorf</span><br />
                            <span className="">info@geops.ch</span>
                        </p>
                        <p>
                            <span className="is-bolder"><FormattedMessage id="generic.Besuchen Sie uns auf Twitter" /></span><br />
                            <img className="twitter" src={twitter} alt="" />
                        </p>
                    </div>
                </div>
            </section> {/* contact section */}
            <div className="aboveFooter"></div>
        </div>
    )
}

const Index = ({ pageContext: { locale } }) => {
    return (
        <Layout locale={locale}>
            <IndexPageTemplate locale={locale} />
        </Layout>
    )
}

export default Index
