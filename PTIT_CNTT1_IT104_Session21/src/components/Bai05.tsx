import React from "react";

export default function Bai05() {
  return (
    <div>
      <div className="bg-blue-100 size-[200px]">
        <div className="bg-blue-400 size-[170px] relative top-3 left-3">
          Relative parent
          <button className="bg-blue-600 text-[#ffffff] absolute bottom-0 left-0">
            Absolute child
          </button>
        </div>
      </div>
    </div>
  );
}
