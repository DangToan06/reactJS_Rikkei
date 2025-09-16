import React, { useState } from "react";

type PropsType = {
  handleFilter: (stu: boolean | "all") => void;
};

export default function FilterTask({ handleFilter }: PropsType) {
  const [active, setActive] = useState<"all" | "done" | "doing">("all");

  const handleClick = (
    key: "all" | "done" | "doing",
    value: boolean | "all"
  ) => {
    setActive(key);
    handleFilter(value);
  };

  return (
    <div className="shadow-[-6px_10px_25px_-6px_rgba(0,0,0,0.2)] my-[20px] border rounded-[6px] border-gray-300 mx-[20px] p-[10px] justify-around flex gap-2.5">
      <button
        className={`w-[100%] rounded-[5px] border py-1.5 cursor-pointer transition-colors duration-200 ${
          active === "all"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-black border-gray-300"
        }`}
        onClick={() => handleClick("all", "all")}
      >
        Tất cả
      </button>

      <button
        className={`w-[100%] rounded-[5px] border py-1.5 cursor-pointer transition-colors duration-200 ${
          active === "done"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-black border-gray-300"
        }`}
        onClick={() => handleClick("done", true)}
      >
        Hoàn thành
      </button>

      <button
        className={`w-[100%] rounded-[5px] border py-1.5 cursor-pointer transition-colors duration-200 ${
          active === "doing"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-black border-gray-300"
        }`}
        onClick={() => handleClick("doing", false)}
      >
        Đang thực hiện
      </button>
    </div>
  );
}
