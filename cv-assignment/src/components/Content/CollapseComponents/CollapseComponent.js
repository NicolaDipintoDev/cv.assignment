import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const CollapseComponent = ({title}) => (
    <Collapse defaultActiveKey={["1"]} ghost>
      <Panel header={<h1>{title}</h1>} key="1">
        panel 1
      </Panel>
    </Collapse>
);

export default CollapseComponent;
