import React from "react";
import { Timeline } from "antd";
import TimeLineItemContent from "./TimeLineItemConten";

const TimeLineComponent = () => (
  <Timeline>
    <Timeline.Item color="yellow">
      <TimeLineItemContent
        contents={[
          { class: "TimeLine_date", text: "01/2020 - now" },
          { class: "TimeLine_title", text: "Company name" },
          { class: "TimeLine_description", text: "fullStack sdksjskjklsjsljdlsjdsljdlsjdlsjdls" }
        ]}
      />
    </Timeline.Item>
  </Timeline>
);

export default TimeLineComponent;
