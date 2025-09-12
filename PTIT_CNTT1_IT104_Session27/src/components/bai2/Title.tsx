import React from "react";
import { Outlet } from "react-router-dom";

export default function Title() {
  return (
    <div className="bg-[#f0f0f0] h-[100vh]">
      <div className="bg-blue-600 text-white text-center">
        <h1 className="font-bold text-4xl py-4">Trang chi tiết sản phẩm</h1>
        <p>Danh sách sản phẩm</p>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
