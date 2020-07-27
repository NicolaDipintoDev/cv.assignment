import React from "react";
import { List } from "antd";
import HeaderIcon from "../headerIcons/headerIcon/HeaderIcon";
import LinkedIcon from "../headerIcons/headerIcon/LinkedIcon";
import { icons } from "./constants/constants";
import Email from "./headerIcon/Email";

const HeaderIcons = () => {
  const renderIcon = (index, item) => {
    if (index < 2) {
      return <HeaderIcon Icon={item.icon} message={item.message} />;
    }

    if (index > 1 && index < 5) {
      return (
        <LinkedIcon Icon={item.icon} message={item.message} url={item.url} />
      );
    }

    return <Email />;
  };

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
