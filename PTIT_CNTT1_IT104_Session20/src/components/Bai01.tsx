import React, { useState } from "react";
import "./Bai01.css";

export default function Bai01() {
  const [inputValue, setInputValue] = useState<string>();
  const [isLength, setIsLength] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsLength(value.length > 5);
  };

  return (
    <div className="container">
      <div className="container-form">
        <h1>Kiểm tra dộ dài chuỗi nhập vào</h1>
        <form>
          <input
            type="text"
            placeholder="Nhập vào đây"
            onChange={(e) => handleInput(e)}
            value={inputValue}
          />
        </form>
        <div className="waring" style={{ display: isLength ? "flex" : "none" }}>
          <p>Chuỗi nhập vào dài hơn 5 ký tự !</p>
        </div>
      </div>
    </div>
  );
}
