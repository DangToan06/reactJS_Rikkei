import React from "react";

export default function Delete() {
  return (
    <div className="flex justify-between mx-[20px] my-[20px]">
      <button className="bg-red-500 text-[#fff] py-2 px-3 rounded-[5px] cursor-pointer hover:bg-red-700">
        Xóa công việc hoàn thành
      </button>
      <button className="bg-red-500 text-[#fff] py-2 px-3 rounded-[5px] cursor-pointer hover:bg-red-700">
        Xóa tất cả công việc{" "}
      </button>
    </div>
  );
}
