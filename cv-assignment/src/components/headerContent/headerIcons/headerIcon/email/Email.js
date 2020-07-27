import React, { useState } from "react";
import { MailOutlined } from "@ant-design/icons";
import HeaderIcon from "../HeaderIcon";
import EmailForm from "./EmailForm";

const Email = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);

  return (
    <>
      <HeaderIcon
        Icon={MailOutlined}
        message="dipinto.nicola.dev@gmail.com"
        onClick={openModal}
      />
      {showModal ? <EmailForm setShowModal={setShowModal} /> : false}
    </>
  );
};

export default Email;
