import React from "react";
import PropTypes from "prop-types";
import Skills from "./Skills";
import Block from "../../../Block/Block";

const SkillsBlock = ({ title, skills, bg, color }) => (
  <Block Component={Skills} title={title}  items={skills} bg={bg} color={color} />
);

export default SkillsBlock;

SkillsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
