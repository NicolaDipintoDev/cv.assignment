import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import { List, Popover } from "antd";

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

  return (
    <List
      style={{ position: "absolute", bottom: "0", right: "10px" }}
      grid={{
        gutter: 16,
        xs: 4
      }}
      size="small"
      dataSource={getContactIcons()}
      split={false}
      renderItem={item => (
        <List.Item>
          <a href={item.url} target='_blank'>
            <Popover
              content={<span className="popoverHeader">{item.message}</span>}
            >
              <item.icon className="headerIcon" />
            </Popover>
          </a>
        </List.Item>
      )}
    />
  );
};

export default ContactIcons;