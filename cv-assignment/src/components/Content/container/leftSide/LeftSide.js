import React from "react";
import SkillsBlock from "./skill/SkillsBlock";
import { languages, frameworks, swEngineering } from "./constants/constants";
import { List } from "antd";

const LeftSide = () => (
  <List
    size="small"
    dataSource={[languages, frameworks, swEngineering]}
    split={false}
    renderItem={item => (
      <List.Item>
        <SkillsBlock
          title="Languages"
          skills={item.data}
          bg={item.bg}
          color={item.color}
        />
      </List.Item>
    )}
  />
);
export default LeftSide;
