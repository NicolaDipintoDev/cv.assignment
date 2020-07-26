import React from "react";
import PropTypes from "prop-types";
import CollapseComponent from "../../../CollapseComponents/CollapseComponent";
import TimeLineComponent from "../timelinecomponent/TimeLineComponent";

const ExperiencesBlock = ({ title, experiences }) => (
  <div>
    <CollapseComponent
      title={title}
      contentPanel={<TimeLineComponent items={experiences} />}
    />
  </div>
);

export default ExperiencesBlock;

ExperiencesBlock.propTypes = {
  title: PropTypes.string.isRequired,
  experiences: PropTypes.array.isRequired
};
