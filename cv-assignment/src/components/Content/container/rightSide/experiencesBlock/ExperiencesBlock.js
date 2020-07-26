import React from "react";
import CollapseComponent from "../../../CollapseComponents/CollapseComponent";
import TimeLineComponent from "../timelinecomponent/TimeLineComponent";


const ExperiencesBlock = () => (
  <div>
    <CollapseComponent title='Education' contentPanel={<TimeLineComponent />} />
  </div>
);

export default ExperiencesBlock;
