import { CheckCircleFilled } from "@ant-design/icons";
import React from "react";

export default function Submit() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="bg-gray-200 w-[700px] rounded-[7px]">
          <p className="!my-2 !mx-5 ">Công việc đã hoàn thành: 0/4</p>
          <p className="text-center !my-2 hidden">
            <CheckCircleFilled style={{ color: "green" }} /> Hoàn thành công
            việc
          </p>
        </div>
      </div>
    </>
  );
}
