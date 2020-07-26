import React from "react";
import PropTypes from "prop-types";

const TimeLineItemContent = ({ contents }) => (
  <div>
    {contents.map( (content, i) => (
      <h3 key={i+content.text.substr(0,5)} className={content.class}>{content.text}</h3>
    ))}
  </div>
);

export default TimeLineItemContent;

TimeLineItemContent.propTypes = {
  contents: PropTypes.array.isRequired,
};