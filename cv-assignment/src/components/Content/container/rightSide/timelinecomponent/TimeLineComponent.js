import React from "react";
import PropTypes from "prop-types";
import { Timeline } from "antd";
import TimeLineItemContent from "./TimeLineItemConten";
import "./timeLine.css";

const TimeLineComponent = ({ items, logged }) => (
  <Timeline>
    {items.map(item => (
      <Timeline.Item color='#132B45' key={item.date}>
        <TimeLineItemContent
          contents={[
            { class: "timeLine date", text: item.date },
            { class: "timeLine title", text: item.title },
            { class: "timeLine description", text: item.description }
          ]}
          logged={logged}
        />
      </Timeline.Item>
    ))}
  </Timeline>
);

export default TimeLineComponent;

TimeLineComponent.propTypes = {
  items: PropTypes.array.isRequired,
  logged: PropTypes.bool.isRequired
};
