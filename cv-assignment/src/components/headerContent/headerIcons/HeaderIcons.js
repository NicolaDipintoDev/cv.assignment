import React from "react";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import { List } from "antd";
import HeaderIcon from "../headerIcons/headerIcon/HeaderIcon";
import LinkedIcon from "../headerIcons/headerIcon/LinkedIcon";

const HeaderIcons = () => {
  const icons = [
    { message: "20/05/1993", icon: CalendarOutlined },
    { message: "Limbiate (MB)", icon: EnvironmentOutlined },
    {
      icon: LinkedinOutlined,
      message: "LinkedIn",
      url: "https://www.linkedin.com/in/nicola-dipinto-893b18195/"
    },
    {
      icon: GithubOutlined,
      message: "GitHub",
      url: "https://github.com/NicolaDipintoDev"
    },
    {
      icon: MailOutlined,
      message: "dipinto.nicola.dev@gmail.com",
      url: "mailto:dipinto.nicola.dev@gmail.com"
    },
    { icon: PhoneOutlined, message: "Call me", url: "tel:+393914618137" }
  ];

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
        xs: 6
      }}
      split={false}
      renderItem={(item, i) => <List.Item>{renderIcon(i, item)}</List.Item>}
    />
  );
};

export default HeaderIcons;
