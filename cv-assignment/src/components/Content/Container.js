import React from "react";
import { Row, Col } from "antd";

const Container = () => (
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col className="gutter-row" xs={24} sm={12}>
      left side
    </Col>
    <Col className="gutter-row" xs={24} sm={12}>
      right side
    </Col>
  </Row>
);

export default Container;
