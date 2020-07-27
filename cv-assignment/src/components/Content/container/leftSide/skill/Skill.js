import React from "react";
import PropTypes from "prop-types";
import { Badge } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import EditButton from "../../editButton.js/EditButton";

const Skill = ({ name, bg, color, logged }) => (
  <>
    {logged && <EditButton Icon={MinusCircleOutlined} text="Rimuovi" />}
    <Badge
      count={name}
      style={{ backgroundColor: bg, color: color, minWidth: "102px" }}
      logged={logged}
    />
  </>
);
export default Skill;

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  logged: PropTypes.number.isRequired
};
