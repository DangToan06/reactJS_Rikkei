import React, { useState } from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

interface Task {
  id: number;
  task: string;
  status: boolean;
}

type PropsType = {
  task: Task;
  onDelete: () => void;
};

export default function ModalDelete({ task, onDelete }: PropsType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await axios.delete(`http://localhost:3000/Todos/${task.id}`);
      onDelete();
    } catch (error) {
      console.log("Xoa khong thanh cong: ", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="text"
        icon={<DeleteOutlined />}
        size="small"
        style={{ color: "#ff4d4f" }}
        onClick={showModal}
      />
      ,
      <Modal
        title="Xác Nhận"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Bạn có chắc muốn xóa công việc{" "}
        <span className="font-bold ">{task.task}</span> không?
      </Modal>
    </>
  );
}
