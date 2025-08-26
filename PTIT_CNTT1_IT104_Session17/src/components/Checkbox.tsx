import React, { useState } from "react";

export default function Checkbox() {
  const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];
  const [value, setValue] = useState<string[]>([]);

  const handleCheckBox = (e: string) => {
    if (value.includes(e)) {
      setValue(value.filter((item) => item !== e));
    } else {
      setValue([...value, e]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Sở thích: {JSON.stringify(value)}</h3>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            checked={value.includes(option)}
            onChange={() => handleCheckBox(option)}
          />
          <label style={{ marginLeft: "8px" }}>{option}</label>
        </div>
      ))}
    </div>
  );
}
