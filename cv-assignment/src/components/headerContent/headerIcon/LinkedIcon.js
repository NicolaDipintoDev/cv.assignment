import React from "react";
import PropTypes from "prop-types";
import HeaderIcon from "./HeaderIcon";

const LinkedIcon = ({ url, icon, message }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <HeaderIcon Icon={icon} message={message} />
    </a>
  );
};

export default LinkedIcon;

LinkedIcon.propTypes = {
  url: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};
