import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../sass/all.sass'
import useSiteMetadata from './SiteMetadata'

// Locale data
import deData from 'react-intl/locale-data/de'
import frData from 'react-intl/locale-data/fr'

// Messages
import de from '../data/index/de.json'
import fr from '../data/index/fr.json'

const languages = { de, fr }

addLocaleData([...deData, ...frData])

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
// without having to refactor pthe project structure
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
  const localeMessages = JSON.flatten(languages[locale])
  return (
    <div>
      <Helmet>
        <html lang={locale} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        
        <link
          rel="icon"
          type="image/png"
          href="../img/Mapset_Element.png"
        />
        
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar locale={locale} messages={localeMessages} />
      <IntlProvider locale={locale} messages={localeMessages}>
        {children}
      </IntlProvider>
      <Footer locale={locale} messages={localeMessages} />
    </div>
  )
}

export default Layout
