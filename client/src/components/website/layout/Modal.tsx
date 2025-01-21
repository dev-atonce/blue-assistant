import React, { useState } from "react";
import { Button, Divider, Modal } from "antd";

const App: React.FC = ({
  isModalOpen,
  setIsModalOpen,
  modalContent,
  width,
}: any) => {
  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        {/* <Button type="primary" onClick={showModal}>
        Open Modal
        </Button> */}
        <Modal
          // title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={width || "80%"}
        >
          <div className="py-4 lg:px-4">{modalContent}</div>
        </Modal>
      </div>
    </>
  );
};

export default App;
