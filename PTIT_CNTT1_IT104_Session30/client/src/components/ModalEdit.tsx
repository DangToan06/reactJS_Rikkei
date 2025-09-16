import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";

interface Task {
  id: number;
  task: string;
  status: boolean;
}

type PropsType = {
  taskNow: Task;
  onEdit: () => void;
};

export default function ModalEdit({ taskNow, onEdit }: PropsType) {
  const [newTask, setNewTask] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setNewTask(taskNow.task);
  };

  const handleOk = async () => {
    try {
      await axios.patch(`http://localhost:3000/Todos/${taskNow.id}`, {
        task: newTask,
      });
      onEdit();
    } catch (error) {
      console.log("Lỗi: ", error);
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
        icon={<EditOutlined />}
        size="small"
        style={{ color: "#faad14" }}
        onClick={showModal}
      />
      <Modal
        title="Sửa công viêc"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          value={newTask}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTask(e.target.value)
          }
        ></Input>
      </Modal>
    </>
  );
}
