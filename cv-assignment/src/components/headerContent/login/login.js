import React from "react";
import PropTypes from "prop-types";
import { Button, Popover } from "antd";
import { UserOutlined, UserSwitchOutlined } from "@ant-design/icons";

const Login = ({ logged, setLogged }) => {
  const handleClick = () => setLogged(!logged);
  const Icon = logged ? UserSwitchOutlined : UserOutlined;
  return (
    <span>
      <Popover content={<span className="popoverHeader">{logged ? 'Logout' : 'Private area'}</span>}>
        <Button
          ghost
          shape="circle"
          icon={<Icon className="headerIcon" />}
          onClick={handleClick}
        />
      </Popover>
    </span>
  );
};

export default Login;

Login.propTypes = {
  logged: PropTypes.bool.isRequired,
  setLogged: PropTypes.func.isRequired
};
