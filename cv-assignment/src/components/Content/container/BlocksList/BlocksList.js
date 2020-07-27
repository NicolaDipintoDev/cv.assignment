import React from "react";
import PropTypes from "prop-types";
import { List } from "antd";

const BlocksList = ({ Component, listData }) => {
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
              bg={item.bg}
              color={item.color}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default BlocksList;

BlocksList.propTypes = {
  Component: PropTypes.func.isRequired,
  listData: PropTypes.array.isRequired
};
