import React from "react";
import './header.css';
import HeaderIcons from "./headerIcons/HeaderIcons";
import Login from './login/Login';

const HeaderContent = () => (
  <div className="headerContent">
    <h1 className="headerName">Nicola Dipinto <Login /></h1>
    <div>
      <HeaderIcons />
    </div>
  </div>
);

export default HeaderContent;
