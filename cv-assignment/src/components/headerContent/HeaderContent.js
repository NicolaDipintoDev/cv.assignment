import React from "react";
import './header.css';
import HeaderIcons from "./headerIcons/HeaderIcons";

const HeaderContent = () => (
  <div className="headerContent">
    <h1 className="headerName">Nicola Dipinto</h1>
    <div>
      <HeaderIcons />
    </div>
  </div>
);

export default HeaderContent;
