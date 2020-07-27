import React from "react";
import ExperiencesBlock from "./experiencesBlock/ExperiencesBlock";
import { List } from "antd";
import { education, workExperiences } from './constants/constants';

const RightSide = () => {
 
  return (
    <div>
      <List
        size="small"
        dataSource={[education, workExperiences]}
        split={false}
        renderItem={item => (
          <List.Item>
            <ExperiencesBlock
              title={item.title}
              data={item.experiences}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default RightSide;
