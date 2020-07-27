import React from "react";
import PropTypes from "prop-types";
import { Button, Popover } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./collapseComponent.css";

const Title = ({ title, logged }) => (
  <h1 className="blockTitle">
    {title}{" "}
    {logged && (
      <Popover content={<span className="popoverCollapse">Aggiungi</span>}>
        <Button
          ghost
          shape="circle"
          icon={<PlusCircleOutlined className="collapseIcon" />}
        />
      </Popover>
    )}
  </h1>
);

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired
};
