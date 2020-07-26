import React from "react";
import PropTypes from "prop-types";

const TimeLineItemContent = ({ contents }) => (
  <div>
    {contents.map(content => (
      <h3 className={content.class}>{content.text}</h3>
    ))}
  </div>
);

export default TimeLineItemContent;

TimeLineItemContent.propTypes = {
  contents: PropTypes.array.isRequired,
};