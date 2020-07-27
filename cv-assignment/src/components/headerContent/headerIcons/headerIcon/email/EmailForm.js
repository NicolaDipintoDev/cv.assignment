import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Modal, Button } from "antd";

const { TextArea } = Input;

const EmailForm = ({ setShowModal }) => {
  const [subject, setSubject] = useState("I'm interested to your Profile");
  const [message, setMessage] = useState("");
  const closeModal = () => setShowModal(false);
  const onChangeMessage = ({ target: { value } }) => setMessage(value);
  const onChangeSubject = ({ target: { value } }) => setSubject(value);

  return (
    <Modal
      visible={true}
      onCancel={closeModal}
      footer={[
        <a
          href={
            "mailto:no-one@snai1mai1.com?subject=" +
            subject +
            "&body=" +
            message
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button key="submit" type="primary">
            Invia
          </Button>
        </a>
      ]}
    >
      <h3>Subject</h3>
      <Input placeholder="Subject" onChange={onChangeSubject} value={subject} />
      <h3>Message</h3>
      <TextArea
        value={message}
        onChange={onChangeMessage}
        placeholder="Write a message"
        autoSize={{ minRows: 3 }}
      />
    </Modal>
  );
};

export default EmailForm;

Block.propTypes = {
  setShowModal: PropTypes.func.isRequired
};
