import React from "react";
import ExperiencesBlock from "./experiencesBlock/ExperiencesBlock";
import { List } from "antd";
import { education, workExperiences } from "./constants/constants";

const BlocksList = (Component, title, items) => {
  return (
    <div>
      <List
        size="small"
        dataSource={[education, workExperiences]}
        split={false}
        renderItem={item => (
          <List.Item>
            <Component 
            title={item.title} 
            items={item.data} 
            bg={bg} 
            color={color} />
          </List.Item>
        )}
      />
    </div>
  );
};
export default BlocksList;

BlocksList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  Component: PropTypes.element.isRequired
};

BlocksList.defaultProps = {
  bg: null,
  color: null
};
