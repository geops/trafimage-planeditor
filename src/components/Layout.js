import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../sass/all.sass'
import useSiteMetadata from './SiteMetadata'

// Locale data
import enData from 'react-intl/locale-data/en'
import deData from 'react-intl/locale-data/de'

// Messages
import en from '../data/index/en.json'
import de from '../data/index/de.json'

const messages = { en, de }

console.log(messages)

addLocaleData([...enData, ...deData])

const Layout = ({ locale, children }) => {
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
          type="image/svg"
          href="/img/baseline-place-24px.svg"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/svg"
          href="/img/baseline-place-24px.svg"
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
        <IntlProvider locale={locale} messages={messages[locale]}>
            {children}
        </IntlProvider>
        <Footer />
    </div>
  )
}

export default Layout
