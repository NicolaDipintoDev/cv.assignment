import React from "react";
import PropTypes from "prop-types";
import { Button, Popover } from 'antd';
import { UserOutlined } from "@ant-design/icons";

const Login = ({logged, setLogged}) => {
  return (
    <span>
       <Popover content={<span className="popoverHeader">Private area</span>}>
      <Button ghost shape="circle" icon={<UserOutlined className="headerIcon"/>} />
      </Popover>
    </span>
  );
};

export default Login;


Login.propTypes = {
  logged: PropTypes.bool.isRequired,
  setLogged: PropTypes.func.isRequired
};