import React from 'react'
import layout_bg_1 from "../img/layoutBG_1.svg";
import Scroller from "./Scroller";
import card_1 from "../img/cards/trackeramsterdam.png";

const Benefits = ({
    benefits
  }) => {
    return (
    <section className="benefitsSection" id="benefits">
        <Scroller/>
        <img className="backgroundImage" src={layout_bg_1} alt=""/>
        <div className="cardViewContainer">
            <div className="cardViewer">
                <img className="base" src={card_1} alt=""/>
            </div>
        </div>
        <div className="container">
            <div className="logoWall">
                <span>Zufriedene Kunden</span>
                <span>LOGO</span>
                <span>LOGO</span>
                <span>LOGO</span>
            </div>
            <h1 className="is-bolder benefitsHeader rightColumn">Benefits</h1>
            <div className="accordion rightColumn">
                {benefits && benefits.map( (benefit, id) => (
                    <div className="item" key={id}>
                        <h5>
                            <span className="is-bolder">{benefit.heading}</span>
                            <span>{benefit.subheading}</span>
                        </h5>
                        <p>{benefit.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Benefits
