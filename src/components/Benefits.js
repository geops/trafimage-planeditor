import React from 'react'
import layout_bg_1 from "../img/layoutBG_1.svg";
import Scroller from "./Scroller";

const Benefits = class extends React.Component {
  render() {
    return (
        <section className="benefitsSection" id="benefits">
          <Scroller />
          <img className="backgroundImage" src={layout_bg_1} alt="" />
          <div className="cardViewer">
            <h1>CardViewer</h1>
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

            </div>
          </div>
        </section>
    )
  }
}

export default Benefits
