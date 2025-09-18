import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";

type PropsType = {
  id: number | null;
  button: string;
};

export default function ModalDelete({ id, button }: PropsType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (button === "delete" && id !== null) {
      handleDelete(id);
    } else {
      deleteAll();
    }

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  };

  const deleteAll = () => {
    dispatch({
      type: "DELETE_ALL",
    });
  };

  return (
    <>
      {button === "delete" ? (
        <Button color="danger" variant="filled" onClick={showModal}>
          Xóa
        </Button>
      ) : (
        <Button color="danger" variant="outlined" onClick={showModal}>
          Xóa tất cả
        </Button>
      )}

      <Modal
        title="Xác nhận"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className="flex gap-4 justify-end">
            <Button onClick={handleCancel}>Hủy</Button>
            <Button onClick={handleOk} color="danger" variant="solid">
              Xóa
            </Button>
          </div>
        }
      >
        {button === "delete" ? (
          <span>Bạn có chắc muốn xóa công việc này</span>
        ) : (
          <span>
            Bạn có chắc muốn xóa{" "}
            <span className="text-red-500 font-bold">TẤT CẢ</span> công việc này
          </span>
        )}
      </Modal>
    </>
  );
}
