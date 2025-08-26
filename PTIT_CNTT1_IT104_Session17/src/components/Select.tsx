import React, { useState } from "react";

export default function Select() {
  const [value, setValue] = useState("");

  return (
    <div>
      <p>Thanh pho: {value}</p>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="" disabled>
          ---Chọn thành phố---
        </option>
        <option value="Ha Noi">Ha Noi</option>
        <option value="Ha Nam">Ha Nam</option>
        <option value="Ninh Binh">Ninh Binh</option>
        <option value="Thanh Hoa">Thanh Hoa</option>
      </select>
    </div>
  );
}
