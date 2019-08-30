import React from "react";
import PropTypes from "prop-types";
import contact from "../data/contact.json";

function EmailButton({ mode }) {
  return (
    <a href={`mailto:${contact.email}?subject=${contact.emailSubject} ${mode}`}>
      <button className="btn blue-btn">Anmelden</button>
    </a>
  );
}

EmailButton.defaultProps = {
  mode: ""
};

EmailButton.propTypes = {
  mode: PropTypes.string
};

export default EmailButton;
