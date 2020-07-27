import React from "react";
import PropTypes from "prop-types";
import TimeLineComponent from "../timelinecomponent/TimeLineComponent";
import Block from "../../../Block/Block";

const ExperiencesBlock = ({ title, experiences }) => (
  <Block Component={TimeLineComponent} title={title}  items={experiences}/>
);

export default ExperiencesBlock;

ExperiencesBlock.propTypes = {
  title: PropTypes.string.isRequired,
  experiences: PropTypes.array.isRequired
};
