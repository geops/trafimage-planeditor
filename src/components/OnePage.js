import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../sass/all.sass'
import useSiteMetadata from './SiteMetadata'

const OnePage = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/baseline-place-24px.svg"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/baseline-place-24px.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/baseline-place-24px.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/baseline-place-24px.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
        <Footer />
    </div>
  )
}

export default OnePage
