import React from "react";
import PropTypes from "prop-types";
import { Collapse, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./collapseComponent.css";

const { Panel } = Collapse;

const CollapseComponent = ({ title, contentPanel, logged }) => (
  <Collapse defaultActiveKey={["1"]} ghost>
    <Panel
      header={
        <h1 className="blockTitle">
          {title}{" "}
          {logged && <Button
            ghost
            shape="circle"
            icon={<PlusCircleOutlined className="collapseIcon" />}
          />}
        </h1>
      }
      key="1"
    >
      <div className="panelContent">{contentPanel}</div>
    </Panel>
  </Collapse>
);

export default CollapseComponent;

CollapseComponent.propTypes = {
  title: PropTypes.string.isRequired,
  contentPanel: PropTypes.element.isRequired,
  logged: PropTypes.bool.isRequired
};
