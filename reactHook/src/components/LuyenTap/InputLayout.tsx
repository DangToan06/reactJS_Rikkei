import React from "react";
import { Button, Input } from "antd";

type PropType = {
  showModal: () => void;
};

export default function InputLayout({ showModal }: PropType) {
  return (
    <div className="flex justify-center">
      <div className="flex gap-4 w-[700px]">
        <Input placeholder="Nhập tên công việc" />
        <Button type="primary" onClick={() => showModal()}>
          Thêm
        </Button>
      </div>
    </div>
  );
}
