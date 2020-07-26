import React from "react";

const TimeLineItemContent = ({ contents }) => (
  <div>
    {contents.map(content => (
      <h2 className={content.class}>{content.text}</h2>
    ))}
  </div>
);

export default TimeLineItemContent;
