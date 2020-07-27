import React from "react";
import PropTypes from "prop-types";
import CollapseComponent from "../CollapseComponents/CollapseComponent";

const Block = ({
  Component,
  title,
  items,
  bg = null,
  color = null,
  logged
}) => (
  <div>
    <CollapseComponent
      title={title}
      contentPanel={
        <Component items={items} bg={bg} color={color} logged={logged} />
      }
    />
  </div>
);

export default Block;

Block.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  Component: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired
};

Block.defaultProps = {
  bg: null,
  color: null
};
