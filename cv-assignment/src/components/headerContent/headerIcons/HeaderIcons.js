import React from "react";
import { List } from "antd";
import HeaderIcon from "../headerIcons/headerIcon/HeaderIcon";
import LinkedIcon from "../headerIcons/headerIcon/LinkedIcon";
import { icons } from "./constants/constants";

const HeaderIcons = () => {
  const renderIcon = (index, item) =>
    index < 2 ? (
      <HeaderIcon Icon={item.icon} message={item.message} />
    ) : (
      <LinkedIcon Icon={item.icon} message={item.message} url={item.url} />
    );

  return (
    <List
      size="small"
      dataSource={icons}
      grid={{
        gutter: 16,
        xs: 3
      }}
      split={false}
      renderItem={(item, i) => <List.Item>{renderIcon(i, item)}</List.Item>}
    />
  );
};

export default HeaderIcons;
