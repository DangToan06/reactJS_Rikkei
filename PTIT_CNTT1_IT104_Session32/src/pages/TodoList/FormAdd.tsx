import React, { useState } from "react";
import { Button, Form, Input, Modal, Radio, type RadioChangeEvent } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type ITask from "../../interface/task.interface";

export default function FormAdd() {
  const resultTask = useSelector((state) => state.tasks);
  const [inputValue, setInputValue] = useState<ITask>({
    id: Date.now(),
    nameTask: "",
    leverTask: 3,
    status: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
    setInputValue({
      id: Date.now(),
      nameTask: "",
      leverTask: 3,
      status: false,
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    if (!inputValue.nameTask.trim()) {
      alert("Tên công việc không được để trống!");
      return;
    }

    const isDuplicate = resultTask.some(
      (task: ITask) =>
        task.nameTask.toLowerCase() === inputValue.nameTask.toLowerCase()
    );

    if (isDuplicate) {
      alert("Task đã tồn tại!");
      return;
    }

    dispatch({ type: "ADD_TASK", payload: inputValue });

    setIsModalOpen(false);
  };

  // Input
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, nameTask: e.target.value });
  };

  // Radio
  const onChange = (e: RadioChangeEvent) => {
    setInputValue({ ...inputValue, leverTask: e.target.value });
  };

  return (
    <>
      <Button color="primary" variant="solid" onClick={showModal}>
        Thêm
      </Button>
      <Modal
        title="Thêm mới công việc"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={
          <Button
            color="primary"
            variant="solid"
            onClick={handleOk}
            className="w-[100%]"
          >
            Thêm mới
          </Button>
        }
      >
        <h5>Tên công việc:</h5>
        <Form.Item>
          <Input
            placeholder="Nhập tên công việc"
            value={inputValue?.nameTask}
            onChange={handleChangeName}
          />
        </Form.Item>

        <h5>Cấp độ:</h5>
        <Radio.Group
          onChange={onChange}
          value={inputValue?.leverTask}
          options={[
            { value: 0, label: "Khẩn cấp" },
            { value: 1, label: "Quan trọng" },
            { value: 2, label: "Bình thường" },
            { value: 3, label: "Không quan trọng" },
          ]}
        />
      </Modal>
    </>
  );
}
