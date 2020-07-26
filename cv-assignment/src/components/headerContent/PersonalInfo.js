import React from "react";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import { List, Row, Col } from "antd";

const PersonalInfo = () => {
  const getPersonalData = () => {
    return [
      { label: "20/05/1993", icon: CalendarOutlined },
      { label: "Limbiate (MB)", icon: EnvironmentOutlined }
    ];
  };

  const getContactIcons = () => [];
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={8}>
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
      </Col>
      <Col className="gutter-row" span={16}>
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
      </Col>
    </Row>
  );
};

export default PersonalInfo;
