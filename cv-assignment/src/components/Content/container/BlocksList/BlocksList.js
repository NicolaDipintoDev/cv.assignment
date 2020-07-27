import React from "react";
import { List } from "antd";

const BlocksList = (Component, listData) => {
  return (
    <div>
      <List
        size="small"
        dataSource={listData}
        split={false}
        renderItem={item => (
          <List.Item>
            <Component 
            title={item.title} 
            data={item.data} 
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
  Component: PropTypes.element.isRequired,
  listData:PropTypes.array.isRequired,
};

BlocksList.defaultProps = {
  bg: null,
  color: null
};
