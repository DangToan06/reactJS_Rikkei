import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import TextEditor from "../../components/textEditor";
import type { IPost } from "../../interfaces/post.interface";
import { uid } from "uid";
import { PostStatus } from "../../enums/post.enum";
import { createPost } from "../../apis/post.api";

type PropsType = {
  reLoadCreate: () => void;
};

export default function FormPost({ reLoadCreate }: PropsType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalWaring, setIsModalWaring] = useState(false);
  const [valueInput, setValueInput] = useState<IPost>({
    id: Number(uid()),
    title: "",
    imageUrl: "",
    createdAt: new Date().toLocaleDateString("vi-VN"),
    status: PostStatus.active,
    content: "",
  });

  const showModal = () => {
    setValueInput({
      id: Number(uid()),
      title: "",
      imageUrl: "",
      createdAt: new Date().toLocaleDateString("vi-VN"),
      status: PostStatus.active,
      content: "",
    });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const closeModalWaring = () => {
    setIsModalWaring(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValueInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTextEditorChange = (content?: string) => {
    setValueInput((prev) => ({
      ...prev,
      content: content ?? "",
    }));
  };

  const handleOk = async () => {
    if (
      valueInput.title === undefined ||
      valueInput.imageUrl === undefined ||
      valueInput.title === "" ||
      valueInput.imageUrl === ""
    ) {
      setIsModalWaring(true);
      return;
    }

    try {
      await createPost(valueInput);
      reLoadCreate();
    } catch (error) {
      console.log("Lỗi: ", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm mới bài viết
      </Button>
      {/* Modal Form thêm mới / Cập nhật bài viết */}
      <Modal
        title={<h3>Thêm mới bài viết</h3>}
        width={1000}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item>
            <Input
              placeholder="Tên bài viết"
              name="title"
              value={valueInput.title}
              onChange={handleInput}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Hình ảnh"
              name="imageUrl"
              value={valueInput.imageUrl}
              onChange={handleInput}
            />
          </Form.Item>
          <Form.Item>
            <TextEditor
              height={400}
              onChange={handleTextEditorChange}
              value={valueInput.content ? valueInput.content : ""}
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal cảnh báo nếu bị bỏ trống */}
      <Modal
        title="Cảnh báo"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalWaring}
        footer={[
          <Button key="cancel" onClick={closeModalWaring}>
            Hủy
          </Button>,
        ]}
      >
        <h3 className="text-red-600">Tiêu đề và ảnh không được để trống</h3>
      </Modal>
    </>
  );
}
