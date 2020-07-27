import React from "react";
import { Button, Popover } from 'antd';
import { UserOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <span>
       <Popover content={<span className="popoverHeader">Private area</span>}>
      <Button ghost shape="circle" icon={<UserOutlined className="headerIcon"/>} />
      </Popover>
    </span>
  );
};

export default Login;
