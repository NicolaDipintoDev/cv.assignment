import React from "react";
import PropTypes from "prop-types";
import CollapseComponent from "../../../CollapseComponents/CollapseComponent";
import TimeLineComponent from "../timelinecomponent/TimeLineComponent";

const ExperiencesBlock = ({title}) => (
  <div>
    <CollapseComponent
      title={title}
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

ExperiencesBlock.propTypes = {
    title: PropTypes.string.isRequired
  };