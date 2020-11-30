import React from "react";
import { Error404SVG } from "@geops/geops-ui";
import Layout from "../components/Layout";

import "../sass/404.sass";

const NotFoundPage = () => (
  <Layout>
    <div className="notfound-container">
      <img src={Error404SVG} alt="Error 404 - Page not found" />
      <a href="/">
        <button className="btn blue-btn">Startseite</button>
      </a>
    </div>
  </Layout>
);

export default NotFoundPage;
