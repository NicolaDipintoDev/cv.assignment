import React from "react";
import SkillsBlock from "./skill/SkillsBlock";
import { languages, frameworks, swEngineering } from "./constants/constants";
import { List } from "antd";
import Message from "./message/Message";
import BlocksList from "../BlocksList/BlocksList";

const LeftSide = () => (
  <>
    <Message />
    <BlocksList
      Component={SkillsBlock}
      listData={[languages, frameworks, swEngineering]}
    />
  </>
);
export default LeftSide;
