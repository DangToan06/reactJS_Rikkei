import React, { useState } from "react";
import { Modal, Form, Input, Button, Switch } from "antd";
import axios from "axios";
import { UserAddOutlined } from "@ant-design/icons";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: Date;
}

type Props = {
  onSuccess: () => void;
};

export default function ModalAdd({ onSuccess }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      const newStudent: Student = {
        id: Math.floor(Math.random() * 10000),
        student_name: values.student_name,
        email: values.email,
        address: values.address,
        phone: values.phone,
        status: values.status,
        created_at: new Date(),
      };

      const response = await axios.post(
        "http://localhost:3000/students",
        newStudent
      );
      console.log("Thêm sinh viên thành công:", response.data);

      setIsOpen(false);
      form.resetFields();
      onSuccess();
    } catch (error) {
      console.error("Lỗi khi thêm sinh viên:", error);
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setIsOpen(true)}>
        <UserAddOutlined />
        Thêm mới sinh viên
      </Button>

      <Modal
        title="Thêm sinh viên"
        open={isOpen}
        onOk={handleOk}
        onCancel={() => setIsOpen(false)}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Tên sinh viên"
            name="student_name"
            rules={[
              { required: true, message: "Vui lòng nhập tên sinh viên!" },
            ]}
          >
            <Input placeholder="Nhập tên sinh viên" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item label="Trạng thái" name="status" valuePropName="checked">
            <Switch checkedChildren="Hoạt động" unCheckedChildren="Không" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
