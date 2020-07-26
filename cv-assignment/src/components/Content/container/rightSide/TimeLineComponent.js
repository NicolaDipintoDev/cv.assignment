import React from "react";
import { Timeline } from "antd";
import TimeLineItemContent from "./TimeLineItemConten";
import './timeLine.css';

const TimeLineComponent = () => (
  <Timeline>
    <Timeline.Item color="yellow">
      <TimeLineItemContent
        contents={[
          { class: "timeLine date", text: "01/2020 - now" },
          { class: "timeLine title", text: "Company name" },
          { class: "timeLine description", text: "fullStack sdksjskjklsjsljdlsjdsljdlsjdlsjdls" }
        ]}
      />
    </Timeline.Item>
  </Timeline>
);

export default TimeLineComponent;
