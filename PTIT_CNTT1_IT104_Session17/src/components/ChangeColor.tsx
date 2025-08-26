import React, { useState } from "react";

export default function ChangeColor() {
  const [isColor, setIsColor] = useState<boolean>(false);

  return (
    <div>
      <p style={{ color: isColor ? "red" : "black" }}>Tieu de van ban</p>
      <button onClick={() => setIsColor(!isColor)}>Thay doi mau</button>
    </div>
  );
}
