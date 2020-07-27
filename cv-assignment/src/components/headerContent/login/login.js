import React from "react";
import PropTypes from "prop-types";
import { Button, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Login = ({ logged, setLogged }) => {
  const handleClick = () => setLogged(!logged);
  return (
    <span>
      <Popover content={<span className="popoverHeader">{logged ? 'Logout' : 'Private area'}</span>}>
        <Button
          ghost
          shape="circle"
          icon={<UserOutlined className="headerIcon" />}
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
