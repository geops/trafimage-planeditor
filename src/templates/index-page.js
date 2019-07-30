import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import layout_bg_1 from '../img/layoutBG_1.svg'
import layout_bg_2 from '../img/layoutBG_2.svg'
import layout_bg_3 from '../img/layoutBG_3.svg'
import discount_badge from '../img/discountBadge_1.svg'

export const IndexPageTemplate = ({
  title,
  brand,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <section className="topSection">
      <div className="container">
        <div className="row is-white">
          <div className="col-12 col-md-6 col-lg-7">
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
            <div className="cardViewer">
              <h1>CardViewer</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="scrollNav row">
              <Link className="navbar-item" to="/">
                Benefits
              </Link>
              <Link className="navbar-item" to="/">
                Spezifikationen
              </Link>
              <Link className="navbar-item" to="/">
                Preise
              </Link>
              <Link className="navbar-item" to="/">
                Kontakt
              </Link>
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
    <section className="benefitsSection">
      <img className="backgroundImage" src={layout_bg_1} alt="" />
      <div className="cardViewer">
        <h1>CardViewer</h1>
      </div>
      <div className="container">
        <div className="logoWall">
          <span>LOGO</span>
          <span>LOGO</span>
          <span>LOGO</span>
          <span>LOGO</span>
        </div>
        <h1 className="is-bolder benefitsHeader rightColumn">Benefits</h1>
        <div className="thinColumnScroller">
          <Link className="navbar-item" to="/">
            Benefits
          </Link>
          <Link className="navbar-item" to="/">
            Spezifikationen
          </Link>
          <Link className="navbar-item" to="/">
            Preise
          </Link>
          <Link className="navbar-item" to="/">
            Kontakt
          </Link>
        </div>
        <div className="accordion rightColumn">

        </div>
      </div>
    </section>
    <section className="spezifikationSection">
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
      <section className="priceSection">
          <div className="container">
              <div className="rightColumn">
                  <img className="discountBadge" src={discount_badge} alt="" />
                  <h1 className="is-bolder priceHeader">Preise</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className="row">
                      <div className="specCol first col-12 col-sm-4">
                          <h5 className="is-bolder">Vorgebene Elemente</h5>
                      </div>
                      <div className="specCol col-12 col-sm-4">
                          <h5 className="is-bolder">Frei verwendbare Elemente</h5>
                      </div>
                      <div className="specCol col-12 col-sm-4">
                          <h5 className="is-bolder">Technisches</h5>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  brand: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        brand={frontmatter.brand}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        brand
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
