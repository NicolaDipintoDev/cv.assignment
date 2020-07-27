import React from "react";
import PropTypes from "prop-types";
import { PlusCircleOutlined } from "@ant-design/icons";
import EditButton from "../../container/editButton.js/EditButton";

const Title = ({ title, logged }) => (
  <h1 className="blockTitle">
    {title}{" "}
    {logged && (
      <EditButton Icon={PlusCircleOutlined} text='Aggiungi' />
    )}
  </h1>
);

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  logged: PropTypes.number.isRequired
};
