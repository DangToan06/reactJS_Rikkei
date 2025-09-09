import { Button, Form, Input, Modal } from "antd";
import React from "react";

type PropType = {
  handleOk: (value: string) => void;
  handleCancel: () => void;
  isUpdate: boolean;
  defaultValue: string;
};

export default function ModalUpdate({
  handleOk,
  handleCancel,
  isUpdate,
  defaultValue,
}: PropType) {
  return (
    <Modal
      footer={null}
      title={isUpdate ? "Cập nhật" : "Thêm mới"}
      open={true}
      onCancel={handleCancel}
    >
      <Form
        initialValues={{ task: defaultValue }}
        onFinish={(values) => handleOk(values.task)}
        layout="vertical"
      >
        <Form.Item
          label={isUpdate ? "Cập nhật lại tên công việc" : "Nhập tên công việc"}
          name="task"
          rules={[{ required: true, message: "Please input your task!" }]}
        >
          <Input />
        </Form.Item>

        <div className="flex gap-4 justify-end">
          <Button onClick={handleCancel}>Hủy</Button>
          <Button type="primary" htmlType="submit">
            {isUpdate ? "Cập nhật" : "Thêm"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
