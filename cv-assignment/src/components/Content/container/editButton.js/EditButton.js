import React from "react";
import PropTypes from "prop-types";
import { Button, Popover } from "antd";

const EditButton = ({ Icon, text }) => (
  <Popover content={<span className="popoverCollapse">{text}</span>}>
    <Button
      ghost
      shape="circle"
      icon={<Icon className="collapseIcon" />}
    />
  </Popover>
);

export default EditButton;

EditButton.propTypes = {
  Icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
