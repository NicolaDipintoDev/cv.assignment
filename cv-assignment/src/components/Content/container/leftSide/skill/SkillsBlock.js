import React from "react";
import PropTypes from "prop-types";
import CollapseComponent from "../../../CollapseComponents/CollapseComponent";
import Skills from "./Skills";

const SkillsBlock = ({ title, skills, bg, color }) => (
  <div>
    <CollapseComponent
      title={title}
      contentPanel={<Skills items={skills} bg={bg} color={color} />}
    />
  </div>
);

export default SkillsBlock;

SkillsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
