import React from "react";
import PropTypes from "prop-types";
import { Popover } from "antd";

const HeaderIcon = ({ Icon, message }) => {
  return (
    <Popover content={<span className="popoverHeader">{message}</span>}>
      <Icon className="headerIcon" />
    </Popover>
  );
};

export default HeaderIcon;

HeaderIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
