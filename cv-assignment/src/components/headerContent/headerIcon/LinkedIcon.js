import React from "react";
import PropTypes from "prop-types";
import HeaderIcon from "./HeaderIcon";

const LinkedIcon = ({ url, Icon, message }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <HeaderIcon Icon={Icon} message={message} />
    </a>
  );
};

export default LinkedIcon;

LinkedIcon.propTypes = {
  url: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};
