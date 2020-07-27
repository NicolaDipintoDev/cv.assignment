import React from "react";
import PropTypes from "prop-types";
import { Popover } from "antd";

const HeaderIcon = ({ Icon }) => {
  return (
    <Popover content={<span className="popoverHeader">{item.message}</span>}>
      <Icon className="headerIcon" />
    </Popover>
  );
};

export default HeaderIcon;

HeaderIcon.propTypes = {
  Icon: PropTypes.func.isRequired
};
