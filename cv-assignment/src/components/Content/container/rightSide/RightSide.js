import React from "react";
import ExperiencesBlock from "./experiencesBlock/ExperiencesBlock";
import { education, workExperiences } from "./constants/constants";
import BlocksList from "../BlocksList/BlocksList";

const RightSide = () => {
  return (
    <BlocksList
      Component={ExperiencesBlock}
      listData={[education, workExperiences]}
    />
  );
};
export default RightSide;
