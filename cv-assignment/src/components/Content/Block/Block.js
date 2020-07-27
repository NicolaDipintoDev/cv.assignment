import React from "react";
import PropTypes from "prop-types";
import CollapseComponent from "../CollapseComponents/CollapseComponent";

const Block = ({Component, title, items, bg = null, color=null }) => (
  <div>
    <CollapseComponent
      title={title}
      contentPanel={<Component items={items} bg={bg} color={color} />}
    />
  </div>
);

export default Block;

Block.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
};

Block.defaultProps = {
  bg: null,
  color: null
};