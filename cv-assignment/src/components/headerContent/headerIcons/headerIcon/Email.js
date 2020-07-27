import React, { useState } from "react";
import { Input, Modal } from "antd";
import { MailOutlined } from "@ant-design/icons";
import HeaderIcon from "./HeaderIcon";

const { TextArea } = Input;

const Email = () => {
  const [massege, setMessage] = useState("");
  return (
    <>
      <HeaderIcon
        Icon={MailOutlined}
        message="dipinto.nicola.dev@gmail.com"
        onClick={() => console.log('mail clicked')}
      />
    </>
  );
};

export default Email;
