import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import { List } from "antd";

const ContactIcons = () => {
  const getContactIcons = () => [
    { icon: LinkedinOutlined },
    { icon: GithubOutlined },
    { icon: MailOutlined },
    { icon: PhoneOutlined }
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
          <item.icon className="headerIcon" />
        </List.Item>
      )}
    />
  );
};

export default ContactIcons;
