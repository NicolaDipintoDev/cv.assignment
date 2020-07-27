import React from "react";
import PropTypes from "prop-types";
import SkillsBlock from "./skill/SkillsBlock";
import { languages, frameworks, swEngineering } from "./constants/constants";
import Message from "./message/Message";
import BlocksList from "../BlocksList/BlocksList";

const LeftSide = ({ logged }) => (
  <>
    <Message />
    <BlocksList
      Component={SkillsBlock}
      listData={[languages, frameworks, swEngineering]}
      logged={logged}
    />
  </>
);
export default LeftSide;

LeftSide.propTypes = {
  logged: PropTypes.bool.isRequired
};