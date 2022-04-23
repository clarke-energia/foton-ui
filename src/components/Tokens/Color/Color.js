import React from "react";
import PropTypes from "prop-types";

import "./color.css";

const Color = ({ label, value }) => {
  return (
    <div className="color-container">
      <p className="color-label">{label}</p>
      <div className="color-circle" style={{ backgroundColor: value }}></div>
    </div>
  );
};

Color.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Color;
