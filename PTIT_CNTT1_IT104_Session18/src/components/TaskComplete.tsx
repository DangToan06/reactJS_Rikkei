import React from "react";

export default function TaskComplete() {
  return (
    <>
      {" "}
      <div className="text-center text-danger fw-medium">
        Chưa có công việc nào hoàn thành
      </div>
      {/* Hiển thị khi tất cả công việc hoàn thành */}
      <div className="text-center text-success fw-medium">
        {/* Tất cả công việc đã hoàn thành */}1 / 2 công việc đã hoàn thành
      </div>
    </>
  );
}
