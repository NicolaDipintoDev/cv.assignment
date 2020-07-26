import React from "react";
import PropTypes from 'prop-types';
import { Collapse } from "antd";

const { Panel } = Collapse;

const CollapseComponent = ({title, contentPanel}) => (
    <Collapse defaultActiveKey={["1"]} ghost>
      <Panel header={<h1>{title}</h1>} key="1">
        {contentPanel}
      </Panel>
    </Collapse>
);

export default CollapseComponent;

CollapseComponent.propTypes = {
    title: PropTypes.string.isRequired,
    contentPanel: PropTypes.element.isRequired
  };