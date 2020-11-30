import React, { useState } from "react";
import { Error404SVG } from "@geops/geops-ui";
import Layout from "../components/Layout";
import userManager from "../utils/userManager";

import "../sass/404.sass";

const NotFoundPage = ({ pageContext: { locale } }) => {
  const [user, setUser] = useState(null);

  if (typeof window !== "undefined" && userManager) {
    userManager.events.addUserLoaded((userr) => {
      setUser(userr);
    });
  }

  return (
    <Layout locale={locale} user={user}>
      <div className="notfound-container">
        <img src={Error404SVG} alt="Error 404 - Page not found" />
        <a href="/">
          <button className="btn blue-btn">Startseite</button>
        </a>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
