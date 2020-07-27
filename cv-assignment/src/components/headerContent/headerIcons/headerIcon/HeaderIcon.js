import React from "react";
import PropTypes from "prop-types";
import { Popover } from "antd";

const HeaderIcon = ({ Icon, message, onClick = null }) => {
  return (
    <Popover content={<span className="popoverHeader">{message}</span>}>
      <Icon className="headerIcon" onClick={onClick} />
    </Popover>
  );
};

export default HeaderIcon;

HeaderIcon.propTypes = {
  Icon: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

HeaderIcon.defaultProps = {
  onClick: null,
};
