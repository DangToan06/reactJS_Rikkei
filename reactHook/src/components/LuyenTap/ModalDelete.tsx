import { Button, Modal } from "antd";
import React from "react";

type PropType = {
  handleCloseDelete: () => void;
  handleDelete: () => void;
};

export default function ModalDelete({
  handleCloseDelete,
  handleDelete,
}: PropType) {
  return (
    <Modal
      footer={null}
      title="Basic Modal"
      open={true}
      onCancel={handleCloseDelete}
    >
      <h3 className="text-red-500">Bạn có chắc chắn muốn xóa !</h3>
      <div className="flex gap-4 justify-end">
        <Button onClick={handleCloseDelete}>Hủy</Button>
        <Button type="primary" htmlType="submit" onClick={handleDelete}>
          Xóa
        </Button>
      </div>
    </Modal>
  );
}
