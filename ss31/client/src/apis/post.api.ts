import type { IPost } from "../interfaces/post.interface";
import { apiClient } from "../utils/apiClient";

/**
 * Hàm gọi API lấy danh sách bài viết
 * @returns
 */
export const getAllPost = async () => {
  const response = await apiClient.get("posts");

  return response.data;
};

export const createPost = async (createPost: IPost) => {
  const response = await apiClient.post("posts", createPost);

  return response;
};

export const deletePost = async (deletePost: IPost) => {
  const response = await apiClient.delete(`posts/${deletePost.id}`);

  return response;
};

export const blockPost = async (blockPost: IPost) => {
  const newStatus = blockPost.status === "active" ? "inactive" : "active";
  const response = await apiClient.patch(`posts/${blockPost.id}`, {
    status: newStatus,
  });

  return response;
};
