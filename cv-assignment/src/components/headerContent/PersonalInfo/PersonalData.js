import React from "react";
import {
  CalendarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { List } from "antd";
import HeaderIcon from "../headerIcons/headerIcon/HeaderIcon";

const PersonalData = () => {
  const getPersonalData = () => {
    return [
      { message: "20/05/1993", icon: CalendarOutlined },
      { message: "Limbiate (MB)", icon: EnvironmentOutlined }
    ];
  };

  return (
    <List
      size="small"
      dataSource={getPersonalData()}
      grid={{
        gutter: 16,
        xs: 2
      }}
      split={false}
      renderItem={item => (
        <List.Item>
          <HeaderIcon Icon={item.icon} message={item.message}/>
        </List.Item>
      )}
    />
  );
};

export default PersonalData;
