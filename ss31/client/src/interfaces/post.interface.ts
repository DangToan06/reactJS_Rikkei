import type { PostStatus } from "../enums/post.enum";

export interface IPost {
  id?: number;
  title?: string;
  imageUrl?: string;
  createdAt?: string;
  status: PostStatus;
  content?: string;
}
