import React from "react";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { List } from "antd";

const PersonalInfo = () => {
  const getPersonalData = () => {
    return [
      { label: "20/05/1993", icon: CalendarOutlined },
      { label: "Limbiate (MB)", icon: EnvironmentOutlined }
    ];
  };
  return <div>personal info</div>;
};

export default PersonalInfo;
