import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill";
import { List } from "antd";

const Skills = ({ items, bg, color }) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3
      }}
      size="small"
      dataSource={items}
      split={false}
      renderItem={item => (
        <List.Item>
          <Skill name={item} bg={bg} color={color} />
        </List.Item>
      )}
    />
  );
};
export default Skills;

Skills.propTypes = {
  items: PropTypes.array.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
