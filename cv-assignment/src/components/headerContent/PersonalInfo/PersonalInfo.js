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
import PersonalData from "./PersonalData";

const PersonalInfo = () => {
  const getPersonalData = () => {
    return [
      { label: "20/05/1993", icon: CalendarOutlined },
      { label: "Limbiate (MB)", icon: EnvironmentOutlined }
    ];
  };

  const getContactIcons = () => [
    {icon: LinkedinOutlined},
    {icon:GithubOutlined},
    {icon:MailOutlined},
    {icon:PhoneOutlined},
  ];
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={8}>
        <PersonalData />
      </Col>
      <Col className="gutter-row" span={16} style={{position:'relative', textAlign:'right'}}>
        <List
        style={{position:'absolute', bottom:'0', right: '10px'}}
        grid={{
            gutter: 16,
            xs: 4,
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
      </Col>
    </Row>
  );
};

export default PersonalInfo;
