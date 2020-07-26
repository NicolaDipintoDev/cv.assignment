import React from "react";
import Skill from "./Skill";
import { List } from "antd";

const Skills = () => {
  const skills = [
    { name: "react", bg: "#FAD563", color: "#132B45" },
    { name: "react", bg: "#FAD563", color: "#132B45" },
    { name: "react", bg: "#FAD563", color: "#132B45" },
    { name: "react", bg: "#FAD563", color: "#132B45" },
    { name: "react", bg: "#FAD563", color: "#132B45" },
    { name: "react", bg: "#FAD563", color: "#132B45" }
  ];
  return (
    <List
      grid={{
        gutter: 16,
        xs: 5,
        sm:6,
        md: 8, 
        lg: 10
      }}
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
