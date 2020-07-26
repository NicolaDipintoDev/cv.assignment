import React from "react";
import PropTypes from "prop-types";
import { Timeline } from "antd";
import TimeLineItemContent from "./TimeLineItemConten";
import "./timeLine.css";

const TimeLineComponent = ({ items }) => (
  <Timeline>
    <Timeline.Item color="yellow">
      {items.map(item => (
        <TimeLineItemContent
          contents={[
            { class: "timeLine date", text: item.date },
            { class: "timeLine title", text: item.title },
            { class: "timeLine description", text: item.description }
          ]}
        />
      ))}
    </Timeline.Item>
  </Timeline>
);

export default TimeLineComponent;

TimeLineItemContent.propTypes = {
  items: PropTypes.array.isRequired
};
