import React from "react";
import { Row, Col } from "antd";
import PersonalData from "./PersonalData";
import ContactIcons from "./ContactIcons";

const PersonalInfo = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={8}>
        <PersonalData />
      </Col>
      <Col className="gutter-row" span={16} style={{position:'relative', textAlign:'right'}}>
        <ContactIcons />
      </Col>
    </Row>
  );
};

export default PersonalInfo;
