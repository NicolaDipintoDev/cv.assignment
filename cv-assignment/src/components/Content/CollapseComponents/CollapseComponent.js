import React from "react";
import PropTypes from "prop-types";
import { Collapse, Button, Popover } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./collapseComponent.css";
import Title from "./title/Title";

const { Panel } = Collapse;

const CollapseComponent = ({ title, contentPanel, logged }) => (
  <Collapse defaultActiveKey={["1"]} ghost>
    <Panel
      header={
        <Title logged={logged} title={title} />
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
