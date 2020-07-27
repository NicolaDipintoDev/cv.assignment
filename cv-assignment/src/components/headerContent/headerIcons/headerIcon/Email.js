import React, { useState } from "react";
import { Input, Modal } from "antd";
import { MailOutlined } from "@ant-design/icons";
import HeaderIcon from "./HeaderIcon";

const { TextArea } = Input;

const Email = () => {
  const [showModal, setShowModal] = useState(false);
  const [massege, setMessage] = useState("");
  return (
    <>
      <HeaderIcon
        Icon={MailOutlined}
        message="dipinto.nicola.dev@gmail.com"
        onClick={() => setMessage(!showModal)}
      />
    </>
  );
};

export default Email;
