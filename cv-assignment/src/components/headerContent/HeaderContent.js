import React from "react";
import PropTypes from "prop-types";
import './header.css';
import HeaderIcons from "./headerIcons/HeaderIcons";
import Login from './login/Login';

const HeaderContent = ({logged, setLogged}) => (
  <div className="headerContent">
    <h1 className="headerName">Nicola Dipinto <Login /></h1>
    <div>
      <HeaderIcons />
    </div>
  </div>
);

export default HeaderContent;

HeaderContent.propTypes = {
  logged: PropTypes.bool.isRequired,
  setLogged: PropTypes.func.isRequired
};