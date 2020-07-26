import React from "react";
import SkillsBlock from "./skill/SkillsBlock";
import { languages } from './constants/constants';

const LeftSide = () => (
  <div>
    <SkillsBlock title='Languages' skills={languages.data}/>
  </div>
);
export default LeftSide;
