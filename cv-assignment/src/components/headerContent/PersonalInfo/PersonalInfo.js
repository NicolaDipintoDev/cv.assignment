import React from "react";
import { Row, Col } from "antd";
import PersonalData from "./PersonalData";
import ContactIcons from "./ContactIcons";
import HeaderIcons from "../headerIcons/HeaderIcons";

const PersonalInfo = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={24} style={{position:'relative', textAlign:'right'}}>
      <HeaderIcons />
      </Col>
    </Row>
  );
};

export default PersonalInfo;
