import React, { useState } from "react";
import { Button, Modal } from "antd";
import type { IPost } from "../../interfaces/post.interface";
import { blockPost } from "../../apis/post.api";

type PropsType = {
  post: IPost;
  reLoadBlock: () => Promise<void>;
};

export default function ModalBlock({ post, reLoadBlock }: PropsType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await blockPost(post);
      reLoadBlock();
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
      <Button color="purple" variant="solid" onClick={showModal}>
        Chặn
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {post.status === "active" ? (
          <h3>Bạn có chắc chắn muốn ngừng xuất bản bài viết</h3>
        ) : (
          <h3>Bạn có chắc chắn muốn bỏ chặn bản bài viết</h3>
        )}
      </Modal>
    </>
  );
}
