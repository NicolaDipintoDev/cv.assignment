import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import { List } from "antd";
import LinkedIcon from "../headerIcons/headerIcon/LinkedIcon";

const ContactIcons = () => {
  const getContactIcons = () => [
    {
      icon: LinkedinOutlined,
      message: "LinkedIn",
      url: "https://www.linkedin.com/in/nicola-dipinto-893b18195/"
    },
    { icon: GithubOutlined, message: "GitHub", 
    url: "https://github.com/NicolaDipintoDev" },
    { icon: MailOutlined, message: "dipinto.nicola.dev@gmail.com", url: 'mailto:dipinto.nicola.dev@gmail.com' },
    { icon: PhoneOutlined, message: "Call me", url:'tel:+393914618137' }
  ];
// Icon={item.icon} message={item.message}
  return (
    <List
      // style={{ position: "absolute", bottom: "0", right: "10px" }}
      grid={{
        gutter: 16,
        xs: 4
      }}
      size="small"
      dataSource={getContactIcons()}
      split={false}
      renderItem={item => (
        <List.Item>
          <LinkedIcon Icon={item.icon} message={item.message} url={item.url} />
        </List.Item>
      )}
    />
  );
};

export default ContactIcons;
