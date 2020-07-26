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
    { icon: LinkedinOutlined, message: "LinkedIn" },
    { icon: GithubOutlined, message: "GitHub" },
    { icon: MailOutlined, message: "Send Email" },
    { icon: PhoneOutlined, message: "Call me" }
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
          <Popover
            content={<span className="popoverHeader">{item.message}</span>}
          >
            <item.icon className="headerIcon" />
          </Popover>
        </List.Item>
      )}
    />
  );
};

export default ContactIcons;
