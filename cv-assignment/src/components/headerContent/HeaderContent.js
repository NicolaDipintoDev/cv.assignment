import React from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import './header.css';

const HeaderContent = () => (
  <div className="headerContent">
    <h1 className="headerName">Nicola Dipinto</h1>
    <div>
      <PersonalInfo />
    </div>
  </div>
);

export default HeaderContent;
