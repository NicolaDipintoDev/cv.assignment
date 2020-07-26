import React from "react";
import {
  CalendarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { List } from "antd";

const PersonalData = () => {
  const getPersonalData = () => {
    return [
      { label: "20/05/1993", icon: CalendarOutlined },
      { label: "Limbiate (MB)", icon: EnvironmentOutlined }
    ];
  };

  return (
    <List
      size="small"
      dataSource={getPersonalData()}
      split={false}
      renderItem={item => (
        <List.Item>
          <item.icon className="headerIcon" />{" "}
          <span className="headerText">{item.label}</span>
        </List.Item>
      )}
    />
  );
};

export default PersonalData;
