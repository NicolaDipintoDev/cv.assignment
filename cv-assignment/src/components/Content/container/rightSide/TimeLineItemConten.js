import React from "react";

const TimeLineItemContent = ({ contents }) => (
  <div>
    {contents.map(content => (
      <h3 className={content.class}>{content.text}</h3>
    ))}
  </div>
);

export default TimeLineItemContent;
