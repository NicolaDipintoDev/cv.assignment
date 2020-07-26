import React from "react";
import Skill from "./Skill";
import { List } from "antd";

const Skills = () => {
  const skills = [{ name: "react", bg: "#FAD563", color: "#132B45" }];
  return (
    <List
      size="small"
      dataSource={skills}
      split={false}
      renderItem={item => (
        <List.Item>
          <Skill name={item.name} bg={item.bg} color={item.color} />
        </List.Item>
      )}
    />
  );
};
export default Skills;
