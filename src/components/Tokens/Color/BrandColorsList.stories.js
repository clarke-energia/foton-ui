import React from "react";

import ColorList from "./ColorList";
import tokens from "../index";

export default {
  component: ColorList,
  title: "Tokens/Colors/Brand Colors",
};

const ListTemplate = (args) => <ColorList {...args} />;

export const Gray = ListTemplate.bind({});
Gray.args = {
  items: [
    {
      label: "grayOne",
      value: tokens.decisions.color.grayOne,
    },
    {
      label: "grayTwo",
      value: tokens.decisions.color.grayTwo,
    },
    {
      label: "grayThree",
      value: tokens.decisions.color.grayThree,
    },
    {
      label: "grayFour",
      value: tokens.decisions.color.grayFour,
    },
    {
      label: "grayFive",
      value: tokens.decisions.color.grayFive,
    },
  ],
};
