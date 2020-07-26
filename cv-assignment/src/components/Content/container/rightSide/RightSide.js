import React from "react";
import ExperiencesBlock from "./experiencesBlock/ExperiencesBlock";

const RightSide = () => (
  <div>
    <ExperiencesBlock
      title="Education"
      experiences={[
        {
          date: "01/2020 - now",
          title: "Company name",
          description: "skdsjkdjskdjskjdksjdskjdskjdskjdskjdks"
        },
        {
          date: "01/2020 - now",
          title: "Company name",
          description: "skdsjkdjskdjskjdksjdskjdskjdskjdskjdks"
        }
      ]}
    />
  </div>
);

export default RightSide;
