import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill";
import { List } from "antd";

const Skills = ({ items, bg, color, logged }) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 2,
        sm: 2,
        md: 2,
        lg: 2
      }}
      size="small"
      dataSource={items}
      split={false}
      renderItem={item => (
        <List.Item>
          <Skill name={item} bg={bg} color={color} logged={logged} />
        </List.Item>
      )}
    />
  );
};
export default Skills;

Skills.propTypes = {
  items: PropTypes.array.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  logged: PropTypes.number.isRequired
};
