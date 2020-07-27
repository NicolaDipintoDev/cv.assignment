import React from "react";
import PropTypes from "prop-types";
import ExperiencesBlock from "./experiencesBlock/ExperiencesBlock";
import { education, workExperiences } from "./constants/constants";
import BlocksList from "../BlocksList/BlocksList";

const RightSide = ({ logged }) => {
  return (
    <BlocksList
      Component={ExperiencesBlock}
      listData={[education, workExperiences]}
    />
  );
};
export default RightSide;

RightSide.propTypes = {
  logged: PropTypes.bool.isRequired
};