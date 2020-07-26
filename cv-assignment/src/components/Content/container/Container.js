import React from "react";
import { Row, Col } from "antd";
import RightSide from "./rightSide/RightSide";


const Container = () => (
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col className="gutter-row" xs={24} sm={12}>
      left side
    </Col>
    <Col className="gutter-row" xs={24} sm={12}>
      <RightSide />
    </Col>
  </Row>
);

export default Container;
