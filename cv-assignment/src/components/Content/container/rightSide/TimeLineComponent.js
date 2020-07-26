import React from "react";
import { Timeline } from "antd";
import TimeLineItemContent from "./TimeLineItemConten";

const TimeLineComponent = () => (
  <Timeline>
    <Timeline.Item color="yellow">
      <TimeLineItemContent />
    </Timeline.Item>
    <Timeline.Item color="yellow">
      <TimeLineItemContent />
    </Timeline.Item>
  </Timeline>
);

export default TimeLineComponent;
