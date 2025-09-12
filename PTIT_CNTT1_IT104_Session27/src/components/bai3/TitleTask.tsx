import React from "react";
import { Outlet } from "react-router-dom";

export default function TitleTask() {
  return (
    <div className="bg-[#f0f0f0] h-[100vh]">
      <div className="bg-blue-600 text-white text-center">
        <h1 className="font-bold text-4xl py-4">Danh sach cong viec</h1>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
