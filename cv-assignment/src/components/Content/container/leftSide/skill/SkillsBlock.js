import React from "react";
import PropTypes from "prop-types";
import Skills from "./Skills";
import Block from "../../../Block/Block";

const SkillsBlock = ({ title, data, bg, color, logged }) => (
  <Block
    Component={Skills}
    title={title}
    items={data}
    bg={bg}
    color={color}
    logged={logged}
  />
);

export default SkillsBlock;

SkillsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired
};
