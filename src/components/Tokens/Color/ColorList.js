import React from "react";
import PropTypes from "prop-types";

import Color from "./Color";

import "./color.css";

const ColorList = ({ items }) => (
  <div className="color-list">
    {items.map((item) => (
      <Color {...item} />
    ))}
  </div>
);

ColorList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ColorList;
