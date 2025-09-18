import type { RouteObject } from "react-router-dom";
import React from "react";
import LazyLoader from "../components/base/LazyLoader";

const PostList = React.lazy(() => import("../pages/posts/PostList"));
const PostDetail = React.lazy(() => import("../pages/posts/PostDetail"));
const FormPost = React.lazy(() => import("../pages/posts/FormPost"));

const postsRoutes: RouteObject[] = [
  {
    path: "/postList",
    element: (
      <LazyLoader>
        <PostList />
      </LazyLoader>
    ),
  },
  {
    path: "/postDetail/:id",
    element: (
      <LazyLoader>
        <PostDetail />
      </LazyLoader>
    ),
  },
  {
    path: "/createPost",
    element: (
      <LazyLoader>
        <FormPost />
      </LazyLoader>
    ),
  },
];

export default postsRoutes;
