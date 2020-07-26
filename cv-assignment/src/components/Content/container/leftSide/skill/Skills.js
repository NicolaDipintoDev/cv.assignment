import React from "react";
import PropTypes from "prop-types";
import { Badge } from "antd";

const Skill = ({ name, bg, color }) => (
  <Badge count={name} style={{ backgroundColor: bg, color: color }} />
);
export default Skill;

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
