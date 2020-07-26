import React from "react";
import CollapseComponent from "../../../CollapseComponents/CollapseComponent";
import TimeLineComponent from "../timelinecomponent/TimeLineComponent";

const ExperiencesBlock = () => (
  <div>
    <CollapseComponent
      title="Education"
      contentPanel={
        <TimeLineComponent
          items={[
            {
              date: "01/2020 - now",
              title: "Company name",
              description: "skdsjkdjskdjskjdksjdskjdskjdskjdskjdks"
            }
          ]}
        />
      }
    />
  </div>
);

export default ExperiencesBlock;
