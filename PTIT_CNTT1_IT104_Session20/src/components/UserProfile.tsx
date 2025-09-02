import React, { useState } from "react";

interface InputValueI {
  nameValue: string;
  emailValue: string;
  isDisplay: boolean;
}

export default function UserProfile() {
  const [formValues, setFormValues] = useState<InputValueI>({
    nameValue: "",
    emailValue: "",
    isDisplay: false,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prev: InputValueI) => ({
      ...prev,
      [name]: value,
      isDisplay: false,
    }));
  };

  const handleDisplayInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setFormValues((prev: InputValueI) => ({ ...prev, isDisplay: true }));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "1% 2%",
          borderRadius: "15px",
        }}
      >
        <form onSubmit={handleDisplayInfo}>
          <h1>Thông tin người dùng</h1>
          <div className="mb-3">
            <input
              name="nameValue"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nhập tên"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="mb-3">
            <input
              name="emailValue"
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Nhập email"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Gửi
          </button>
        </form>
        <div
          style={{
            color: "green",
            border: "1px solid green",
            padding: "1% 2%",
            marginTop: "10px",
            background: "#eef7ed",
            display: formValues.isDisplay ? "block" : "none",
          }}
        >
          <p>Tên: {formValues.nameValue}</p>
          <p>Email: {formValues.emailValue}</p>
        </div>
      </div>
    </div>
  );
}
