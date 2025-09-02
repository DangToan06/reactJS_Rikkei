import React, { useState } from "react";

interface Account {
  name: string;
  gender: string;
  email: string;
  address: string;
}

export default function UseStateDemo() {
  const [acc, setAcc] = useState<Account>({
    name: "",
    gender: "",
    email: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAcc({ ...acc, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(acc);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User name"
          onChange={handleChange}
          name="name"
        />
        <div onChange={handleChange}>
          <input type="radio" name="gender" value={"Nam"} /> Nam
          <input type="radio" name="gender" value={"Nu"} /> Nữ
          <input type="radio" name="gender" value={"Khac"} /> Khác
        </div>
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
        />
        <button>Submit</button>
      </form>
    </>
  );
}
