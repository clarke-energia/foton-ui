import React from "react";

import Color from "./Color";
import tokens from "../index";

export default {
  component: Color,
  title: "Tokens/Colors/Brand Colors",
};

const Template = (args) => <Color {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "White",
  value: tokens.choices.color.base.white,
};

export const Black = Template.bind({});
Black.args = {
  label: "Black",
  value: tokens.choices.color.base.black,
};
