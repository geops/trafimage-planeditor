import React from "react";

import contact from "../data/contact.json";

function EmailButton() {
  return (
    <button className="btn blue-btn">
      <a
        style={{ color: "white" }}
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:${contact.email}?subject=${contact.emailSubject}`}
      >
        Anmelden
      </a>
    </button>
  );
}

export default EmailButton;
