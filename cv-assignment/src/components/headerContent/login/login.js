import React from "react";
import PropTypes from "prop-types";
import { Button, Popover } from "antd";
import { UserOutlined, UserSwitchOutlined } from "@ant-design/icons";

const Login = ({ logged, setLogged }) => {
  const handleClick = () => setLogged(!logged);
  const setUp = logged
    ? { icon: UserSwitchOutlined, text: "Logout" }
    : { icon: UserOutlined, text: "Private area" };

  return (
    <span>
      <Popover content={<span className="popoverHeader">{setUp.text}</span>}>
        <Button
          ghost
          shape="circle"
          icon={<setUp.icon className="headerIcon" />}
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
