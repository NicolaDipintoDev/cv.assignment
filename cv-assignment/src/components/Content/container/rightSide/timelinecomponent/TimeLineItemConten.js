import React from "react";
import PropTypes from "prop-types";
import EditButton from "../../editButton.js/EditButton";
import { MinusCircleOutlined } from "@ant-design/icons";

const TimeLineItemContent = ({ contents, logged }) => (
  <div>
    {logged && <EditButton Icon={MinusCircleOutlined} text="Rimuovi" />}
    {contents.map( (content, i) => (
      <h3 key={i+content.text.substr(0,5)} className={content.class}>{content.text}</h3>
    ))}
  </div>
);

export default TimeLineItemContent;

TimeLineItemContent.propTypes = {
  contents: PropTypes.array.isRequired,
  logged: PropTypes.number.isRequired
};