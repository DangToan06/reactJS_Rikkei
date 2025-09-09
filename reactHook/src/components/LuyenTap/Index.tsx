import React, { useState } from "react";
import Title from "./Title";
import InputLayout from "./InputLayout";
import ListTask from "./ListTask";
import Submit from "./Submit";
import ModalUpdate from "./ModalUpdate";
import ModalDelete from "./ModalDelete";

export default function Index() {
  const [listTask, setListTask] = useState<string[]>([
    "Code",
    "Quét nhà",
    "Giặt quần áo",
    "Lau nhà",
  ]);

  const [modalState, setModalState] = useState<{
    open: boolean;
    isUpdate: boolean;
    task?: string | null;
  }>({
    open: false,
    isUpdate: false,
    task: null,
  });

  // Mở modal để thêm mới
  const showModal = () => {
    setModalState({ open: true, isUpdate: false, task: null });
  };

  // Mở modal để edit
  const handleOpenUpdate = (task: string) => {
    setModalState({ open: true, isUpdate: true, task });
  };

  // Hủy modal
  const handleCancel = () => {
    setModalState({ open: false, isUpdate: false, task: null });
  };

  // Submit modal
  const handleOk = (value: string) => {
    if (modalState.isUpdate && modalState.task) {
      // update task
      setListTask((prev) =>
        prev.map((t) => (t === modalState.task ? value : t))
      );
    } else {
      // add task
      setListTask((prev) => [...prev, value]);
    }
    handleCancel();
  };

  //Xóa
  const [modalDelete, setModalDelete] = useState<{
    open: boolean;
    task: string | null;
  }>({
    open: false,
    task: null,
  });

  const handleOpenDelete = (task: string): void => {
    setModalDelete({ open: true, task });
  };

  const handleCloseDelete = (): void => {
    setModalDelete({ open: false, task: null });
  };

  const handleDelete = (): void => {
    setListTask((prev) => prev.filter((t) => t !== modalDelete.task));
    setModalDelete({ open: false, task: null });
  };

  return (
    <>
      <Title />
      <InputLayout showModal={showModal} />
      <ListTask
        data={listTask}
        handleOpenUpdate={handleOpenUpdate}
        handleOpenDelete={handleOpenDelete}
      />
      <Submit />

      {modalState.open && (
        <ModalUpdate
          handleOk={handleOk}
          handleCancel={handleCancel}
          isUpdate={modalState.isUpdate}
          defaultValue={modalState.task ?? ""}
        />
      )}

      {modalDelete.open && (
        <ModalDelete
          handleCloseDelete={handleCloseDelete}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
