import React, { useState } from 'react'
import Cookies from 'js-cookie'

import '../sass/tracker.sass'

export default function TrackingDialog () {
  
  const [tracking, setTracking] = useState(Cookies.get('tracking'))
  
  function acceptTracking () {
    Cookies.set('tracking', true)
    setTracking(Cookies.get('tracking'))
  }

  return (
    !tracking || tracking === undefined ?
    <div className="tracking-wrapper">
      <div className="tracking-window">
        <section className="text">
        Diese Website nutzt Cookies, um bestmögliche Funktionalität bieten zu können.
        </section>
        <section className="actions">
          <button onClick={() => { window.location = 'https://geops.ch/node/5?language=de'}}>Mehr Informationen</button>
          <button onClick={acceptTracking}>Akzeptieren</button>
        </section>
      </div>
    </div>
    : ''
  )  
}
