import React, { useState } from "react";
import { Input, Modal, Button } from "antd";
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
        onClick={() => setShowModal(!showModal)}
      />
      {showModal ? (
        <Modal
          visible={true}
          //onOk={this.handleOk}
          //onCancel={this.handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
             // onClick={this.handleOk}
            >
             Invia
            </Button>
          ]}
        ></Modal>
      ) : (
        false
      )}
    </>
  );
};

export default Email;
