import React from "react";
import PropTypes from "prop-types";
import CollapseComponent from "../../../CollapseComponents/CollapseComponent";
import Skills from './Skills';

const SkillsBlock = ({title, skills}) => (
  <div>
    <CollapseComponent
      title={title}
      contentPanel={
        <Skills
          items={skills}
        />
      }
    />
  </div>
);

export default SkillsBlock;

SkillsBlock.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
  };