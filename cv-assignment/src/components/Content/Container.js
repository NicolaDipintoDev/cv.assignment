import React from "react";
import { Row, Col } from "antd";
import CollapseComponent from "../Content/CollapseComponents/CollapseComponent";

const Container = () => (
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col className="gutter-row" xs={24} sm={12}>
      left side
    </Col>
    <Col className="gutter-row" xs={24} sm={12}>
      <CollapseComponent
        title="Education"
        contentPanel={<div>content panel education</div>}
      />
    </Col>
  </Row>
);

export default Container;
