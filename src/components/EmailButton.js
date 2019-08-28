import React from "react";
import PropTypes from "prop-types";
import contact from "../data/contact.json";

function EmailButton({ mode }) {
  return (
    <button className="btn blue-btn">
      <a
        style={{ color: "white" }}
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:${contact.email}?subject=${contact.emailSubject} ${mode}`}
      >
        Anmelden
      </a>
    </button>
  );
}

EmailButton.propTypes = {
  mode: PropTypes.string
};

EmailButton.defaultProps = {
  mode: ""
};

export default EmailButton;
