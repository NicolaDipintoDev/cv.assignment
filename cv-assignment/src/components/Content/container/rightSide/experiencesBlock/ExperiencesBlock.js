import React from "react";
import PropTypes from "prop-types";
import TimeLineComponent from "../timelinecomponent/TimeLineComponent";
import Block from "../../../Block/Block";

const ExperiencesBlock = ({ title, data }) => (
  <Block Component={TimeLineComponent} title={title} items={data} />
);

export default ExperiencesBlock;

ExperiencesBlock.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};
