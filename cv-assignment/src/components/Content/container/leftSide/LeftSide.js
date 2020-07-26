import React from "react";
import SkillsBlock from "./skill/SkillsBlock";
import { languages } from "./constants/constants";

const LeftSide = () => (
  <div>
    <SkillsBlock
      title="Languages"
      skills={languages.data}
      bg={languages.bg}
      color={languages.color}
    />
  </div>
);
export default LeftSide;
