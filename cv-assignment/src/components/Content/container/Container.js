import React from "react";
import { Row, Col } from "antd";
import RightSide from "./rightSide/RightSide";
import LeftSide from "./leftSide/LeftSide";


const Container = () => (
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col className="gutter-row" xs={0} sm={0} md={2} lg={4}>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={10} lg={8}>
      <LeftSide />
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={10} lg={8}>
      <RightSide />
    </Col>
    <Col className="gutter-row" xs={0} sm={0} md={2} lg={4}>
    </Col>
  </Row>
);

export default Container;
