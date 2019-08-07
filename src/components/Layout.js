import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../sass/all.sass'
import useSiteMetadata from './SiteMetadata'

// Locale data
import deData from 'react-intl/locale-data/en'

// Messages
import de from '../data/index/de.json'

const languages = { de }

addLocaleData([...deData])

// TODO - if necessary - create dynamic language import.
//  The below code did not work for that purpose
// const locales = require('../data/locales')
// Object.keys(locales).forEach(key => {
//   const possibleLocale = locales[key].locales || 'en'
//   const reactData = 'react-intl/locale-data/'+possibleLocale
//   addLocaleData(require(`${reactData}`))
// })

// flattening json data here provides a solution for the react-intl
// inability to traverse nested data whilst constructing FormattedMessage's
// without having to refactor the project structure
JSON.flatten = function (data) {
    var result = {};
    
    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            for (var i = 0, l = cur.length; i < l; i++)
                recurse(cur[i], prop + "[" + i + "]");
            if (l === 0) result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty && prop) result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
};

const Layout = ({ locale, children }) => {
  const { title, description } = useSiteMetadata()
  const pageMessages = JSON.flatten(languages[locale])
  return (
    <div>
      <Helmet>
        <html lang={locale} />
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
      <Navbar locale={locale} messages={languages[locale]} />
      <IntlProvider locale={locale} messages={pageMessages}>
        {children}
      </IntlProvider>
      <Footer locale={locale} messages={languages[locale]} />
    </div>
  )
}

export default Layout
