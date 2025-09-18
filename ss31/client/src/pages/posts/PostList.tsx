import {
  Button,
  Input,
  Select,
  Space,
  Table,
  Tag,
  type TableProps,
} from "antd";
import "@mdxeditor/editor/style.css";
import { useEffect, useState } from "react";
import { getAllPost } from "../../apis/post.api";
import FormPost from "./FormPost";
import type { IPost } from "../../interfaces/post.interface";
import ModalBlock from "./ModalBlock";

export default function PostList() {
  const [listAllPost, setListAllPost] = useState<IPost[]>([]);

  // Hàm gọi API lấy danh sách bài viết
  const fetchAllPost = async () => {
    try {
      const response = await getAllPost();
      setListAllPost(response);
      console.log("Response: ", response);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchAllPost();
  }, []);

  const columns: TableProps<IPost>["columns"] = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Hình ảnh",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (image: string) => {
        return (
          <div className="flex justify-center">
            <img
              src={image}
              alt="post"
              className="w-[60px] h-[60px] rounded-[50%] object-cover border shadow-sm hover:scale-105 transition-transform duration-200"
            />
          </div>
        );
      },
    },
    {
      title: "Ngày viết",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Trang thái",
      key: "status",
      dataIndex: "status",
      render: (status: string) => {
        const color = status === "active" ? "green" : "volcano";
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Chức năng",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <ModalBlock post={record} reLoadBlock={fetchAllPost}></ModalBlock>
          <FormPost
            postNow={record}
            statusButton={"edit"}
            reLoadCreate={fetchAllPost}
          ></FormPost>
          <Button color="danger" variant="solid">
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="max-w-[1500px] mx-auto mt-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Input placeholder="Nhập từ kháo tiềm kiếm" />
            <Select
              defaultValue=""
              options={[{ value: "", label: "Lọc bài viết" }]}
            />
          </div>
          <FormPost
            postNow={""}
            statusButton={"add"}
            reLoadCreate={fetchAllPost}
          ></FormPost>
        </div>

        <div>
          <Table<IPost> columns={columns} dataSource={listAllPost} />
        </div>
      </div>
    </>
  );
}
