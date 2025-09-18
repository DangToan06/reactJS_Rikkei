import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import TextEditor from "../../components/textEditor";
import type { IPost } from "../../interfaces/post.interface";
import { uid } from "uid";
import { PostStatus } from "../../enums/post.enum";
import { createPost } from "../../apis/post.api";

type PropsType = {
  postNow: IPost | "";
  statusButton: string;
  reLoadCreate: () => void;
};

export default function FormPost({
  postNow,
  statusButton,
  reLoadCreate,
}: PropsType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalWaring, setIsModalWaring] = useState(false);
  const [valueEdit, setValueEdit] = useState<IPost | null>(null);
  const [valueInput, setValueInput] = useState<IPost>({
    id: Number(uid()),
    title: "",
    imageUrl: "",
    createdAt: new Date().toLocaleDateString("vi-VN"),
    status: PostStatus.active,
    content: "",
  });

  const showModal = () => {
    if (postNow !== undefined && postNow !== "" && postNow !== null) {
      setValueEdit(postNow);
    }

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
    setValueEdit(null);
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

  // const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setValueEdit({ ...valueEdit, [name]: value });
  // };

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
      setValueEdit(null);
    }
  };

  return (
    <>
      {statusButton === "add" ? (
        <Button type="primary" onClick={showModal}>
          Thêm mới bài viết
        </Button>
      ) : (
        <Button color="primary" variant="outlined" onClick={showModal}>
          Sửa
        </Button>
      )}

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
              value={valueEdit !== null ? valueEdit.title : valueInput.title}
              onChange={handleInput}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Hình ảnh"
              name="imageUrl"
              value={
                valueEdit !== null ? valueEdit.imageUrl : valueInput.imageUrl
              }
              onChange={handleInput}
            />
          </Form.Item>
          <Form.Item>
            <TextEditor
              height={400}
              onChange={handleTextEditorChange}
              value={valueEdit?.content ?? valueInput.content ?? ""}
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
